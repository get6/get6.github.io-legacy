import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PostPreview from '../components/PostPreview'
import Post from '../types/post'
import { getAllPosts } from './api/content'

type Props = {
  allPosts: Post[]
}

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Sunhwang&apos;s blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
              recent posts{' '}
            </h1>

            <button className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {allPosts.map((post, index) => (
              <PostPreview key={index} {...post} />
            ))}
            <div>
              <Image
                className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                width={500}
                height={500}
              />

              <div className="mt-8">
                <span className="uppercase text-blue-500">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  All the features you want to know
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-300"
                    >
                      Arthur Melo
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 6, 2022
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
                src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
                width={400}
                height={400}
              />

              <div className="mt-8">
                <span className="uppercase text-blue-500">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Which services you get from Meraki UI
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-300"
                    >
                      Tom Hank
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 19, 2022
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
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
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
