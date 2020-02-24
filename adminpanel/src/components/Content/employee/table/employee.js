import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

function Employee(props) {
	const {
		settings: { name, position, contractor, id },
	} = props

	const iconTrue = (
		<i>
			<FontAwesomeIcon icon={faThumbsUp} />
		</i>
	)
	const iconTeam = (
		<i>
			<FontAwesomeIcon icon={faUserGraduate} />
		</i>
	)

	return (
		<tr id={id}>
			<td>
				{name !== '' ? iconTeam : ''} {name}
			</td>
			<td>{position}</td>
			<td>{contractor ? iconTrue : ''}</td>
		</tr>
	)
}
export default Employee
