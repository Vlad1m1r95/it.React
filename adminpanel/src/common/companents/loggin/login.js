import React, { useEffect, useCallback } from 'react'
import useAuth from './../../hooks/useAuth'
import { actions } from './../../../actions/index'
import { useHistory, Redirect } from 'react-router-dom'
import { Form, Input, Button, Avatar, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import coffeImage from './img/coffe.png'
import ClockClassic from './../clock/classic-white/index'
import './style/login.sass'

function Login({ callback }) {
  const { authData, res } = useAuth()
  const onFinish = async values => {
    authData(values)
  }

  useEffect(() => {
    const alertMessage = loading => {
      if (!res.data) return
      const {
        data: { status },
      } = res
      const key = 'updatable'
      if (loading) {
        message.loading({ content: 'Секундочку...', key, duration: 2 })
      } else {
        if (status === 401) {
          message.error({ content: 'Упс! Неверные данные 😥', key, duration: 3 })
        }
        if (status === 200) {
          message.success({ content: 'Ура! Данные верны 😎!', key, duration: 3 })
        }
      }
    }
    alertMessage(res.isLoading)
  }, [res])

  if (res.data !== undefined) {
    if (res.data.status === 200) {
      return <Redirect to="/Dashboard" />
    }
  }
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
          <ClockClassic />
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, укажите e-mail адрес',
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
                message: 'Пожалуйста, введите пароль',
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
              loading={res.isLoading}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
