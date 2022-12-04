import { PropsWithChildren } from 'react'

const TableHeader = ({ children }: PropsWithChildren) => {
  return (
    <th scope="col" className="py-3 px-6">
      {children}
    </th>
  )
}

export default TableHeader
