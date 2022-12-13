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
import React, { useState } from 'react'

type Tag = {
  name: string
  slug: string[]
}

type Props = {
  posts: Post[]
  initialDisplayPosts: Post[]
  tags: Tag[]
}

const Tags: NextPage<Props> = ({ posts, initialDisplayPosts = [], tags }) => {
  const [selectValue, setSelectValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.tags.includes(selectValue.toLowerCase())
    return searchContent
  })
  const displayPosts =
    initialDisplayPosts.length > 0 && !selectValue
      ? initialDisplayPosts
      : filteredBlogPosts
  return (
    <Container>
      <PostTitle>All Tags</PostTitle>
      <div className="mx-auto flex max-w-6xl flex-wrap">
        {tags.map((tag, index) => (
          <button
            key={index}
            value={tag.name}
            onClick={(e) => setSelectValue(e.currentTarget.value)}
          >
            <Badge>{`${tag.slug.length} ${tag.name}`}</Badge>
          </button>
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
            {displayPosts.map((post, index) => (
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
                </Table.Data>
                <Table.Data>
                  <ul className="flex space-x-2">
                    {post.tags.map((tag, index) => (
                      <li key={index}>
                        <button
                          key={index}
                          value={tag}
                          onClick={(e) => setSelectValue(e.currentTarget.value)}
                        >
                          <HashTag>{tag}</HashTag>
                        </button>
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
  const posts = getAllPosts(['title', 'tags', 'date', 'slug'])
  const initialDisplayPosts = posts
  // TODO 체이닝으로 바꿔보기
  let allTags: Tag[] = []
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    for (let j = 0; j < post.tags.length; j++) {
      const tag = post.tags[j]
      allTags.push({ name: tag, slug: [post.slug] })
    }
  }
  const tags: Tag[] = allTags.reduce((acc: Tag[], cur: Tag) => {
    const found = acc.find((tag) => tag.name === cur.name)
    if (found) {
      found.slug.push(cur.slug[0])
    } else {
      acc.push(cur)
    }
    return acc
  }, [])

  return {
    props: { posts, initialDisplayPosts, tags },
  }
}
