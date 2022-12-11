import DateFormatter from './DateFormatter'
import CoverImage from './CoverImage'
import Link from 'next/link'
import Image from 'next/image'
import HashTag from './HashTag'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
  tags: string[]
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags,
}: Props) => {
  return (
    <div className="flex flex-col">
      <Link as={`/posts/${slug}`} href="/posts/[...slug]">
        <Image
          className="h-64 w-full rounded-lg object-cover object-center hover:cursor-pointer lg:h-80"
          src="/assets/coding.jpg"
          alt=""
          width={400}
          height={400}
        />
      </Link>
      <div className="mt-6 flex flex-col hover:cursor-pointer">
        <Link as={`/posts/${slug}`} href="/posts/[...slug]">
          <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h1>
        </Link>
        <Link as={`/posts/${slug}`} href="/posts/[...slug]">
          <p className="mt-4 text-gray-500 line-clamp-2 dark:text-gray-400">
            {excerpt}
          </p>
        </Link>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <DateFormatter dateString={date} />
        </p>
        <ul className="flex justify-end space-x-1">
          {tags.slice(0, 3).map((tag, index) => {
            return (
              <li key={index} className="hover:cursor-pointer">
                <HashTag>{tag}</HashTag>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PostPreview
