import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './style/clock.sass'
function Clock(props) {
  const { minutes, hours, dayOfMonth, dayOfTheWeek, year, month } = props

  const formatHours = hours < 10 ? '0' + hours : hours
  const formatMinutes = minutes < 10 ? '0' + minutes : minutes
  const formatData = `${dayOfTheWeek}, ${dayOfMonth} ${month} ${year}`
  const formatClock = `${formatHours}:${formatMinutes}`
  return (
    <div id="clock" className="clock-header">
      <div className="clock">
        <div id="timerClock" className="clock-block">
          <i className="Flex-start Icon-clock">
            <FontAwesomeIcon
              className="Icon-solid-big Align-center"
              icon={faClock}
            />
          </i>
          <span className="timer-clock">{formatClock}</span>
        </div>
        <div id="LocalDataTime" className="local-data-time">
          {formatData}
        </div>
      </div>
    </div>
  )
}
export default Clock
