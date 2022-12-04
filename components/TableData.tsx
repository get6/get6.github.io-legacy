import { PropsWithChildren } from 'react'

const TableData = ({ children }: PropsWithChildren) => {
  return <td className="py-4 px-6">{children}</td>
}

export default TableData
