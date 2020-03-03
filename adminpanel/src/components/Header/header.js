import React from 'react'
import LeftHeaderSection from './leftHeaderSection/leftSection'
import CenterHeaderSection from './centerHeaderSection/centerHeaderSection'
import RightHeaderSection from './rightHeaderSection/rightHeaderSection'
import { Layout, Header, Row, Col } from 'antd'
import './style/header.sass'
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
        <LeftHeaderSection />
      </Col>
      <Col span={6}>
        <CenterHeaderSection />
      </Col>
      <Col span={9}>
        {' '}
        <RightHeaderSection />
      </Col>
    </Row>
  )
}
export default HeaderContent
