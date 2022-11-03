import DateFormatter from './DateFormatter'
import CoverImage from './CoverImage'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    // <div>
    //   <div className="mb-5">
    //     <CoverImage slug={slug} title={title} src={coverImage} />
    //   </div>
    //   <h3 className="mb-3 text-3xl leading-snug">
    //     <Link as={`/posts/${slug}`} href="/posts/[slug]">
    //       <a className="hover:underline">{title}</a>
    //     </Link>
    //   </h3>
    //   <div className="mb-4 text-lg">
    //     <DateFormatter dateString={date} />
    //   </div>
    //   <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    // </div>
    <div>
      <Image
        className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
        src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
        width={400}
        height={400}
      />

      <div className="mt-8">
        {/* TODO 카테고리 누르면 카테고리 페이지에 해당 카테고리 검색해서 보여주기 */}
        <span className="uppercase text-blue-500">category</span>
        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
          </div>
          <Link as={`/posts/${slug}`} href="/posts/[...slug]">
            <a className="inline-block text-blue-500 underline hover:text-blue-400">
              Read more
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostPreview
