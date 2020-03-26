import React from 'react'
import { Result, Button } from 'antd'
import { useHistory } from 'react-router-dom'
function Page401() {
  const history = useHistory()
  const clikHandler = () => {
    history.push('/Autorization')
  }
  return (
    <Result
      status="403"
      title="401"
      subTitle="А вам сюда нельзя 🧔. Страница, которую вы посетили, только для авторизованных пользователей"
      extra={
        <Button onClick={clikHandler} type="primary">
          Авторизироваться{' '}
        </Button>
      }
    />
  )
}
export default Page401
