import React, { useRef, useLayoutEffect } from "react"
import { HiArrowCircleUp } from "react-icons/hi"
import "./fab.css"

const scrollToRef = ref => window.scrollTo(0, 0)

const FloatingActionButton = () => {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <HiArrowCircleUp
      title="scroll"
      size={50}
      className="btn-fab"
      onClick={() => {
        executeScroll()
      }}
    />
  )
}

export default FloatingActionButton
