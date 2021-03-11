import React from "react"

interface DataProps {
  label: string
  emoji: string
}

const Emoji: React.FC<DataProps> = ({ label, emoji }) => {
  return (
    <span role="img" aria-label={label}>
      {emoji}
    </span>
  )
}

export default Emoji
