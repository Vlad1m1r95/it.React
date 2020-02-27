import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import keys from '../../../../_helpers/generator/generateKey'
import ButtonAdd from './../../../_blocks/button/button'
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd'
import './style/formEmployee.sass'
import Employee from './../table/employee'

class FormEmployee extends React.Component {
	constructor(props) {
		super(props)
		this.submit = this.submitHandler.bind(this)
		this.checkImmutable = this.ImmutableCheckbox.bind(this)
		this.state = { immutable: false }
	}

	ImmutableCheckbox() {
		let rules = ''
		const { settings: selectOptions } = this.props
		for (let position in selectOptions) {
			rules = position === 'Администратор' || 'Бухгалтер' ? true : false
		}
	}
	submitHandler(e) {
		let {
			handlers: { submit },
		} = this.props
		e.preventDefault()

		this.props.form.validateFields((err, values) => {
			if (!err) {
				submit(e)
				setTimeout(() => this.props.form.resetFields(), 300)
			}
			console.log(this.props.state)
		})
	}
	render() {
		let {
			settings: {
				title,
				buttons,
				field: { fullName, contract, selectName },
				selectOptions,
			},
			handlers: { submit, change, click },
			state: { name, position, contractor },
		} = this.props
		const { Option } = Select
		const { getFieldDecorator } = this.props.form
		return (
			<Form onSubmit={this.submit} className='form-employee'>
				<Form.Item className='form-title'>
					<i className='fa-icon'>
						{/* <FontAwesomeIcon icon={faUserPlus} /> */}
						<Icon type='user-add' />
					</i>
					{title}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('name', {
						// getValueProps: e => submit(e),
						initialValue: name,
						rules: [
							{ required: true, message: 'Пожалуйста введите ФИО сотрудника' },
						],
					})(
						<Input
							name='name'
							onChange={change}
							type='text'
							placeholder={fullName}
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('position', {
						initialValue: position || selectName,
						rules: [
							{ required: true, message: 'Пожалуйста выберите должность' },
						],
					})(
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
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('contractor', {
						valuePropName: 'checked',
						initialValue: contractor,
					})(
						<Checkbox name='contractor' className='checkbox' onChange={change}>
							{contract}
						</Checkbox>
					)}
				</Form.Item>
				<Form.Item>
					{buttons.map((button, index) => (
						<Button
							type='primary'
							ghost
							htmlType='submit'
							className='button-green'
							key={keys[index]}
							// onClick={this.validate}
							data-action={button.action}
						>
							{button.text}
						</Button>
					))}
				</Form.Item>
			</Form>
		)
	}
}
const EmployeeEditor = Form.create({ name: 'Form_employee' })(FormEmployee)

export default EmployeeEditor
