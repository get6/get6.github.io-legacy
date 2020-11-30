import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `CHANGE`) {
    localStorage.setItem("dark", !state)
    return !state
  }
  return state
}

const initialState = false

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
