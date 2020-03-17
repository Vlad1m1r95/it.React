/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Button, Divider, Tag } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'ФИО сотрудника',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Должность',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'На контракте',
    dataIndex: 'contractor',
    key: 'contractor',
    render: function render(contractorText, className) {
      className = contractorText === 'Контрактор' ? 'tag-yellow' : 'tag-green'
      return (
        <span>
          <Tag className={className}>{contractorText}</Tag>
        </span>
      )
    },
  },
  {
    // title: 'Action',
    key: 'id',
    render: function render() {
      return (
        <span>
          <Button type="submit" value="edit">
            <EditOutlined />
          </Button>
          <Divider type="vertical" />

          <Button danger value="delete">
            <DeleteOutlined />
          </Button>
        </span>
      )
    },
  },
]
export default columns
