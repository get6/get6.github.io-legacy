import { PropsWithChildren } from 'react'
import NavBar from './NavBar'

type LayoutProps = {}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default Layout
