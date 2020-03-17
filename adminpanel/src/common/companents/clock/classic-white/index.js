import React, { useState } from 'react'
import './style/clock.sass'
import hooks from './../../../hooks/index'

function ClockClassic() {
  const deg = 6
  let day = new Date()
  let hh = day.getHours() * 30
  let mm = day.getMinutes() * deg
  let ss = day.getSeconds() * deg

  const { useInterval } = hooks
  let [hour, setHour] = useState(`rotateZ(${hh + mm / 12}deg)`)
  let [minutes, setMinutes] = useState(`rotateZ(${mm}deg)`)
  let [seconds, setSeconds] = useState(`rotateZ(${ss}deg)`)

  useInterval(() => {
    day = new Date()
    hh = day.getHours() * 30
    mm = day.getMinutes() * deg
    ss = day.getSeconds() * deg
    setHour(`rotateZ(${hh + mm / 12}deg)`)
    setMinutes(`rotateZ(${mm}deg)`)
    setSeconds(`rotateZ(${ss}deg)`)
    console.log(hour)
    // setCount(count + 1)
    // console.log(count)
  }, 1000)
  return (
    <div className="clock-wrap">
      <div className="clock-classik">
        <div className="hour">
          <div style={{ transform: hour }} className="hr" id="hr"></div>
        </div>
        <div className="min">
          <div style={{ transform: minutes }} className="mn" id="mn"></div>
        </div>
        <div className="sec">
          <div style={{ transform: seconds }} className="sc" id="sc"></div>
        </div>
      </div>
    </div>
  )
}
export default ClockClassic
