import React from "react"
import { Container } from "@material-ui/core"
import Header from "./organisms/header"
import FAB from "./molecules/fab"
import Footer from "./molecules/footer"
import MaterialProvider from "./material-provider"
import Snow from "./atoms/snow"
import { WindowLocation } from "@reach/router"

interface DataProps {
  location: WindowLocation
  title: string
  children: React.ReactNode
}

const Layout = ({ location, title, children }: DataProps) => {
  return (
    <>
      <MaterialProvider>
        <Container maxWidth="lg">
          <Header title={title} />
          <main>{children}</main>
        </Container>
      </MaterialProvider>
      <FAB />
      <Footer />
    </>
  )
}

export default Layout
