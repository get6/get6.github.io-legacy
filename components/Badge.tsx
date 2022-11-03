import { PropsWithChildren } from 'react'

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div className="leading-sm my-1 inline-flex items-center rounded-full border bg-white px-3 py-2 text-xs font-bold uppercase text-gray-700">
      {children}
    </div>
  )
}

export default Badge
