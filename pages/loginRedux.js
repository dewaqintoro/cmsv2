import React, { Component } from 'react'
import { Provider } from 'react-redux'
import login from './login/reducers';
import { createStore } from 'redux'
import Appku from './login/App.js'
const store = createStore(
  login
)
class Loginneh extends Component {
  render() {
    return (
      <Provider store={store}>
        <Appku/>
      </Provider>
    )
  }
}

export default Loginneh