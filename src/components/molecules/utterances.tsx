import React, { useRef, useLayoutEffect } from "react"

const Utterances: React.FC = () => {
  const src = "https://utteranc.es/client.js"
  const repo = "get6/get6.github.io"
  const commentBox = useRef<HTMLDivElement>(null)

  // after rendering component
  useLayoutEffect(() => {
    const utterances = document.createElement("script")
    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      // label: "comment",
      theme: "preferred-color-scheme",
      crossOrigin: "anonymous",
      async: "true",
    }
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })
    if (commentBox.current) {
      commentBox.current.appendChild(utterances)
    }
  }, [])

  return <div ref={commentBox} />
}

export default Utterances
