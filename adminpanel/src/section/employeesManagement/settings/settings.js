export const settingsForm = {
  title: 'Добавление нового сотрудника',

  field: {
    fullName: 'ФИО Сотрудника',
    selectName: 'Должность',
    contract: 'По контракту',
  },
  value: {
    name: '',
    position: '',
    contractor: true,
    contractorText: '',
    action: '',
    key: '',
  },
  selectOptions: [
    'Администратор',
    'Бухгалтер',
    'Интернет-маркетолог',
    'Контент-менеджер',
    'Дизайнер',
    'Разработчик',
  ],
  layout: {
    form: {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 18,
      },
    },
    fields: {
      wrapperCol: {
        offset: 6,
        span: 18,
      },
    },
  },
  buttons: {
    add: {
      text: 'Добавить сотрудника',
      action: 'add',
      loading: 'Добавление сотрудника',
    },
    edit: {
      text: 'Редактировать',
      action: 'edit',
      loading: 'Редактирование сотрудника',
    },
  },
}

export const settingsTable = {
  title: 'Наша команда',
  head: ['ФИО Сотрудника', 'Занимаемая должность', 'На контракте'],
}

export const settingsBreadCrumbs = {
  links: ['Команда проекта', 'Редактирование'],
}
