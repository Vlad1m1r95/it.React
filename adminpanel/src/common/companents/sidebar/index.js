import React, { useState, useEffect } from 'react'
import { Menu, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import './style/menuSidebar.sass'

import {
  EmployeeEditorIcon,
  DashboardIcon,
  OrdersIcon,
  MarketSettingsIcon,
  ProductManagementIcon,
} from './settings/icons'

function SidebarMenu({ theme, isOpen }) {
  const [collapsed, setCollapsed] = useState(true)
  let history = useHistory()
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
    isOpen(!collapsed)
  }
  const handlerClick = e => {
    console.log(e.key)
    switch (e.key) {
      case '1':
        history.push('/DashBoard')
        break
      case '2':
        history.push('/EmployeeManagement')
        break
      case '3':
        history.push('/OrderManagement')
        break
      case '4':
        history.push('/MarketSettings')
        break
    }
  }
  const { SubMenu } = Menu
  return (
    <div className={`menu-sidebar sidebar-${theme}`}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme={theme}
        inlineCollapsed={collapsed}
        onClick={handlerClick}
      >
        <Menu.Item key="1">
          <DashboardIcon />
          <span> Панель</span>
        </Menu.Item>

        <Menu.Item key="2">
          <EmployeeEditorIcon />
          <span> Управление командой</span>
        </Menu.Item>

        <Menu.Item key="3">
          <OrdersIcon />
          <span>Менеджер заказов</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <MarketSettingsIcon />
              <span>Настройки магазина</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <ProductManagementIcon />
              <span>Управление товарами</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default SidebarMenu
