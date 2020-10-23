import React, { useState, useEffect } from "react"
import { Alert, Button, Fade, Nav, NavLink } from "reactstrap"

const Category = ({ categories, getAlertName }) => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(!fadeIn)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Fade in={fadeIn} color="dark">
      <Nav color="info" className="justify-content-center">
        {categories.map((category, i) => {
          return (
            <NavLink key={i} href={"#" + category.toLowerCase()}>
              <Button color="info" outline>
                {getAlertName(category)}
              </Button>
            </NavLink>
          )
        })}
      </Nav>
    </Fade>
  )
}

export default Category
