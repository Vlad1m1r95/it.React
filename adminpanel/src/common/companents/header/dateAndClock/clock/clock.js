import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './style/clock.sass'
import Icon from '@ant-design/icons'
import clock from './icon/025-24 hours.svg'

const ClockSvg = () => <img src={clock} alt="EmployEditor"></img>
const ClockIcon = props => <Icon component={ClockSvg} {...props} />

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
            <ClockIcon style={{ fontSize: '1em' }} />
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
