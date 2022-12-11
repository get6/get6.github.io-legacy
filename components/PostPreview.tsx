import DateFormatter from './DateFormatter'
import CoverImage from './CoverImage'
import Link from 'next/link'
import Image from 'next/image'
import Tags from '../pages/tags'
import Badge from './Badge'
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
      <Image
        className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
        src="/assets/coding.jpg"
        alt=""
        width={400}
        height={400}
      />
      <Link as={`/posts/${slug}`} href="/posts/[...slug]">
        <div className="mt-6 flex flex-col hover:cursor-pointer">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h1>
          <p className="mt-4 text-gray-500 line-clamp-2 dark:text-gray-400">
            {excerpt}
          </p>
        </div>
      </Link>
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
