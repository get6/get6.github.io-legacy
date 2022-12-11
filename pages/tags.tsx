import { NextPage } from 'next'
import { getAllPosts } from './api/content'
import Post from '../types/post'
import Container from '../components/Container'
import Badge from '../components/Badge'
import PostTitle from '../components/PostTitle'
import HashTag from '../components/HashTag'
import Table from '../components/Table'
import DateFormatter from '../components/DateFormatter'
import Link from 'next/link'

type Tag = {
  name: string
  slug: string[]
}

type Props = {
  allPosts: Post[]
  allTags: Tag[]
}

const Tags: NextPage<Props> = ({ allPosts, allTags }) => {
  return (
    <Container>
      <PostTitle>All Tags</PostTitle>
      <div className="mx-auto flex max-w-6xl flex-wrap">
        {allTags.map((tag, index) => (
          <Badge key={index}>{`${tag.slug.length} ${tag.name}`}</Badge>
        ))}
      </div>
      <br />
      <div className="mx-auto max-w-6xl">
        <Table>
          <Table.Head>
            <Table.Header>Title</Table.Header>
            <Table.Header>Date</Table.Header>
            <Table.Header>Tags</Table.Header>
          </Table.Head>
          <Table.Body>
            {allPosts.map((post, index) => (
              <tr
                key={index}
                className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                >
                  <Link href={`/posts/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </th>
                <Table.Data>
                  <DateFormatter dateString={post.date} />
                  {/* {post.date}  */}
                </Table.Data>
                <Table.Data>
                  <ul className="flex space-x-2">
                    {post.tags.map((tag, index) => (
                      <li key={index} className="hover:cursor-pointer">
                        <HashTag>{tag}</HashTag>
                      </li>
                    ))}
                  </ul>
                </Table.Data>
              </tr>
            ))}
          </Table.Body>
        </Table>
      </div>
      <br />
    </Container>
  )
}

export default Tags

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'tags', 'date', 'slug'])
  // TODO 체이닝으로 바꿔보기
  let tags: Tag[] = []
  for (let i = 0; i < allPosts.length; i++) {
    const post = allPosts[i]
    for (let j = 0; j < post.tags.length; j++) {
      const tag = post.tags[j]
      tags.push({ name: tag, slug: [post.slug] })
    }
  }
  const allTags: Tag[] = tags.reduce((acc: Tag[], cur: Tag) => {
    const found = acc.find((tag) => tag.name === cur.name)
    if (found) {
      found.slug.push(cur.slug[0])
    } else {
      acc.push(cur)
    }
    return acc
  }, [])

  return {
    props: { allPosts, allTags },
  }
}
