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
import { Table, Input, Button, Icon, Divider, Tag } from 'antd'
import './style/tableEmployee.sass'
import Confirm from './../../../_blocks/button/confirm/confirm'

class TableEmployees extends React.Component {
	constructor(props) {
		super(props)
		this.state = { filteredInfo: null, sortedInfo: null }
		const {
			handlers: { edit, deleteEmployee },
		} = this.props
		this.confirmSettingsDelete = {
			title: 'Вы точно хотите удалить сотрудника',
			content: 'Удалить?',
			okText: 'Да',
			okType: 'danger',
			cancelText: 'нет',
			ok: deleteEmployee,
			cancel: console.log('Cancel'),
		}
	}

	handleChange = (pagination, filters, sorter) => {
		this.setState({
			filteredInfo: filters,
			sortedInfo: sorter,
		})
	}

	clearFilters = () => {
		this.setState({ filteredInfo: null })
	}

	clearAll = () => {
		this.setState({
			filteredInfo: null,
			sortedInfo: null,
		})
	}

	setAgeSort = () => {
		this.setState({
			sortedInfo: {
				order: 'descend',
				columnKey: 'age',
			},
		})
	}
	render() {
		let { sortedInfo, filteredInfo } = this.state
		sortedInfo = sortedInfo || {}
		filteredInfo = filteredInfo || {}
		const {
			employees,
			settings: { title, head },
			handlers: { edit, deleteEmployee },
		} = this.props
		const columns = [
			{
				title: 'ФИО сотрудника',
				dataIndex: 'name',
				key: 'name',
				filters: [
					{ text: 'Владимир', value: 'Владимир' },
					{ text: 'Jim', value: 'Jim' },
				],
				filteredValue: filteredInfo.name || null,
				onFilter: (value, record) => record.name.includes(value),
				sorter: (a, b) => a.name.length - b.name.length,
				sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
				ellipsis: true,
			},
			{
				title: 'Должность',
				dataIndex: 'position',
				key: 'position',
				sorter: (a, b) => a.age - b.age,
				filters: [
					{ text: 'Бухгалтер', value: 'Бухгалтер' },
					{ text: 'Aдминистратор', value: 'Aдминистратор' },
				],
				filteredValue: filteredInfo.position || null,
				onFilter: (value, record) => record.position.include(value),
				sortOrder: sortedInfo.columnKey === 'position' && sortedInfo.order,
				ellipsis: true,
			},
			{
				title: 'На контракте',
				dataIndex: 'contractorText',
				key: 'contractor',
				filters: [
					{ text: 'London', value: 'London' },
					{ text: 'New York', value: 'New York' },
				],
				filteredValue: filteredInfo.address || null,
				onFilter: (value, record) => record.address.includes(value),
				sorter: (a, b) => a.address.length - b.address.length,
				sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
				ellipsis: true,
				render: function render(contractorText, className) {
					className =
						contractorText === 'Контрактор' ? 'tag-yellow' : 'tag-green'
					return (
						<span>
							<Tag className={className}>{contractorText.toUpperCase()}</Tag>
						</span>
					)
				},
			},
			{
				// title: 'Action',
				key: 'action',
				render: (text, record) => (
					<span>
						<a href='/edit' onClick={edit}>
							Редактировать{' '}
						</a>
						<Divider type='vertical' />
						<Confirm
							type='delete'
							link='удалить'
							confirmSettings={this.confirmSettingsDelete}
						/>
					</span>
				),
			},
		]
		return (
			<div>
				<div className='table-operations'>
					<Button onClick={this.setAgeSort}>Sort age</Button>
					<Button onClick={this.clearFilters}>Clear filters</Button>
					<Button onClick={this.clearAll}>Clear filters and sorters</Button>
				</div>
				<Table
					className='table-employee'
					columns={columns}
					dataSource={employees}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

export default TableEmployees
