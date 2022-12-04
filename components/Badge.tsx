import { PropsWithChildren } from 'react'

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div className="leading-sm mr-2 mb-2 inline-flex rounded-full border bg-white px-3 py-2 text-xs font-bold uppercase text-gray-700 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-gray-100">
      {children}
    </div>
  )
}

export default Badge
