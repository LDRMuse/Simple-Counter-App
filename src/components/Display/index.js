import React, { Fragment } from "react"

import {Button} from './Button'

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
  <Fragment>
  <p>{this.state.currentCount}</p>
  <Button buttonHandler={this.updateCount} buttonTxt="Add 1"/>
  </Fragment>
    )
  }
}
