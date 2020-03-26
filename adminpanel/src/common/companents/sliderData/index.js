/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Slider } from 'antd'
const DateSlider = ({ period, mode, position, callback }) => {
  let currentMonth = new Date().getMonth() + 1
  console.log(currentMonth)
  const [currentPosition, setCurrentPosition] = useState(currentMonth)
  const LANG = 'RU'
  let mark = {}
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let monthNamesRU = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ]

  monthNames = LANG === 'RU' ? monthNamesRU : monthNames
  if (position !== 'vertical') {
    monthNames.reverse()
    currentMonth = period - currentMonth
  }

  for (let month = 1; month <= period; month++) {
    if (month === currentMonth) {
      mark[month] = {
        style: { color: '#f50' },
        label: monthNames[month - 1],
      }
    } else {
      mark[month] = {
        style: { color: '#333' },
        label: monthNames[month - 1],
      }
    }
  }

  const changeHandler = value => {
    mode === 'month' ? setCurrentPosition(value) : setCurrentPosition(value[1])
    callback(value)
  }
  const renderMode = () => {
    let settings = {}
    switch (mode) {
      case 'month':
        settings = {
          marks: mark,
          min: 1,
          max: period,
          defaultValue: currentPosition,
          range: false,
          included: false,
        }
        break
      case 'period':
        settings = {
          marks: mark,
          min: 1,
          max: period,
          defaultValue: [currentPosition, currentPosition / 2],
          range: true,
          included: true,
        }
        break
    }
    return (
      <Slider
        reverse
        vertical={true}
        className="slider-filterProgress"
        {...settings}
        dots={true}
        onAfterChange={changeHandler}
      />
    )
  }
  const SliderComplite = renderMode()

  return renderMode() || null
}
export default DateSlider

// const sliderSettings = {
//   marks: ,
//   min: 1,
//   max: 12,
//   defaultValue: [1]
// }
