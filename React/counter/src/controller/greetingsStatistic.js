import React from 'react';
import GreetingsStatistic from './../view/GreetingsStatistic';
import greetingsSettings from './../storage/settings/counter/GreetingsStatistic/greetingsSettings';
import { getStateGreetingsCounters } from './../storage/state/greetingsState'
class GreetingsCounters extends React.Component {
  constructor(props) {
    super(props)
    this.state = getStateGreetingsCounters()
    console.log(this.state)
  }

  updateState() {
    this.setState({ counter: 10 })
  }
  render() {
    return (
      <div id="CoreWrap">
        <GreetingsStatistic state={this.state.counter} settings={greetingsSettings} />
      </div>
    )
  }
}

export default GreetingsCounters
