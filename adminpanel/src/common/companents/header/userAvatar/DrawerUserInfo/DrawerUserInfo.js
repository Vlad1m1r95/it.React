import React, { useState } from 'react'
import { Typography, Avatar, Badge, Tag, Tabs, Form, Button, Col, Row, Input, Select, Drawer, DatePicker } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons'
import './style/index.sass'
import Uploader from './uploader/index';
const settings = {
  greetings: `Добро пожаловать `,
  name: `Владимир Олегович`,
  position: `Администратор`,
  editButton: `Редактировать аккаунт`
}
export default function DrawerUserInfo() {

  const [visible, setVisible] = useState(false)
  const { greetings, name, position, editButton } = settings
  const { Title } = Typography
  const { TabPane } = Tabs

  const onClose = () => setVisible(false)
  const showDrawerEditUser = () => setVisible(!visible)
  return (
    <div>
      <div className="drawer_avatar"> <Avatar size={92} icon={<UserOutlined />} /></div>
      <div className='drawer-greetings'>
        <Title level={4}>  {name}</Title>
      </div>
      <Tag className='drawer-tagPosition' color="#87d068">{position}</Tag>
      <Button className="drawer-edit" type="primary" onClick={showDrawerEditUser}>
        {editButton}
      </Button>
      <Drawer
        title="Редактирование профиля"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button
              onClick={onClose}
              style={{ marginRight: 8 }}
            >
              Cancel
              </Button>
            <Button onClick={onClose} type="primary">
              Submit
              </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Как меня зовут"
                rules={[{ required: true, message: 'Поле ФИО не может быть пустым' }]}
              >
                <Input placeholder="ФИО" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Емайл адрес"
                rules={[{ required: true, message: 'Пожалуйста укажите email адрес' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>


          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="О себе"
                rules={[
                  {
                    required: false,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>

            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="Foto"
                label="Мое фото"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Uploader />
              </Form.Item>

            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  )
}
