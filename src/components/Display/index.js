import React from "react"

import { Button } from './Button'

import "./Display.css"

export class Display extends React.Component {

  state = {
    currentCount: 0,
  }
  buttons = [
    {
    buttonTxt: 'Add 1',
    increment: 1,
  },
  {
    buttonTxt: 'Add 2',
    increment: 2,
},
]
// i is the index of element in array
renderButtons = () => {
  this.buttons.map((button, i) => {
    return (
    <Button
    buttonHandler={this.updateCount}
    increment={button.increment}
    buttonTxt={button.buttonTxt}
    //react needs an identifier which is {i}
    key={i}
    />
    )
  })
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
        {renderButtons()}
      </div>

    )
  }
}
