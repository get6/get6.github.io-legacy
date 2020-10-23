import React, { useState } from "react"
import Switch from "./switch"
import { SiAboutDotMe } from "react-icons/si"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <header>
      <Navbar expand="md" light={!props.dark} dark={props.dark}>
        <NavbarBrand href="/">{props.title}</NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/tags/">Tags</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">
                About&nbsp;
                <SiAboutDotMe />
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Switch isOn={props.dark} handleToggle={props.onChangeDarkMode} />
          </NavbarText>
        </Collapse>
      </Navbar>
    </header>
  )
}

export default Header
