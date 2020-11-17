import React from "react"
import PropTypes from "prop-types"

import { Link, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { AboutDotMe } from "@icons-pack/react-simple-icons"
import Switch from "./switch"
import InheritLink from "./inherit-link"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-around",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

const Header = ({ title, dark, darkToggle, categories }) => {
  const classes = useStyles()
  const sections = [
    {
      title: "Tags",
      url: "/tags",
      icon: "",
    },
    {
      title: "About ",
      url: "/about",
      icon: <AboutDotMe size={14} />,
    },
  ]

  return (
    <header>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h3"
          variant="h6"
          noWrap
          className={classes.toolbarTitle}
        >
          <InheritLink to={"/"}>{title}</InheritLink>
        </Typography>
        {sections.map(section => (
          <InheritLink
            key={section.title}
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
            {section.icon}
          </InheritLink>
        ))}
        <Switch isOn={dark} handleToggle={darkToggle} />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {categories.map((category, i) => (
          <InheritLink
            key={i}
            to={"/tags" + category.link}
            className={classes.toolbarLink}
          >
            {category.icon}
            {category.name}
          </InheritLink>
        ))}
      </Toolbar>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  darkToggle: PropTypes.func.isRequired,
}

export default Header
