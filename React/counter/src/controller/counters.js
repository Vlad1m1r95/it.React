import React from 'react';
import Counter from '../view/counter';
import counterSettings from '../storage/settings/counter/counterSettings';
import { getStateCounter, getStateAllCounter } from './../storage/state/countersState';
import { createStateGreetingsCounters } from './../storage/state/greetingsState';

class Counters extends React.Component {
  constructor(props) {
    super(props)
    this.settings = counterSettings
    this.state = this.getstate()
    this.reRender = this.updateState.bind(this)
    this.update = this.updateCounter
  }
  getstate() {
    let relevantState = {}
    getStateAllCounter().forEach((state, index) => {
      let key = `counter${state["id"]}State`
      relevantState[key] = getStateCounter(state['id'])
    })
    return relevantState
  }

  greetingsCounterStateCreate() {
    let state = 0
    getStateAllCounter().forEach(counterState => {
      state += counterState.state
      console.log(state)
    })

    createStateGreetingsCounters(state)
    return state
  }
  componentDidMount() {
    this.greetingsCounterStateCreate()
  }



  updateCounter(propsUpdate, e) {
    const { state, decriment, incriment, callback } = propsUpdate
    const target = e.target
    let newcounter = null
    if (target.getAttribute('data-operation') === 'decriment') {
      newcounter = state - decriment
    } else if (target.getAttribute('data-operation') === 'incriment') {
      newcounter = state + incriment
    }

    return callback(newcounter)
  }

  updateState(e) {

    this.setState(this.getstate())
  }
  render() {

    return (

      <div onClick={this.reRender} className="WrapCounter">

        {this.settings.map(
          (settings, index) =>
            <Counter

              update={this.update}
              key={settings.key}
              settings={settings}
              state={this.state[`counter` + index + `State`]}
            />
        )}
      </div>
    )
  }
}
export default Counters
