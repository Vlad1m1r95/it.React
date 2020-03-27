import React from 'react'
import { Result, Button } from 'antd'
import { useHistory } from 'react-router-dom'
function Page404() {
  let history = useHistory()

  const clickHandler = () => {
    const authData = JSON.parse(localStorage.getItem('authData'))
    if (authData !== undefined) {
      if (authData.status === 200) {
        history.push('/Dashboard')
      } else {
        history.push('/Autorization')
      }
    }
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Ой! 😔 Страницы, которую Вы хотите посетить, не существует."
      extra={
        <Button onClick={clickHandler} type="primary">
          Вернуться назад{' '}
        </Button>
      }
    />
  )
}
export default Page404
