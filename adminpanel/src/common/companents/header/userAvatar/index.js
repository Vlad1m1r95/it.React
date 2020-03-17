import React from 'react'
import PersonIcon from './personIcon'
import { Row, Col } from 'antd'
import './style/leftHeaderSection.sass'
function UserAvatar() {
  return (
    <Row type="flex" gutter={[30]} justify="start" align="middle">
      <Col id="user" span={4}>
        {' '}
        <PersonIcon />
      </Col>
    </Row>
  )
}
export default UserAvatar
