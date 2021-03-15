import React from "react"
import { Container, makeStyles } from "@material-ui/core"
import Header from "./organisms/header"
import FAB from "./molecules/fab"
import MaterialProvider from "./material-provider"
import { WindowLocation } from "@reach/router"

interface DataProps {
  location: WindowLocation
  title: string
  children: React.ReactNode
}

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(10),
  },
}))

const Layout: React.FC<DataProps> = ({ location, title, children }) => {
  const classes = useStyles()
  return (
    <MaterialProvider>
      <Container className={classes.root}>
        <Header title={title} />
        <main>{children}</main>
      </Container>
      <FAB />
    </MaterialProvider>
  )
}

export default Layout
