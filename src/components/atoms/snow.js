import React, { useLayoutEffect } from "react"

const Snow = () => {
  // Amount of Snowflakes
  const snowMax = 35

  // Snowflake Colours
  const snowColor = ["#DDD", "#EEE"]

  // Falling Velocity
  const snowSpeed = 0.6

  // Minimum Flake Size
  const snowMinSize = 8

  // Maximum Flake Size
  const snowMaxSize = 24

  // Refresh Rate (in milliseconds)
  const snowRefresh = 50

  /*
    // End of Configuration
    // ----------------------------------------
    // Do not modify the code below this line
    */
  let snow = [],
    pos = [],
    coords = [],
    lefr = [],
    marginBottom,
    marginRight

  const randomise = range => {
    return Math.floor(range * Math.random())
  }

  const moveSnow = () => {
    for (let i = 0; i < snowMax; i++) {
      coords[i] += pos[i]
      snow[i].posY += snow[i].sink
      snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px"
      snow[i].style.top = snow[i].posY + "px"

      if (
        snow[i].posY >= marginBottom - 2 * snow[i].size ||
        parseInt(snow[i].style.left) > marginRight - 3 * lefr[i]
      ) {
        snow[i].posX = randomise(marginRight - snow[i].size)
        snow[i].posY = 0
      }
    }

    setTimeout(moveSnow, snowRefresh)
  }

  const initSnow = () => {
    const snowSize = snowMaxSize - snowMinSize
    // marginBottom = document.body.scrollHeight - 5;
    // marginRight = document.body.clientWidth - 15;
    marginBottom = window.innerHeight - 5
    marginRight = window.innerWidth - 15

    for (let i = 0; i < snowMax; i++) {
      coords[i] = 0
      lefr[i] = Math.random() * 15
      pos[i] = 0.03 + Math.random() / 10
      snow[i] = document.getElementById("flake" + i)
      snow[i].style.fontFamily = "inherit"
      snow[i].size = randomise(snowSize) + snowMinSize
      snow[i].style.fontSize = snow[i].size + "px"
      snow[i].style.color = snowColor[randomise(snowColor.length)]
      snow[i].style.zIndex = -1
      snow[i].sink = (snowSpeed * snow[i].size) / 5
      snow[i].posX = randomise(marginRight - snow[i].size)
      snow[i].posY = randomise(
        2 * marginBottom - marginBottom - 2 * snow[i].size
      )
      snow[i].style.left = snow[i].posX + "px"
      snow[i].style.top = snow[i].posY + "px"
    }

    moveSnow()
  }

  const resize = () => {
    // marginBottom = document.body.scrollHeight - 5;
    // marginRight = document.body.clientWidth - 15;
    marginBottom = window.innerHeight - 5
    marginRight = window.innerWidth - 15
  }

  useLayoutEffect(() => {
    resize()
    initSnow()
  }, [])

  return (
    <>
      {[...Array(snowMax)].map((_, i) => {
        return (
          <span
            key={i}
            id={"flake" + i}
            style={{
              cursor: "default",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              MsUserSelect: "none",
              OUserSelect: "none",
              UserSelect: "none",
              position: "absolute",
              top: "-" + snowMaxSize,
            }}
          >
            &bull;
          </span>
        )
      })}
    </>
  )
}

export default Snow
