import React from 'react';
import './../../sass/parentCounter.sass'
class PerentCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.greetings = {
      greetings: this.props.greetings,
      text: this.props.counterText,
    }

  }

  updateData(value) {
    // this.setState({ counter: value })
    // console.log(this.state.counter)
    console.log(value)
  }
  // componentDidMount() {
  //   return this.props.counter
  // }

  render() {
    return (
      <div className="wrapParentCounter">
        <h1 className="appGreeting">{this.greetings.greetings}</h1>
        <h3 className="counterText">{this.greetings.text} {this.state.counter}</h3>
      </div>
    )
  }
}
export default PerentCounter
