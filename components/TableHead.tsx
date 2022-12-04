import { PropsWithChildren } from 'react'

const TableHead = ({ children }: PropsWithChildren) => {
  return (
    <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
      {children}
    </thead>
  )
}

export default TableHead
