export const errors = {
  name: { error: false, errorText: 'Имя не должно быть меньше', length: 4 },
  password: {
    error: false,
    errorText: 'Пароль не должен быть меньше',
    length: 8,
  },
  email: {
    error: false,
    errorText: 'Не коректный email адресс',
    length: false,
  },
}
export const messageSubmit = {
  success: `Ура вы вошли! 😎`,
  error: `Что то пошло не так.😔`,
  forgotPass: `Может забыли пароль?`,
}
export const fildNameValidation = ['name', 'password', 'email']

export const FormText = {
  send: 'Отправить',
  title: 'Введите данные для входа',
  logoTitle: 'Админ панель.',
}
