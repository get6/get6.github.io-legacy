import React from "react"
import PropTypes from "prop-types"
import Link from "@material-ui/core/Link"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { SiAboutDotMe } from "react-icons/si"
import Switch from "./switch"

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
  console.log(categories)
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
      icon: <SiAboutDotMe />,
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
          <Link color="inherit" href="/">
            {title}
          </Link>
        </Typography>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
            {section.icon}
          </Link>
        ))}
        <Switch isOn={dark} handleToggle={darkToggle} />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {categories.map((category, i) => (
          <Link
            color="inherit"
            noWrap
            key={i}
            variant="body2"
            href={category.link}
            className={classes.toolbarLink}
          >
            {category.icon}
            {category.name}
          </Link>
        ))}
      </Toolbar>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  darkToggle: PropTypes.func.isRequired,
  // sections: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     url: PropTypes.string.isRequired,
  //   }),
  // ).isRequired,
}

export default Header
