import React from "react"
import PropTypes from "prop-types"
import { Link, Toolbar, Typography } from "@material-ui/core"
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

  // for (const i in categories) {
  //   if (categories.hasOwnProperty(i)) {
  //     const category = categories[i]
  //     switch (category.name.toLowerCase()) {
  //       case "frontend":
  //         category.icon = "⭐️ "
  //         break
  //       case "backend":
  //         category.icon = "🔥 "
  //         break
  //       case "devops":
  //         category.icon = "☁️ "
  //         break
  //       case "tools":
  //         category.icon = "🛠 "
  //         break
  //       case "others":
  //         category.icon = "🙋‍♀️ "
  //         break
  //       case "all posts":
  //         category.icon = "😍 "
  //         break
  //     }
  //   }
  // }

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
