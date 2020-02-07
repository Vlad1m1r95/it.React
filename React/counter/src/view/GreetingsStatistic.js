import React from 'react';
import './../sass/GretingsStatistic.sass'

function GreetingsStatistic(props) {
  const { greetings, text } = props.settings
  const { state } = props
  return (
    <div className="wrapParentCounter">
      <h1 className="appGreeting">{greetings}</h1>
      <h3 className="counterText">{text} <p>{state}</p></h3>
    </div>
  )
}

export default GreetingsStatistic