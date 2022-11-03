import { NextPage } from 'next'
import { getAllPosts } from './api/content'
import Post from '../types/post'
import Container from '../components/Container'
import Badge from '../components/Badge'

type Tag = {
  name: string
  slug: string[]
}

type Props = {
  allPost: Post[]
  allTags: Tag[]
}

const Tags: NextPage<Props> = ({ allPost, allTags }) => {
  return (
    <Container>
      <div className="flex flex-wrap items-center space-x-2 space-y-2 py-2">
        {allTags.map((tag, index) => (
          <Badge key={index}>
            {tag.slug.length}&nbsp;{tag.name}
          </Badge>
        ))}
      </div>
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
  let allTags: Tag[] = tags.reduce((acc: Tag[], cur) => {
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
