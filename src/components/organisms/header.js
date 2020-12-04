import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Toolbar, Typography, makeStyles } from "@material-ui/core"
import { AboutDotMe } from "@icons-pack/react-simple-icons"
import Switch from "../atoms/switch"
import InheritLink from "../atoms/inherit-link"
import { connect } from "react-redux"

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

const Header = ({ title, dark, darkToggle }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          categories {
            name
            link
            children {
              name
              link
            }
          }
        }
      }
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const categories = data.site.siteMetadata.categories
  const tags = data.allMarkdownRemark.group

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

  // Tag있는 게시글만 찾음
  const filterdCategories = categories.filter(category => {
    // Find index in tags
    const i = tags.findIndex(
      tag => tag.fieldValue.toLowerCase() === category.name.toLowerCase()
    )
    const tag = tags[i]
    return tag ? 0 < tag.totalCount : false
  })

  const Dark = ({ dark, change }) => (
    <Switch isOn={dark} handleToggle={change} />
  )

  const mapStateToProps = ({ dark }) => {
    return dark
  }

  const mapDispatchToProps = dispatch => {
    return { change: () => dispatch({ type: `CHANGE` }) }
  }

  const ConnectedDark = connect(mapStateToProps, mapDispatchToProps)(Dark)

  return (
    <header>
      <Toolbar className={classes.toolbar}>
        <Typography noWrap className={classes.toolbarTitle}>
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
        <ConnectedDark />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {filterdCategories.map((category, i) => (
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
}

export default Header
