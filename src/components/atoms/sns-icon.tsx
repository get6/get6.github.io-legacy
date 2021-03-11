import { Grid, Link } from "@material-ui/core"
import React from "react"

interface DataProps {
  href: string
  icon: JSX.Element
  iconName: string
}

// SNS url component
const SNSIcon: React.FC<DataProps> = ({ href, icon, iconName }) => {
  return (
    <Link href={href} target="_blank" color="inherit">
      <Grid item container spacing={1} alignItems="center">
        <Grid item>{icon}</Grid>
        <Grid item>{iconName}</Grid>
      </Grid>
    </Link>
  )
}

export default SNSIcon
