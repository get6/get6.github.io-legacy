import React from "react"
import { Provider } from "react-redux"
import createStore from "../state/create-store"

const WrapWithProvider = ({ element }) => {
  const store = createStore()

  return <Provider store={store}>{element}</Provider>
}

export default WrapWithProvider
