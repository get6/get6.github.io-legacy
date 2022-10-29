import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <div className="mx-auto flex max-w-5xl justify-start align-middle">
      <h1 className="mt-20 mb-6 text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-4xl">
        {children}
      </h1>
    </div>
  )
}

export default PostTitle
