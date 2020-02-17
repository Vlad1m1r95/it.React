import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './../../../../sass/clock.sass'
function Clock(props) {
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
					<span className='Timer-clock'>{props.clock}</span>
				</div>
				<div id='LocalDataTime' className='Local-data-time'>
					{props.data}
				</div>
			</div>
		</div>
	)
}
export default Clock
