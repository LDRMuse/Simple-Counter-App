import React from "react"

import { Button } from './Button'

import "./Display.css"

export class Display extends React.Component {

  state = {
    currentCount: 0
  }

  updateCount() {
    // Set state with new count from prevState
  }

  render() {
    // pass some props
    return (
      <div>
        <p>{this.state.currentCount}</p>
        <Button buttonHandler={this.updateCount} buttonTxt="Add 1" />
      </div>
    )
  }
}
