import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
function NewEmployee(props) {
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
	console.log(props)
	const { nameEmployee, pos, contractor } = props.settings
	return (
		<tr>
			<td>
				{nameEmployee !== '' ? iconTeam : ''} {nameEmployee}
			</td>
			<td>{pos}</td>
			<td>{contractor ? iconTrue : ''}</td>
		</tr>
	)
}
export default NewEmployee
