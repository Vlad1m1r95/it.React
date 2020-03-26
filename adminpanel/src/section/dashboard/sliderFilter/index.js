import React, { useState, useEffect } from 'react'
import { Typography, Slider, Switch } from 'antd'
import './style/sliderFilterProgress.sass'
import DateSlider from './../../../common/companents/sliderData/'
import { asyncAction } from '../../../common/helpers/async'
import getQueryParams from './../../../common/helpers/getQueryParams/getQueryParams'
import useFetch from './../../../common/hooks/useFetch'
import getMissingNumbers from './../../../common/helpers/array/getMissingNumbers'

const SliderFilterProgress = props => {
  const [sliderMode, setSliderMode] = useState('month')
  const [payload, setPayload] = useState({})
  const onChangeSwitch = checked => {
    checked === true ? setSliderMode('period') : setSliderMode('month')
  }
  const { setReq, res } = useFetch()

  console.log(res)
  const callback = value => {
    console.log(value)
    value = Array.isArray(value) === true ? value : [value]
    const idStats = getMissingNumbers(value)
    console.log(idStats)
    const GET_CURRENT_STATISTICS = 'getStatisticsWithParams'
    const payload = {
      params: { id: idStats },
    }
    setReq(GET_CURRENT_STATISTICS, payload)
  }

  // const getCurrentStatistics = () => {
  //   const settings = {
  //     payload: {
  //       params: { id: [10, 11] },
  //     },
  //   }
  //   const GET_CURRENT_STATISTICS = 'getStatisticsWithParams'
  //   const callback = getStatictics
  //   asyncAction(GET_CURRENT_STATISTICS, callback, settings, true)
  // }
  // useEffect(() => {
  //   getCurrentStatistics()
  // }, [])

  return (
    <div className="slider">
      <div className="swith-buttonFilterProgress">
        <span>За месяц</span>
        <Switch size="small" onChange={onChangeSwitch} />
        <span>За период</span>
      </div>
      <DateSlider callback={callback} {...props} mode={sliderMode} />
    </div>
  )
}

export default SliderFilterProgress
