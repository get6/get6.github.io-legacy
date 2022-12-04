import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
  dateFormat?: string
}

const DateFormatter = ({ dateString, dateFormat }: Props) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, dateFormat || 'yyyy-MM-dd')}
    </time>
  )
}

export default DateFormatter
