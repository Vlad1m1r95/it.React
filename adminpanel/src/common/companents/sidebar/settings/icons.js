import React from 'react'
import Icon from '@ant-design/icons'
import managementsvg from './../icon/038-management.svg'
import presentationsvg from './../icon/024-presentation.svg'
import contractsvg from './../icon/048-contract.svg'
import marketsettingssvg from './../icon/019-settings.svg'
import productmanagement from './../icon/050-money management.svg'

const EmployeeEditorSvg = () => (
  <img src={managementsvg} alt="EmployEditor"></img>
)
const DashbordSvg = () => <img src={presentationsvg} alt="Dashboard"></img>
const ContractSvg = () => <img src={contractsvg} alt="Contract"></img>
const MarketSettingsSvg = () => (
  <img src={marketsettingssvg} alt="MarketSettings"></img>
)
const ProductManagementSvg = () => (
  <img src={productmanagement} alt="MarketSettings"></img>
)

export const EmployeeEditorIcon = props => (
  <Icon component={EmployeeEditorSvg} {...props} />
)
export const DashboardIcon = props => (
  <Icon component={DashbordSvg} {...props} />
)
export const OrdersIcon = props => <Icon component={ContractSvg} {...props} />
export const MarketSettingsIcon = props => (
  <Icon component={MarketSettingsSvg} {...props} />
)
export const ProductManagementIcon = props => (
  <Icon component={ProductManagementSvg} {...props} />
)
