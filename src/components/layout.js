import React from "react"
import { Container } from "@material-ui/core"
import Header from "./organisms/header"
import FAB from "./molecules/fab"
import Footer from "./molecules/footer"
import MaterialProvider from "./material-provider"

const Layout = ({ location, title, children }) => {
 
  return (
    <MaterialProvider>
      <Container maxWidth="lg">
        <Header location={location} title={title} />
        <main>{children}</main>
      </Container>
      <FAB />
      <Footer />
    </MaterialProvider>
  )
}

export default Layout
