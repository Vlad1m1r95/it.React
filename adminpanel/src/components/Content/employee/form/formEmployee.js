import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import keys from '../../../../_helpers/generator/generateKey'
import ButtonAdd from './../../../_blocks/button/button'
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd'
import './style/formEmployee.sass'

function FormEmployee(props) {
	let {
		settings: {
			title,
			buttons,
			field: { fullName, contract, selectName },
			selectOptions,
		},
		handlers: { submit, change, click },
		state: { name, position, contractor },
	} = props
	const { Option } = Select
	return (
		<Form className='form-employee'>
			<Form.Item className='form-title'>
				<i className='fa-icon'>
					{/* <FontAwesomeIcon icon={faUserPlus} /> */}
					<Icon type='user-add' />
				</i>
				{title}
			</Form.Item>
			<Form.Item>
				<Input
					name='name'
					value={name}
					onChange={change}
					type='text'
					placeholder={fullName}
				/>
			</Form.Item>
			<Form.Item>
				<Select placeholder={selectName} onChange={change}>
					<Option value='default' name='default' disabled='disabled'>
						{position}
					</Option>
					{selectOptions.map((option, index) => (
						<Option key={keys[index]} value={option}>
							{option}
						</Option>
					))}
				</Select>
			</Form.Item>
			<Form.Item>
				<Checkbox
					name='contractor'
					className='checkbox'
					checked={contractor}
					onChange={change}
				>
					{contract}
				</Checkbox>
			</Form.Item>
			<Form.Item>
				{buttons.map((button, index) => (
					<Button
						type='primary'
						ghost
						htmlType='submit'
						className='button-green'
						key={keys[index]}
						onClick={submit}
						data-action={button.action}
					>
						{button.text}
					</Button>
				))}
			</Form.Item>
		</Form>
		// <form id='addEmployee' className='Form-grid-emploayee'>
		// 	<fieldset>
		// 		<legend className='Form-title'>
		// 			<i className='fa-icon'>
		// 				<FontAwesomeIcon icon={faUserPlus} />
		// 			</i>
		// 			{title}
		// 		</legend>
		// 		<input
		// 			name='name'
		// 			value={name}
		// 			onChange={change}
		// 			type='text'
		// 			placeholder={fullname}
		// 		/>
		// 		<select onChange={change} name='position' id='position'>
		// 			<option value='default' name='default' disabled='disabled'>
		// 				{position}
		// 			</option>
		// 			{selectOptions.map((option, index) => (
		// 				<option key={keys[index]} value={option}>
		// 					{option}
		// 				</option>
		// 			))}
		// 		</select>
		// 		<div className='Checkbox-block'>
		// 			<input
		// 				id='contract'
		// 				checked={contractor}
		// 				onChange={change}
		// 				name='contractor'
		// 				type='checkbox'
		// 			/>{' '}
		// 			<label type='label' onClick={click} htmlFor='contractor'>
		// 				{contract}
		// 			</label>
		// 		</div>
		// 		{buttons.map((button, index) => (
		// 			<Button
		// 				key={keys[index]}
		// 				onClicke={submit}
		// 				className='Add-employee'
		// 				data-action={button.action}
		// 			>
		// 				{button.text}
		// 			</Button>
		// 		))}
		// 	</fieldset>
		// </form>
	)
}

export default FormEmployee
