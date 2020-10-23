import React from "react"
import "./switch.scss"

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        //onChange={e => set(e.target.checked ? "dark" : "light")}
        onChange={handleToggle}
        checked={isOn}
        id="theme-toggle"
        type="checkbox"
      />
      <label htmlFor="theme-toggle">
        <span></span>
      </label>
    </>
  )
}

export default Switch
