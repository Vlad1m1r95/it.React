import React from 'react'
import BreadCrumbs from './../breadCrumbs/breadCrumbs'
import TableEmployees from './table/tableEmployees'
import ShowFormEmployee from './form/showFormEmployee'

class Appemployee extends React.Component {
	constructor(props) {
		super(props)
		this.arrayEmployees = []
		this.state = {
			employees: [],
			editEmployee: {},
		}
		this.settingBredCrumbs = {
			links: ['Команда проекта', 'Редактирование'],
		}

		this.formSettings = {
			title: 'Добавление нового сотрудника',

			field: {
				fullName: 'ФИО Сотрудника',
				selectName: 'Должность',
				contract: 'По контракту',
			},
			value: {
				name: '',
				position: '',
				contractor: '',
				id: '',
			},
			selectOptions: [
				'Администратор',
				'Бухгалтер',
				'Интернет-маркетолог',
				'Контент-менеджер',
				'Дизайнер',
				'Разработчик',
			],
			buttons: [{ text: 'Добавить сотрудника', action: 'add' }],
		}
		this.tableSettings = {
			title: 'Наша команда',
			head: ['ФИО Сотрудника', 'Занимаемая должность', 'На контракте'],
		}
		this.set = this.setEmployee.bind(this)
		this.edit = this.editingEmployee.bind(this)
		this.handlersForm = {
			set: this.set,
			edit: this.edit,
		}
		this.handlersTable = {
			edit: this.edit,
		}
	}

	setEmployee(data, index) {
		if (data !== 'delete') {
			if (this.arrayEmployees[data.index]) {
				this.arrayEmployees[data.index] = data
			} else {
				this.arrayEmployees.push(data)
			}
		} else {
			this.arrayEmployees.splice(index, 1)
		}
		this.setState({ employees: this.arrayEmployees })
	}
	editingEmployee(e) {
		if (!e.target.matches('td')) return
		const targetIndex = [...e.target.parentNode.parentNode.children].indexOf(
			e.target.parentNode
		)
		this.setState({
			editEmployee: this.state.employees[targetIndex],
			index: targetIndex,
		})
	}
	render() {
		return (
			<section className='Employee-add Content-grid collums-5fr'>
				<BreadCrumbs breadCrumbs={this.settingBredCrumbs} />
				<ShowFormEmployee
					indexEmployee={this.state.index}
					defaultValue={this.state.editEmployee}
					settings={this.formSettings}
					handlers={this.handlersForm}
				/>
				<TableEmployees
					employees={this.state.employees}
					settings={this.tableSettings}
					handlers={this.handlersTable}
				/>
			</section>
		)
	}
}
export default Appemployee
