import React from "react"
import { makeStyles } from "@material-ui/core"

const switchCSS = {
  toggleSize: "1rem",
  switchW: "3.5em",
  switchH: "1.6em",
  switchHandleScale: ".65",
  switchOffHandleX: "-.125em",
  switchOnHandleX: "calc(100% - .125em)",
  switchTransitionDuration: ".2s",
}

const useStyles = makeStyles(() => ({
  input: {
    display: "none",
    "& + label": {
      fontSize: switchCSS.toggleSize,
      display: "flex",
      height: switchCSS.switchH,
      width: switchCSS.switchW,
      borderRadius: `calc(${switchCSS.switchH} / 2)`,
      backgroundSize: "auto 8em",
      backgroundPosition: "bottom",
      backgroundImage:
        "linear-gradient(180deg, #021037 0%, #20206A 19%, #4184B1 66%, #62E7F7 100%)",
      transition: switchCSS.switchTransitionDuration,
      border: ".125em solid hsl(207, 30%, 95%)",
      overflow: "hidden",
    },
    "& + label span": {
      background: "#fffad8",
      borderRadius: "50%",
      height: switchCSS.switchH,
      width: switchCSS.switchH,
      transform: `translate(${switchCSS.switchOffHandleX}) scale(${switchCSS.switchHandleScale})`,
      transition: switchCSS.switchTransitionDuration,
      cursor: "pointer",
      boxShadow:
        "0 0 .25em .0625em #fbee8d, 0 0 2em 0 #FFEB3B, inset -.25em -.25em 0 0 #fbee8e, inset -.3125em -.3125em 0 .625em #fff5b2",
      marginTop: switchCSS.switchOffHandleX,
    },

    "&:checked": {
      fontSize: switchCSS.toggleSize,
      "& + label": {
        backgroundPosition: "top",
        borderColor: "hsl(207, 30%, 50%)",
      },
      "& + label span": {
        background: "transparent",
        transform: `translateX(${switchCSS.switchOnHandleX}) scale(${switchCSS.switchHandleScale})`,
        boxShadow:
          "inset -.1875em -.1875em 0 0 #fbe7ef, inset -.5625em -.5625em 0 0 #fffff7",
      },
    },
  },
}))

const Switch = ({ isOn, handleToggle }) => {
  const classes = useStyles()

  return (
    <>
      <input
        onChange={handleToggle}
        checked={isOn}
        id="theme-toggle"
        type="checkbox"
        className={classes.input}
      />
      <label htmlFor="theme-toggle">
        <span></span>
      </label>
    </>
  )
}

export default Switch
