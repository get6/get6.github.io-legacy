import React from "react"
import { GrGithub } from "react-icons/gr"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import FooterBackground from "./footer-background.png"

const Footer = () => {
  return (
    <Box
      width={1}
      // height="100vh"
      component="img"
      position="absolute"
      left="0"
      bottom="0"
      zIndex="-1"
      src={FooterBackground}
      alt="footer-image"
    />
  )
}

export default Footer
