import React, { useState } from 'react'
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

import ChartCircle from './../chart/chart2'
import ChartCircleVer2 from './../chart/chart3'
import './style/index.sass'

function ComprehensiveProgress(props) {
  const [isOpen, setIsOpen] = useState(true)
  const {
    settings: { title, extra, percent, data },
  } = props

  const closeProgress = <Progress percent={percent} status="active" />

  const openProgress = (
    <React.Fragment>
      {/* <Progress percent={percent} status="active" /> */}
      <ChartCircleVer2 data={data} />
    </React.Fragment>
  )

  const clickhandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="card" onClick={clickhandler}>
      <Card
        className="card-progress"
        title={title}
        extra={extra}
        bordered={true}
      >
        {isOpen === true ? openProgress : closeProgress}
      </Card>
    </div>
  )
}

export default ComprehensiveProgress
