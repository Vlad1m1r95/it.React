import React from 'react'
import AppClock from './clock/appClock'
import { Row, Col } from 'antd'

function DateAndClock() {
  return (
    <Row type="flex" justify="end" align="middle">
      {' '}
      <Col span={24}>
        {' '}
        <AppClock />
      </Col>
    </Row>
  )
}
export default DateAndClock
