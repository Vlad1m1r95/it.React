import React from 'react'
import 'antd/dist/antd.css'
// import './index.css'
import { Modal, Button } from 'antd'

const { confirm } = Modal

function Confirm(props) {
	const showPropsConfirm = confirmSettings => {
		confirm({
			title: 'Вы точно хотите удалить сотрудника',
			content: 'Удалить?',
			okText: 'Да',
			okType: 'danger',
			okButtonProps: {
				disabled: true,
			},
			cancelText: 'нет',
			onOk() {
				console.log('OK')
			},
			onCancel() {
				console.log('Cancel')
			},
		})
	}

	const showDeleteConfirm = (confirmSettings, e) => {
		const target = e.target
		const {
			title,
			content,
			okText,
			okType,
			cancelText,
			ok,
			cancel,
		} = confirmSettings
		confirm({
			title,
			content,
			okText,
			cancelText,
			okType,
			onOk() {
				ok(target)
			},
			onCancel() {
				console.log('cancel')
			},
		})
	}
	const showConfirm = confirmSettings => {
		confirm({
			title: 'Do you Want to delete these items?',
			content: 'Some descriptions',
			onOk() {
				console.log('OK')
			},
			onCancel() {
				console.log('Cancel')
			},
		})
	}
	const { confirmSettings } = props
	// const del = () => showDeleteConfirm(confirmSettings)
	// const edit = () => showDeleteConfirm(edit)
	const del = showDeleteConfirm.bind(this, confirmSettings)
	// const edit = showDeleteConfirm.bind(this, editing)

	let elem = ''
	switch (props.type) {
		case 'delete':
			elem = (
				<Button onClick={del} type='dashed'>
					{props.link}
				</Button>
			)
			break
		case 'confirm':
			elem = <Button onClick={showConfirm}>Подтвердить дейсвие</Button>
			break
		default:
			break
	}
	return elem
}

export default Confirm
