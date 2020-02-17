import React from 'react'
import FormEmployee from './formEmployee'
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
			position: this.defaultSelect,
			contractor: contractor,
			id: id || nanoid(3),
			index: -1, // отрицательный index не может быть элементом массива
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
	resetState() {
		const initialState = {
			name: '',
			position: this.defaultSelect,
			contractor: '',
			index: -1,
		}
		this.setState(initialState)
	}
	handleChange(event, fakeTarget) {
		const target = event.target
		let value = ''
		let name = ''
		if (!fakeTarget) {
			value = target.type === 'checkbox' ? target.checked : target.value
			name = target.name
		} else {
			value =
				fakeTarget.type === 'checkbox' ? fakeTarget.checked : fakeTarget.value
			value = value === false ? true : false
			name = fakeTarget.name
		}
		this.setState({ [name]: value })
	}
	handleClick(event) {
		const target = event.target
		const fakeTarget = target.parentNode.firstChild
		this.handleChange(event, fakeTarget)
	}
	handleSubmit(e) {
		e.preventDefault()
		console.log(e.target.dataset.action)
		if (e.target.dataset.action === 'delete') {
			this.addEmployeeInTable('delete')
		} else {
			const id = nanoid(3)
			this.setState({ id: id })
			this.addEmployeeInTable()
		}
		// e.preventDefault()

		// this.PostFromServer()
		this.resetState()
		this.props.settings.title = 'Добавление нового сотрудника'
		this.props.settings.buttons = [
			{ text: 'Добавить сотрудника', action: 'add' },
		]
	}
	addEmployeeInTable(mode) {
		if (mode !== 'delete') {
			this.set(this.state)
		} else {
			this.set('delete', this.state.index)
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
			this.props.settings.buttons = [
				{ text: 'Изменить', action: 'edit' },
				{ text: 'Удалить', action: 'delete' },
			]
		}
	}

	render() {
		return (
			<FormEmployee
				state={this.state}
				defaultValue={this.props.defaultValue}
				handlers={this.handlers}
				settings={this.props.settings}
			/>
		)
	}
}

export default ShowFormEmployee
