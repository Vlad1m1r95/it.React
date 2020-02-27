import React from 'react'
import EmployeeEditor from './formEmployee'
import nanoid from 'nanoid'

class ShowFormEmployee extends React.Component {
	constructor(props) {
		super(props)
		const {
			settings: {
				field: { selectName },
				value: { name, contractor, id },
			},
		} = this.props
		this.set = this.props.handlers.set
		this.defaultSelect = selectName
		this.state = {
			name: name,
			position: selectName,
			contractor: true,
			contractorText: 'Контрактор',
			action: '',
			key: nanoid(3),
		}
		this.submit = this.handleSubmit.bind(this)
		this.change = this.handleChange.bind(this)
		this.click = this.handleClick.bind(this)

		this.handlers = {
			submit: this.submit,
			change: this.change,
			click: this.click,
		}
	}
	// validataField = e => {
	// 	this.props.form.validateFields((err, values) => {
	// 		if (!err) {
	// 			console.log('Received values of form: ', values)
	// 		}
	// 	})
	// }
	resetState() {
		const initialState = {
			name: '',
			position: this.defaultSelect,
			contractor: false,
			contractorText: 'Фрилансер',
			// index: -1,
		}
		this.setState(initialState)
	}
	handleChange(event, fakeTarget) {
		const { contractor } = this.state
		const target = event.target

		let value = ''
		let name = ''
		let contractorText = ''
		if (typeof event !== 'string') {
			value = target.type === 'checkbox' ? target.checked : target.value
			if (target.type === 'checkbox') this.UpdateWorkStatus(target.checked)
			name = target.name
		} else {
			name = 'position'
			value = event
		}

		this.setState({ [name]: value })
	}
	handleClick(event) {
		const target = event.target
		const fakeTarget = target.parentNode.firstChild
		this.handleChange(event, fakeTarget)
	}
	UpdateWorkStatus(workStatus) {
		workStatus === true
			? this.setState({ contractorText: 'Контрактор' })
			: this.setState({ contractorText: 'Фрилансер' })
	}
	handleSubmit(e) {
		e.preventDefault()
		// this.validataField()
		if (e.target.dataset.action !== 'edit') {
			this.setState({ key: nanoid(3) })
			this.addEmployeeInTable('add')
		} else {
			// this.setState({ action: 'edit' })
			this.addEmployeeInTable('edit')
		}

		this.resetState()
		this.props.settings.title = 'Добавление нового сотрудника'
		this.props.settings.buttons = [
			{ text: 'Добавить сотрудника', action: 'add' },
		]
	}
	addEmployeeInTable(mode) {
		if (mode !== 'delete') {
			this.set(this.state, this.state.key, mode)
		} else {
			this.set(null, this.state.key, 'delete')
		}
	}
	postFromServer() {
		// Отправка на сервер. Тут должен быть POST запрос на сервер
		//fetch()
	}
	componentDidUpdate(prevProps) {
		if (this.props.defaultValue !== prevProps.defaultValue) {
			this.setState(this.props.defaultValue)
			this.setState({ index: this.props.indexEmployee })
			this.props.settings.title = 'Редактирование сотрудника'
			console.log(this.props.defaultValue)
			const { name, position } = this.props.defaultValue
			console.log(name === '')
			console.log(position === '')
			if (name !== '' && position !== '') {
				this.props.settings.buttons = [{ text: 'Изменить', action: 'edit' }]
			} else {
				this.props.settings.title = 'Добавление нового сотрудника'
				this.props.settings.buttons = [
					{ text: 'Добавить сотрудника', action: 'add' },
				]
			}
		}
	}

	render() {
		return (
			<EmployeeEditor
				state={this.state}
				defaultValue={this.props.defaultValue}
				handlers={this.handlers}
				settings={this.props.settings}
			/>
		)
	}
}

export default ShowFormEmployee
