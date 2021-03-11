import React, { useLayoutEffect } from "react"

const Snow: React.FC = () => {
  // Amount of Snowflakes
  const snowMax: number = 35

  // Snowflake Colours
  const snowColor: string[] = ["#DDD", "#EEE"]

  // Falling Velocity
  const snowSpeed: number = 0.6

  // Minimum Flake Size
  const snowMinSize: number = 8

  // Maximum Flake Size
  const snowMaxSize: number = 24

  // Refresh Rate (in milliseconds)
  const snowRefresh: number = 50

  let pos: number[] = [],
    coords: number[] = [],
    lefr: number[] = [],
    marginBottom: number,
    marginRight: number

  const randomise = (range: number) => Math.floor(range * Math.random())

  const moveSnow = () => {
    for (let i = 0; i < snowMax; i++) {
      let element = document.getElementById("flake" + i) as SnowSpan
      coords[i] += pos[i]
      element.posY += element.sink
      element.style.left = element.posX + lefr[i] * Math.sin(coords[i]) + "px"
      element.style.top = element.posY + "px"

      if (
        element.posY >= marginBottom - 2 * element.size ||
        parseInt(element.style.left) > marginRight - 3 * lefr[i]
      ) {
        element.posX = randomise(marginRight - element.size)
        element.posY = 0
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
      let element = document.getElementById("flake" + i) as SnowSpan
      if (element) {
        element.style.fontFamily = "inherit"
        element.size = randomise(snowSize) + snowMinSize
        element.style.fontSize = element.size + "px"
        element.style.color = snowColor[randomise(snowColor.length)]
        element.style.zIndex = "-1"
        element.sink = (snowSpeed * element.size) / 5
        element.posX = randomise(marginRight - element.size)
        element.posY = randomise(
          2 * marginBottom - marginBottom - 2 * element.size
        )
        element.style.left = element.posX + "px"
        element.style.top = element.posY + "px"
      }
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
            is="snow-span"
            key={i}
            id={"flake" + i}
            style={{
              cursor: "default",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
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
