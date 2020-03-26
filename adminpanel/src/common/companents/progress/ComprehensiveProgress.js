import React from 'react'
import {
  Form,
  Button,
  Typography,
  Row,
  Col,
  Progress,
  Statistic,
  Card,
  PageHeader,
  Breadcrumb,
} from 'antd'

function ComprehensiveProgress(props) {
  const {
    settings: { title, extra, percent },
  } = props
  return (
    <Card title={title} extra={extra} bordered={true}>
      <Progress percent={percent} status="active" />
    </Card>
  )
}

export default ComprehensiveProgress
