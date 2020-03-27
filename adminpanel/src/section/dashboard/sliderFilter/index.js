import React, { useState, useEffect } from 'react'
import { Typography, Slider, Switch } from 'antd'
import './style/sliderFilterProgress.sass'
import DateSlider from './../../../common/companents/sliderData/'
import useFetch from './../../../common/hooks/useFetch'
import getMissingNumbers from './../../../common/helpers/array/getMissingNumbers'
import { useDispatch } from 'react-redux'
import { SET_STATISTIC } from './../../../actionTypes'
// const month = new Date().getMonth() + 1

const SliderFilterProgress = props => {
  const [sliderMode, setSliderMode] = useState('month')
  const onChangeSwitch = checked => {
    checked === true ? setSliderMode('period') : setSliderMode('month')
  }
  const { setReq, res } = useFetch()
  const dispatch = useDispatch()
  const callback = value => {
    value = Array.isArray(value) === true ? value : [value]
    const idStats = getMissingNumbers(value)
    const GET_CURRENT_STATISTICS = 'getStatisticsWithParams'
    const payload = {
      params: { id: idStats },
    }
    setReq(GET_CURRENT_STATISTICS, payload)
  }

  useEffect(() => {
    // const month = new Date().getMonth() + 1
    if (res.isLoading !== true) {
      dispatch({ type: SET_STATISTIC, payload: res })
    }
  }, [res])

  useEffect(() => {
    const month = new Date().getMonth() + 1
    callback(month)
    if (res.isLoading !== true) {
      dispatch({ type: SET_STATISTIC, payload: res })
    }
  }, [])
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
