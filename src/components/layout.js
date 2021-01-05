import React from "react"
import { Container } from "@material-ui/core"
import Header from "./organisms/header"
import FAB from "./molecules/fab"
import Footer from "./molecules/footer"
import MaterialProvider from "./material-provider"
import Snow from "./atoms/snow"

const Layout = ({ location, title, children }) => {
  return (
    <>
      <MaterialProvider>
        <Container maxWidth="lg">
          <Header location={location} title={title} />
          <main>{children}</main>
        </Container>
      </MaterialProvider>
      <FAB />
      <Footer />
      {[0, 1, 2, 11].indexOf(new Date().getMonth()) != -1 && <Snow />}
    </>
  )
}

export default Layout
