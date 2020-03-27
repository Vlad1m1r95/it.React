/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Chart from 'chart.js'
import { Typography, Row, Col, Card, Skeleton } from 'antd'
import './style/dashboard.sass'
import SliderFilterProgress from './sliderFilter'
import { useSelector, shallowEqual } from 'react-redux'

import { actions } from './../../actions/'
import ComprehensiveProgress from './../../common/companents/progress/ComprehensiveProgress'
import ChartCircle from './../../common/companents/chart/chart2'

const initial = {
  id: 3,
  year: 2020,
  month: 'Март',
  ordersComplite: 448,
  ordersFallen: 252,
  visitors: 1365,
  goods: 69,
  conversion: 10,
  totalСostOfGoods: 1331,
  objectiveOrdersComplite: 305,
  objectiveConversion: 25,
}

function Board(props) {
  const { Title } = Typography
  const [loading, setLoading] = useState(false)
  const [stats, setStats] = useState(initial)
  const [titleData, setTitleData] = useState('Статистика за Март')
  const [ordersComplite, setOrdersComplite] = useState(initial.ordersComplite)
  const [ordersFallen, setOrdersFallen] = useState(initial.ordersFallen)
  const [objectiveOrdersComplite, setObjectiveOrdersComplite] = useState(
    initial.objectiveOrdersComplite
  )
  const [objectiveConversion, setObjectiveConversion] = useState(
    initial.objectiveConversion
  )
  const [conversion, setConversion] = useState(initial.conversion)
  const [visitors, setVisitors] = useState(initial.visitors)
  const [goods, setGoods] = useState(initial.goods)
  const [totalСostOfGoods, setTotalСostOfGoods] = useState(
    initial.totalСostOfGoods
  )

  const statistic = useSelector(
    state => state.statisticReduser.data,
    shallowEqual
  )

  useEffect(() => {
    if (statistic !== undefined) {
      setLoading(statistic.isLoading)
      if (statistic.data.length < 2) {
        const newObjData = { data: statistic.data[0] }
        if (newObjData.data !== undefined) {
          setTitleData(`Статистика за ${newObjData.data.month}`)
          setStats(newObjData.data)
          setOrdersComplite(newObjData.data.ordersComplite)
          setOrdersFallen(newObjData.data.ordersFallen)
          setObjectiveOrdersComplite(newObjData.data.objectiveOrdersComplite)
          setOrdersComplite(newObjData.data.ordersComplite)
          setObjectiveConversion(newObjData.data.objectiveConversion)
          setConversion(newObjData.data.conversion)
        }
      }
    }
  }, [statistic])

  const { month } = stats

  const currentАmount = current => {
    return <span className="number-current"> {current} .руб </span>
  }
  const currentPercent = current => {
    return <span className="number-current"> {current} % </span>
  }

  const getPercentProgress = (now, objective) => {
    const current = Math.floor((now / objective) * 100)
    return current
  }

  const settingsOrder = {
    title: 'Выполненные заказы',
    extra: ordersComplite,
    percent: getPercentProgress(ordersComplite, objectiveOrdersComplite),
    data: [
      { name: `выполненные ${ordersComplite}`, value: ordersComplite },
      { name: `проваленные ${ordersFallen}`, value: ordersFallen },
    ],
  }
  const settingsProgress2 = {
    title: 'Конверсия',
    extra: currentPercent(conversion),
    percent: getPercentProgress(conversion, objectiveConversion),
    data: [
      { name: `выполненные ${ordersComplite}`, value: ordersComplite },
      { name: `посетители ${visitors}`, value: visitors },
    ],
  }

  const settingsProgress3 = {
    title: 'Средняя цена товара',
    extra: currentАmount(totalСostOfGoods),
    percent: getPercentProgress(50, goods),
    data: [{ name: `посетители ${visitors}`, value: visitors }],
  }

  return (
    <section id="Dushboard">
      <Row type="flex" className="row-col" gutter={[32, 72]}>
        <Col className="title-col" span={24}>
          <Title>{titleData}</Title>
          {/* <h1 className="title">Статистика за Март</h1> */}
        </Col>
        <Col span={20}>
          <Row align="middle" justify="space-around">
            <Col span={7} offset="1">
              <Skeleton loading={loading} avatar active>
                <ComprehensiveProgress settings={{ ...settingsOrder }} />
              </Skeleton>
            </Col>
            <Col span={7}>
              <ComprehensiveProgress settings={{ ...settingsProgress2 }} />
            </Col>
            <Col span={7}>
              <ComprehensiveProgress settings={{ ...settingsProgress3 }} />
            </Col>
          </Row>
        </Col>

        <Col span={4}>
          <Card bordered={false} className="card-filter">
            {' '}
            <SliderFilterProgress period={12} position="horizontal" />
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default Board
