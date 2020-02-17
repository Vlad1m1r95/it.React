import React from 'react'
import '../../../../sass/form/form.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import keys from '../../../../_helpers/generator/generateKey'

function FormEmployee(props) {
	let {
		settings: {
			title,
			buttons,
			field: { fullname, contract },
			selectOptions,
		},
		handlers: { submit, change, click },
		state: { name, position, contractor },
	} = props

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
					name='name'
					value={name}
					onChange={change}
					type='text'
					placeholder={fullname}
				/>
				<select value='default' onChange={change} name='position' id='position'>
					<option value='default' name='default' disabled='disabled'>
						{position}
					</option>
					{selectOptions.map((option, index) => (
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
				{buttons.map((button, index) => (
					<button
						key={keys[index]}
						onClick={submit}
						className='Add-employee'
						data-action={button.action}
					>
						{button.text}
					</button>
				))}
			</fieldset>
		</form>
	)
}

export default FormEmployee
