import React from 'react';
import './sass/app.sass'
import PerentCounter from './component/Class/ParentCounter.Component';
import Counter from './component/Class/Counter.Component'

function App() {
  return (
    <div id="App">
      <PerentCounter
        greetings="Привет, я счетчик!"
        counterText="И я насчитал :"
      // counter={0}
      />
      <div className="CounterPanel">
        <Counter counter={0}
          dec={1}
          inc={1}
          max={15}
        />
        <Counter counter={10}
          dec={2}
          inc={2} />
        <Counter counter={-15}
          dec={5}
          inc={5}
          min={-15} />
        <Counter counter={25}
          dec={3}
          inc={3}
          max={25}
          min={5} />
        <Counter counter={13}
          dec={8}
          inc={8} />
      </div>
    </div>
  )
}

export default App