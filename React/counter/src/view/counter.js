import React from 'react';
import './../sass/counter.sass'
import { setStateCounter } from './../storage/state/countersState';


function Counter(props) {
  const {
    counter,
    dataAttr,
    step,
    id,
  } = props.settings
  const { update, state } = props
  const { decriment, incriment } = step
  const {
    inc,
    dec
  } = dataAttr
  console.log(props)
  function callback(relevantCounter) {
    setStateCounter(id, relevantCounter)
    console.log(state)
  }
  const updateProps = {
    state,
    decriment,
    incriment,
    callback,
  }

  return (
    <div className="Counter">
      <button data-id={id} onClick={update.bind(this, updateProps)} data-operation={dec} className="DecrementCircle">-</button>
      <div className="MainCircle">
        <div className="CounterCircle" >{state}</div>
      </div>
      <button data-id={id} onClick={update.bind(this, updateProps)} data-operation={inc} className="IncrementCircle">+</button>
      <div className="StatusCircle" ></div>
    </div>
  )
}

export default Counter