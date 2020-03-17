/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

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
// import { slices } from './../../../../slice/index';
import { asyncGetDataAndUpdateStore, asyncAction } from './../../common/helpers/async/index';
// import { useEffect } from 'react';

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
CONST GET_STATISTICS = 'getStatistics'

useEffect(() => {
  console.log(asyncAction(GET_STATISTICS, 'dont call', { payload: [] }, true))
})
function Board(props) {
  const { Title } = Typography

  const getProgress = (now, objective) => {
    // props.testIncrement()
    return now / objective
  }

  const [orederProgress, setOrderProgress] = useState(getProgress(60, 10))
  const [сonversionProgress, setConversionProgress] = useState(
    getProgress(60, 20)
  )
  // const [orederProgress, setOrderProgress] = useState(getProgress(60, 10))

  // setOrderProgress(3)
  const currentАmount = current => {
    return <span className="number-current"> {current} тыс.руб </span>
  }
  const currentPercent = current => {
    return <span className="number-current"> {current} % </span>
  }
  return (
    <section id="Dushboard">
      <Row gutter={[32, 54]} type="flex" justify="center">
        <Col span={24}>
          {/* <Title className="title" level={3}>Информационная Панель</Title> */}
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Информационная Панель"
            subTitle="This is a subtitle"
          />
        </Col>
      </Row>
      {/* <Row type="flex" justify="center" gutter={[32, 72]}>
        <Col span={16}><SliderFilterProgress /></Col>
      </Row> */}
      <Row type="flex" gutter={[32, 72]}>
        <Col span={4}>
          <Card className="card-filter">
            {' '}
            <SliderFilterProgress period={12} position="vertical" />
          </Card>
        </Col>
        <Col span={6} offset="1">
          <Card title="Средняя стоймость заказа за месяц" bordered={true}>
            <Progress percent={orederProgress} status="active" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Выручка за месяц"
            extra={currentАmount(5)}
            bordered={true}
          >
            <Progress percent={50} status="active" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Конверсия за месяц"
            extra={currentPercent(5)}
            bordered={true}
          >
            <Progress percent={сonversionProgress} status="active" />
          </Card>
        </Col>
      </Row>
    </section>
  )
}

const DashBoard = connect()(Board)
// state => ({
//   editEmployee: state.editEmployeeReduser,
// }),
export default DashBoard
