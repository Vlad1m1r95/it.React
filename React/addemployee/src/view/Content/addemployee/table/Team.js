import React from 'react'
import './../../../../sass/table/table.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUsers,
	faThumbsUp,
	faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import NewEmployee from './newEmployee'
import keys from './../../../../_helpers/generator/generateKey'

function Team(props) {
	const { nameEmployee, pos, contractor, team } = props.state
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
	const trelem = (
		<tr className='changedEmployee'>
			<td>
				{nameEmployee !== '' ? iconTeam : ''} {nameEmployee}
			</td>
			<td>{pos}</td>
			<td>{contractor ? iconTrue : ''}</td>
		</tr>
	)
	return (
		<div className='Table-wrap-team-grid'>
			<table className='Table-team-grid-small'>
				<caption className='Title-Table-team grid-3'>
					<i className='fa-icon'>
						<FontAwesomeIcon icon={faUsers} />
					</i>
					Наша команда
				</caption>
				<thead className='Table-team-header Border-table grid-3'>
					<tr>
						<td>ФИО Сотрудника</td>
						<td>Занимаемая должность</td>
						<td>На контракте</td>
					</tr>
				</thead>
				<tbody key={keys[0]} className='Table-team-body Border-table grid-3'>
					{nameEmployee === '' && pos === '' ? '' : trelem}

					{team.map((employee, index) => (
						<NewEmployee key={keys[index]} settings={employee} />
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Team
