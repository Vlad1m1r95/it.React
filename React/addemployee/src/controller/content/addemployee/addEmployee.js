import React from 'react'
import Addemployee from './../../../view/Content/addemployee/addemployee'

class ControllerAddEmployee extends React.Component {
	constructor(props) {
		super(props)
		this.team = []
		this.state = {
			nameEmployee: '',
			pos: '',
			contractor: '',
			team: this.team,
		}
		this.add = this.handleSubmit.bind(this)
		this.change = this.handleChange.bind(this)
		this.click = this.handleClick.bind(this)

		this.settingForm = {
			add: this.add,
			change: this.change,
			click: this.click,
		}
	}
	resetState() {
		const initialState = {
			nameEmployee: '',
			pos: '',
			contractor: '',
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

		this.addEmployeeInTable()

		// this.PostFromServer()
		this.resetState()
	}
	addEmployeeInTable() {
		this.team.push(this.state)
		this.setState({ team: this.team })
		console.log(this.setState.team)
	}
	PostFromServer() {
		// Отправка на сервер. Тут должен быть POST запрос на сервер
		//fetch()
	}

	render() {
		return (
			<Addemployee stateForm={this.state} formSettings={this.settingForm} />
		)
	}
}

export default ControllerAddEmployee
