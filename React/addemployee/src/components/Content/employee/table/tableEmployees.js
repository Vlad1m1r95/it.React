import React from 'react'
import './../../../../sass/table/table.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUsers,
	faThumbsUp,
	faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import Employee from './employee'
import keys from '../../../../_helpers/generator/generateKey'

function TableEmployees(props) {
	const {
		employees,
		settings: { title, head },
		handlers: { edit },
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
	// const trelem = (
	// 	<tr className='changedEmployee'>
	// 		<td>
	// 			{nameEmployee !== '' ? iconTeam : ''} {nameEmployee}
	// 		</td>
	// 		<td>{pos}</td>
	// 		<td>{contractor ? iconTrue : ''}</td>
	// 	</tr>
	// )
	return (
		<div className='Table-wrap-team-grid'>
			<table className='Table-team-grid-small'>
				<caption className='Title-Table-team grid-3'>
					<i className='fa-icon'>
						<FontAwesomeIcon icon={faUsers} />
					</i>
					{title}
				</caption>
				<thead className='Table-team-header Border-table grid-3'>
					<tr>
						{head.map((item, index) => (
							<td key={keys[index]}>{item} </td>
						))}
					</tr>
				</thead>
				<tbody
					onClick={edit}
					key={keys[0]}
					className='Table-team-body Border-table grid-3'
				>
					{/* {nameEmployee === '' && pos === '' ? '' : trelem} */}

					{employees.map((employee, index) => (
						<Employee number={index} key={employee.id} settings={employee} />
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TableEmployees
