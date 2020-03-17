import React from 'react'
import DateAndClock from './dateAndClock'
import Notifications from './notifications'
import { Row, Col } from 'antd'
import './style/header.sass'
import UserAvatar from './userAvatar/index'

function HeaderContent() {
  return (
    <Row
      gutter={[30]}
      className="row-flex"
      type="flex"
      justify="start"
      align="middle"
    >
      <Col id="UserAvatar" span={9}>
        <UserAvatar />
      </Col>
      <Col span={6}>
        <Notifications />
      </Col>
      <Col span={9}>
        {' '}
        <DateAndClock />
      </Col>
    </Row>
  )
}
export default HeaderContent
