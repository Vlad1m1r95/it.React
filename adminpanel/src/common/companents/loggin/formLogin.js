import React from 'react'
import { Form, Input, Button, Avatar, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import coffeImage from './img/coffe.png'
import ClockClassic from './../clock/classic-white/index'
const FormLogin = () => {
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
            {/* {res.isLoading === true ? buttonLoading : buttonDefault} */}
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
