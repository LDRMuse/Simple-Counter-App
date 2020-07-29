import React from "react"

import { Button } from './Button'

import "./Display.css"

export class Display extends React.Component {

  state = {
    currentCount: 0,
  }

  // the child button will send up the 'event' info via {target}
  updateCount = ({target}) => {
    this.setState(prevState => {
      return { currentCount: prevState.currentCount + Number(target.dataset.increment) }
    })
  }

  render() {
    // pass some props
    return (
      <div>
        <p>{this.state.currentCount}</p>
        <Button buttonHandler={this.updateCount} increment={1} buttonTxt="Add 1" />
        <Button buttonHandler={this.updateCount} increment={2} buttonTxt="Add 2" />
      </div>

    )
  }
}
