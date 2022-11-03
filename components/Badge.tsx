import { PropsWithChildren } from 'react'

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500">
      {children}
    </span>
  )
}

export default Badge
