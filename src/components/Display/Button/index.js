import PropTypes from 'prop-types'
import React from 'react'
import "./Button.css"

export const Button = (props) => {
  const handleClick = (event) => {
    props.buttonHandler(event)
    //event means target
  }
return <button onClick = {handleClick} data-increment={props.increment}>{props.buttonTxt}</button>
// data- ties to dataset.increment ^

}
// These are the prop types above
Button.propTypes = {
  buttonHandler: PropTypes.func,
  buttonTxt: PropTypes.string,
  increment: PropTypes.number
}

Button.defaultProps = {
  buttonTxt: "Add 1",
  increment: 1 }


