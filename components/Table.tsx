import { PropsWithChildren } from 'react'
import TableBody from './TableBody'
import TableData from './TableData'
import TableHead from './TableHead'
import TableHeader from './TableHeader'

const Table = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full table-auto text-left text-sm text-gray-500 dark:text-gray-400">
        {children}
      </table>
    </div>
  )
}

Table.Head = TableHead
Table.Header = TableHeader
Table.Body = TableBody
Table.Data = TableData

export default Table
