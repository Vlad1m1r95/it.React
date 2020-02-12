import React from 'react'
import '../../../../sass/form/form.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import keys from './../../../../_helpers/generator/generateKey'

function AddemployeeForm(props) {
	const { FullName, title, Position, Add, contract } = props.field
	const { add, change, click } = props.settings
	const { nameEmployee, pos, contractor, team } = props.state
	return (
		<form id='addEmployee' className='Form-grid-emploayee'>
			<fieldset>
				<legend className='Form-title'>
					<i className='fa-icon'>
						<FontAwesomeIcon icon={faUserPlus} />
					</i>
					{title}
				</legend>
				<input
					name='nameEmployee'
					value={nameEmployee}
					onChange={change}
					type='text'
					placeholder={FullName}
				/>
				<select
					defaultValue='default'
					onChange={change}
					name='pos'
					id='Position'
				>
					<option value='default' name='default' disabled='disabled'>
						{Position}
					</option>
					{props.options.map((option, index) => (
						<option key={keys[index]} value={option}>
							{option}
						</option>
					))}
				</select>
				<div className='Checkbox-block'>
					<input
						id='contract'
						checked={contractor}
						onChange={change}
						name='contractor'
						type='checkbox'
					/>{' '}
					<label type='label' onClick={click} htmlFor='contractor'>
						{contract}
					</label>
				</div>
				<button onClick={add} className='Add-employee'>
					{Add}
				</button>
			</fieldset>
		</form>
	)
}

export default AddemployeeForm
