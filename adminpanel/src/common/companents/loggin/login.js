import React, { useEffect } from 'react'
import { Form, Input, Button, Avatar, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './style/login.sass'
import coffeImage from './img/coffe.png'
import ClockClassic from './../clock/classic-white/index'
import { asyncAction } from './../../helpers/async/index'

function Login({ callback }) {
  console.log(callback)

  const onFinish = values => {
    const settings = { payload: values }
    loginIn(settings)
  }

  const loginIn = async settings => {
    const getLoginStatus = json => {
      const key = 'updatable'
      const { status } = json

      message.loading({ content: 'Секундочку...', key })
      setTimeout(() => {
        message.loading({ content: 'Проверяю данные...', key, duration: 2 })
      }, 2000)
      setTimeout(() => {
        if (status === 401) {
          message.error({ content: 'Упс данные не верны 😥', key, duration: 2 })
          setTimeout(() => {
            message.error({
              content: 'Может пароль забыли? 😔',
              key,
              duration: 2,
            })
          }, 2000)
        } else {
          message.success({ content: 'Ура данные верны 😎!', key, duration: 2 })
          setTimeout(() => {
            message.info('Выполняю вход...')
          })
          localStorage.setItem('logged', JSON.stringify(json['access_token']))
          const currentStatus = localStorage.getItem('logged')
          console.log(currentStatus)
          callback(currentStatus)
        }
      }, 4000)
    }
    const LOG_IN = 'logIn'
    const GET_LOG_STATUS = getLoginStatus
    const GET_RESPONSE = true
    await asyncAction(LOG_IN, GET_LOG_STATUS, settings, GET_RESPONSE)
    // const json = await response.json()
    // console.log(json)
  }
  // useEffect(() => {
  //   const settings = { payload: [] }
  //   // console.log(asyncAction(GET_EMPLOYEES, null, settings))
  // }, [])

  // async  function getData (){

  // }
  return (
    <div className="login-contaner">
      <div className="coffe">
        <img src={coffeImage} alt="coffe" />
      </div>
      <div className="form-container">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {/* <Avatar size={124} icon={<UserOutlined />} /> */}
          <ClockClassic />
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Пожалуйста укажите email адрес',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите пароль',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Авторизироваться
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
