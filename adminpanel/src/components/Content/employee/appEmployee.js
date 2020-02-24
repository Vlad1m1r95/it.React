import React from 'react'
import BreadCrumbs from './../breadCrumbs/breadCrumbs'
import TableEmployees from './table/tableEmployees'
import ShowFormEmployee from './form/showFormEmployee'
import { Row, Col } from 'antd'

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
		this.deleteEmployee = this.deleteEmployee.bind(this)
		this.handlersForm = {
			set: this.set,
			edit: this.edit,
		}
		this.handlersTable = {
			edit: this.edit,
			deleteEmployee: this.deleteEmployee,
		}
	}

	setEmployee(data, datakey, action) {
		let searchKeyHash = datakey
		let targetEmployee = this.findEmployee(searchKeyHash)

		if (targetEmployee === undefined) {
			this.arrayEmployees.push(data)
			this.setState({ employees: this.arrayEmployees })
		} else {
			this.findEmployee(searchKeyHash).name = data.name
			this.findEmployee(searchKeyHash).position = data.position
			this.findEmployee(searchKeyHash).contractorText = data.contractorText
			console.log(data.contractor)
		}
		this.setState({ employees: this.arrayEmployees })
	}
	findEmployee(targetKey) {
		return this.arrayEmployees.find(employee => employee.key === targetKey)
	}

	transformDataContractor(data) {
		return data
	}
	editingEmployee(e) {
		e.preventDefault()
		const target = e.target
		const targetIndex = target.closest('tr').dataset.rowKey
		let targetEmployee = this.findEmployee(targetIndex)

		this.setState({ editEmployee: targetEmployee })
	}
	deleteHash(targetIndex) {
		let index = this.arrayEmployees.indexOf(this.findEmployee(targetIndex))
		this.arrayEmployees.splice(index, 1)
		console.log(this.arrayEmployees)
	}
	deleteEmployee(e) {
		e.preventDefault()
		const target = e.target
		const targetIndex = target.closest('tr').dataset.rowKey
		this.deleteHash(targetIndex)
		console.log(this.arrayEmployees)

		this.setState({ employees: this.arrayEmployees })
	}
	render() {
		return (
			<Row gutter={[30, 30]} type='flex'>
				<Col span={24}>
					<BreadCrumbs breadCrumbs={this.settingBredCrumbs} />
				</Col>
				<Col span={8}>
					{' '}
					<ShowFormEmployee
						indexEmployee={this.state.index}
						defaultValue={this.state.editEmployee}
						settings={this.formSettings}
						handlers={this.handlersForm}
					/>
				</Col>
				<Col span={16}>
					<TableEmployees
						employees={this.state.employees}
						settings={this.tableSettings}
						handlers={this.handlersTable}
					/>
				</Col>
			</Row>
		)
	}
}
export default Appemployee
