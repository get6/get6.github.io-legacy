import React from "react"
import { GrGithub } from "react-icons/gr"
import FooterBackground from "./footer-background.png"

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <img
        src={FooterBackground}
        alt="footer-image"
        style={{
          width: "100%",
          height: "auto",
        }}
      ></img>
      {/* <a href="https://github.com/get6/get6.github.io">
        <GrGithub /> Here
      </a>{" "}
      is my source{" "} */}
    </footer>
  )
}

export default Footer
