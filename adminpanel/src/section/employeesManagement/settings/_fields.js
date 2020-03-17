/* eslint-disable react/prop-types */
import React from 'react'
import { Form, Input, Select, Checkbox } from 'antd'
import { settingsForm } from './settings'
import { UserOutlined } from '@ant-design/icons'
import keys from './../../../common/helpers/generator/generateKey'

const { Option } = Select
const {
  field: { selectName, contract },
  selectOptions,
} = settingsForm
const InputName = props => (
  <Form.Item
    name="name"
    key="name"
    placeholder="ФИO сотрудника"
    rules={[
      {
        required: true,
        message: 'Пожалуйста укажите ФИO сотрудника!',
      },
    ]}
  >
    <Input
      className="theme-item"
      size="large"
      placeholder="ФИО сотрудника"
      prefix={<UserOutlined />}
    />
  </Form.Item>
)
const SelectPosition = props => (
  <Form.Item
    // label="Password"
    plaseholder="Position"
    name="position"
    key="position"
    rules={[
      {
        required: true,
        message: 'Пожалуйста выберите должность',
      },
    ]}
  >
    <Select className="theme-item" size="large" placeholder={selectName}>
      <Option value="default" name="default" disabled="disabled">
        {selectName}
      </Option>
      {selectOptions.map((option, index) => (
        <Option key={keys[index]} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  </Form.Item>
)

const ChekboxContractor = props => (
  <Form.Item name="contractor" key="contractor" valuePropName="checked">
    <Checkbox size="large" className="checkbox">
      {contract}
    </Checkbox>
  </Form.Item>
)

const formFields = [InputName, SelectPosition, ChekboxContractor]

export default formFields
