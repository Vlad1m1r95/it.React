import React from 'react';
//GreetingsStatistic
import GreetingsCounters from './../controller/greetingsStatistic';
//Counters
import Counters from '../controller/counters';
//style
import './../sass/app.sass'



function App() {
  return (
    <section id="CounterApplication">
      <GreetingsCounters />
      <Counters />
    </section>
  )
}

export default App

