import React, { useState } from 'react'
import { Typography, Slider, Switch } from 'antd'
import './style/sliderFilterProgress.sass'
import DateSlider from './../../../common/companents/sliderData/'
const SliderFilterProgress = props => {
  const [sliderMode, setSliderMode] = useState('month')
  const onChangeSwitch = checked => {
    checked === true ? setSliderMode('period') : setSliderMode('month')
  }
  console.log(sliderMode)
  // const sliderSettings = CreateMarksMonth(12, sliderMode, 'vertical')

  return (
    <div className="slider">
      <div className="swith-buttonFilterProgress">
        <span>За месяц</span>
        <Switch size="small" onChange={onChangeSwitch} />
        <span>За период</span>
      </div>
      <DateSlider {...props} mode={sliderMode} />
      {/* <Slider vertical className='slider-filterProgress'
      {...sliderSettings}
      range
      // defaultValue={[1, 3]}
      included={sliderMode === 'period' ? true : false} /> */}
    </div>
  )
}

export default SliderFilterProgress
