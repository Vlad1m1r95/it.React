import React, { useState } from 'react'
import PersonIcon from './personIcon'
import { Row, Col, Drawer } from 'antd'
import './style/leftHeaderSection.sass'
import DrawerUserInfo from './DrawerUserInfo/DrawerUserInfo'
import ClockClassic from './../../clock/classic-white/index'
function UserAvatar() {
  const [visible, setVisible] = useState(false)
  console.log(visible)
  const clickHandler = e => {
    setVisible(!visible)
    console.log(e)
  }
  const onClose = e => {
    setVisible(false)
  }

  const clockSettings = {
    heightClock: '120px',
    widthClock: '120px',
    sizehr: '60px',
    sizemn: '70px',
    sizesc: '85px',
    hsec: 'small',
  }

  return (
    <Row type="flex" gutter={[30]} justify="start" align="middle">
      <Col id="user" span={4}>
        {' '}
        <div onClick={clickHandler}>
          <PersonIcon />
        </div>
        <Drawer
          title="Профиль пользователя"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
          destroyOnClose={true}
          footer={<ClockClassic settings={clockSettings} />}
        >
          <DrawerUserInfo />
        </Drawer>
      </Col>
    </Row>
  )
}
export default UserAvatar
