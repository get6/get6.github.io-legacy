import { PropsWithChildren } from 'react'

const HashTag = ({ children }: PropsWithChildren) => {
  return (
    <span className="whitespace-nowrap rounded-full border bg-white px-2.5 py-0.5 text-sm text-gray-700">
      {`#${children}`}
    </span>
  )
}

export default HashTag
