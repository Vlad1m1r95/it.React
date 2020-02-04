import React from 'react';
import PerentCounter from './ParentCounter.Component';

class Counter extends PerentCounter {
  constructor(props) {
    super(props)
    this.state = { counter: this.props.counter }
    this.mathOperations = {
      dec: this.props.dec,
      inc: this.props.inc,
    }
    this.limit = {
      max: this.props.max,
      min: this.props.min
    }
    this.lock = ``
  }
  //setCounter 
  setCounterValue(relevantCounter) {
    this.setState({
      counter: relevantCounter
    },
      this.updateData(this.state.counter)
    )
  }
  //Decrease and increase
  decriment(state, dec) {
    if (this.isMinLimit()) {
      this.setState({
        counter: this.limit.min
      })
    }
    else {
      let relevantCounter = state - dec
      if (relevantCounter < this.limit.min) {
        relevantCounter = this.limit.min
      }
      this.setCounterValue(relevantCounter)
    }
  }
  increment(state, inc) {
    if (this.isMaxLimit()) {
      this.setState({
        counter: this.limit.max
      })
    } else {
      let relevantCounter = state + inc
      if (relevantCounter > this.limit.max) {
        relevantCounter = this.limit.max
      }
      this.setCounterValue(relevantCounter)
    }

  }
  isMaxLimit() {
    if (this.limit.max !== undefined) {
      return this.state.counter >= this.limit.max
    }
    else {
      return false
    }


  }
  isMinLimit() {
    if (this.limit.min !== undefined) {
      return this.state.counter <= this.limit.min
    }
    else {
      return false
    }
  }
  render() {
    return (
      <div className="WrapCounter">
        <div className="DecrementCircle"
          onClick={
            this.decriment.bind(
              this,
              this.state.counter,
              this.mathOperations.dec,
              this.limit
            )
          } >
          {this.isMinLimit() ? <img className="lock" src="https://cdn2.iconfinder.com/data/icons/stomach-symptoms-glyph/64/154_constipation-lock-latch-512.png" alt="lock"></img> : `-`}
        </div>
        <div className="MainCircle">
          <div className="CounterCircle" >{this.state.counter}</div>
        </div>
        <div className="IncrementCircle"
          onClick={
            this.increment.bind(
              this,
              this.state.counter,
              this.mathOperations.inc,
              this.limit
            )
          }>
          {this.isMaxLimit() ? <img className="lock" src="https://cdn2.iconfinder.com/data/icons/stomach-symptoms-glyph/64/154_constipation-lock-latch-512.png" alt="lock"></img> : `+`}
        </div>
        <div className="StatusCircle" ></div>
      </div>
    )
  }
}

export default Counter