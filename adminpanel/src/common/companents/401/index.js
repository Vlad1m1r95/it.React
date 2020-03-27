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
      subTitle="А Вам сюда нельзя! 🧔. Чтобы войти на данную страницу, Вам необходимо авторизоваться"
      extra={
        <Button onClick={clikHandler} type="primary">
          Авторизоваться{' '}
        </Button>
      }
    />
  )
}
export default Page401
