import React from 'react'
import AddemployeeForm from './form/addemployee'
import Team from './table/Team'
function Addemployee(props) {
	const { formSettings, stateForm } = props
	const FormField = {
		title: 'Добавление нового сотрудника',
		FullName: 'ФИО Сотрудника',
		Position: 'Должность',
		Add: 'Добавить сотрудника',
		contract: 'По контракту',
	}
	const selectOptions = [
		'Администратор',
		'Бухгалтер',
		'Интернет-маркетолог',
		'Контент-менеджер',
		'Дизайнер',
		'Разработчик',
	]

	return (
		<section className='Employee-add Content-grid collums-5fr'>
			<AddemployeeForm
				options={selectOptions}
				field={FormField}
				settings={formSettings}
				state={stateForm}
			/>
			<Team state={stateForm} />
		</section>
	)
}
export default Addemployee
