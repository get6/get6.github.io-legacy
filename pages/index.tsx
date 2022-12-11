import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import NotFoundPost from '../components/NotFoundPost'
import PostPreview from '../components/PostPreview'
import SearchIcon from '../components/SearchIcon'
import Post from '../types/post'
import { getAllPosts } from './api/content'

type Props = {
  posts: Post[]
  initialDisplayPosts: Post[]
}

const Home: NextPage<Props> = ({ posts, initialDisplayPosts = [] }) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent =
      frontMatter.title + frontMatter.excerpt + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Sunhwang&apos;s blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="container mx-auto py-20">
          <div className="flex items-center">
            <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
              All posts{' '}
            </h1>
            <div className="relative ml-6 max-w-lg shrink grow">
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
                className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <SearchIcon />
            </div>
          </div>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
          {!filteredBlogPosts.length && <NotFoundPost />}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {displayPosts.map((post, index) => (
              <PostPreview key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'tags',
  ])

  return {
    props: { posts },
  }
}
