/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Chart from 'chart.js'
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
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import './style/dashboard.sass'
import SliderFilterProgress from './sliderFilter'
import { connect } from 'react-redux'

import { actions } from './../../actions/'
import ComprehensiveProgress from './../../common/companents/progress/ComprehensiveProgress'
import ChartCircle from './../../common/companents/chart/chart2'

const progress = {
  mounth: {
    0: {
      ordersComplite: 100,
      ordersFallen: 15,
      visitors: 1000,
      goods: 35,
      totalСostOfGoods: 1200,
      objectiveOrdersComplite: 200,
      objectiveConversion: 25,
    },
  },
}

function Board(props) {
  const { setStatistics } = props
  console.log(props.setStatistics)
  const { Title } = Typography

  const currentАmount = current => {
    return <span className="number-current"> {current} тыс.руб </span>
  }
  const currentPercent = current => {
    return <span className="number-current"> {current} % </span>
  }

  const settingsProgress = { title: 'Конверсия', extra: 20, percent: 50 }
  return (
    <section id="Dushboard">
      <Row type="flex" className="row-col" gutter={[32, 72]}>
        <Col className="title-col" span={24}>
          <Title>Статистика за Март</Title>
          {/* <h1 className="title">Статистика за Март</h1> */}
        </Col>
        <Col span={20}>
          <Row align="middle" justify="space-around">
            <Col span={7} offset="1">
              <Card title="Средняя стоймость заказа за месяц" bordered={true}>
                <Progress percent={10} status="active" />
              </Card>
            </Col>
            <Col span={7}>
              <Card
                title="Выручка за месяц"
                extra={currentАmount(5)}
                bordered={true}
              >
                <Progress percent={50} status="active" />
              </Card>
            </Col>
            <Col span={7}>
              <ComprehensiveProgress settings={{ ...settingsProgress }} />
            </Col>

            <Col span={24}>
              <ChartCircle />
            </Col>
          </Row>
        </Col>

        <Col span={4}>
          <Card className="card-filter">
            {' '}
            <SliderFilterProgress period={12} position="horizontal" />
          </Card>
        </Col>
      </Row>
    </section>
  )
}

const { setStatistics } = actions
const mapDispatchToProps = {
  setStatistics,
}
export default connect(null, mapDispatchToProps)(Board)
