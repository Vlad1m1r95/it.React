/* eslint-disable indent */
import React from 'react'
import Clock from './clock'
class AppClock extends React.PureComponent {
  constructor(props) {
    super(props)

    // this.correctDate = this.getCorrectDate.bind(this)
    this.state = {
      hours: new Date().getHours(),
      dayOfTheWeek: this.formatDayWeek(new Date().getDay()),
      minutes: new Date().getMinutes(),
      dayOfMonth: new Date().getDate(),
      month: this.formatMounth(new Date().getMonth()),
      year: new Date().getFullYear(),
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    const { minutes, dayOfTheWeek, hours, month, year } = this.state
    let newMinutes = new Date().getMinutes()
    if (newMinutes !== minutes) {
      this.setState({
        minutes: new Date().getMinutes(),
      })
      let newHours = new Date().getHours()
      if (newHours !== hours) {
        this.setState({
          hours: new Date().getHours(),
        })
        let newDayOfTheWeek = this.formatDayWeek(new Date().getDay())
        if (newDayOfTheWeek !== dayOfTheWeek) {
          this.setState({
            dayOfTheWeek: this.formatDayWeek(new Date().getDay()),
            dayOfMonth: new Date().getDate(),
          })
          let newMounth = new Date().getMonth()
          if (newMounth !== month) {
            this.setState({
              month: new Date().getMonth(),
            })
            let newYear = new Date().getFullYear()
            if (newYear !== year) {
              this.setState({
                year: new Date().getFullYear(),
              })
            }
          }
        }
      }
    }
  }

  formatDayWeek(day) {
    switch (day) {
      case 0:
        day = 'Воскресенье'
        break
      case 1:
        day = 'Понедельник'
        break
      case 2:
        day = 'Вторник'
        break
      case 3:
        day = 'Среда'
        break
      case 4:
        day = 'Четверг'
        break
      case 5:
        day = 'Пятница'
        break
      case 6:
        day = 'Суббота'
        break
      default:
        console.log('что-то пошло не так')
        break
    }
    return day
  }
  formatMounth(mounth) {
    switch (mounth) {
      case 0:
        mounth = 'Января'
        break
      case 1:
        mounth = 'Февраля'
        break
      case 2:
        mounth = 'Марта'
        break
      case 3:
        mounth = 'Апреля'
        break
      case 4:
        mounth = 'Мая'
        break
      case 5:
        mounth = 'Июня'
        break
      case 6:
        mounth = 'Июля'
        break
      case 7:
        mounth = 'Августа'
        break
      case 8:
        mounth = 'Сентября'
        break
      case 9:
        mounth = 'Октября'
        break
      case 10:
        mounth = 'Ноября'
        break
      case 11:
        mounth = 'Декабря'
        break
      default:
        console.log('что-то пошло не так')
        break
    }
    return mounth
  }
  render() {
    const { minutes, hours, dayOfMonth, dayOfTheWeek, year, month } = this.state
    return (
      <Clock
        dayOfMonth={dayOfMonth}
        dayOfTheWeek={dayOfTheWeek}
        year={year}
        hours={hours}
        minutes={minutes}
        month={month}
      />
    )
  }
}
export default AppClock
