import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './../../../../sass/clock.sass'
function Clock(props) {
	const { minutes, hours, dayOfMonth, dayOfTheWeek, year, month } = props

	const formatHours = hours < 10 ? '0' + hours : hours
	const formatMinutes = minutes < 10 ? '0' + minutes : minutes
	const formatData = `${dayOfTheWeek}, ${dayOfMonth} ${month} ${year}`
	const formatClock = `${formatHours}:${formatMinutes}`
	return (
		<div id='Clock' className='Clock-header'>
			<div className='Clock'>
				<div id='timerClock' className='Clock-block'>
					<i className='Flex-start Icon-clock'>
						<FontAwesomeIcon
							className='Icon-solid-big Align-center'
							icon={faClock}
						/>
					</i>
					<span className='Timer-clock'>{formatClock}</span>
				</div>
				<div id='LocalDataTime' className='Local-data-time'>
					{formatData}
				</div>
			</div>
		</div>
	)
}
export default Clock
