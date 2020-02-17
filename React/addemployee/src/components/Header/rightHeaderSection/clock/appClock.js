import React from 'react'
import Clock from './clock'
class AppClock extends React.Component {
	constructor(props) {
		super(props)
		this.optionsData = this.CreateoptionsData.bind(this)
		this.correctClock = this.getCorrectClock.bind(this)
		this.correctDate = this.getCorrectDate.bind(this)
		this.state = {
			date: new Date(),
		}
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000)
	}
	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({
			date: new Date(),
		})
	}
	getCorrectClock(d) {
		let res = [d.getHours(), d.getMinutes()]
			.map(function (x) {
				return x < 10 ? '0' + x : x
			})
			.join(':')
		return res
	}
	getCorrectDate(d) {
		let counter = 0
		let res = [d.getDay(), d.getDate(), d.getMonth(), d.getFullYear()]
			.map(function (x) {
				let comma = null
				if (counter === 0) {
					counter++
					if (x === d.getDay()) {
						comma = true
						switch (x) {
							case 0:
								x = 'Воскресенье'
								break
							case 1:
								x = 'Понедельник'
								break
							case 2:
								x = 'Вторник'
								break
							case 3:
								x = 'Среда'
								break
							case 4:
								x = 'Четверг'
								break
							case 5:
								x = 'Пятница'
								break
							case 6:
								x = 'Суббота'
								break
							default:
								console.log('что-то пошло не так')
								break
						}
					}
				}

				if (x === d.getMonth()) {
					switch (x) {
						case 0:
							x = 'Января'
							break
						case 1:
							x = 'Февраля'
							break
						case 2:
							x = 'Марта'
							break
						case 3:
							x = 'Апреля'
							break
						case 4:
							x = 'Мая'
							break
						case 5:
							x = 'Июня'
							break
						case 6:
							x = 'Июля'
							break
						case 7:
							x = 'Августа'
							break
						case 8:
							x = 'Сентября'
							break
						case 9:
							x = 'Октября'
							break
						case 10:
							x = 'Ноября'
							break
						case 11:
							x = 'Декабря'
							break
						default:
							console.log('что-то пошло не так')
							break
					}
				}

				return comma === true ? x + ',' : x
			})
			.join(' ')
		return res
	}
	CreateoptionsData() {
		const options = {
			era: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			timezone: 'UTC',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		}
		return options
	}
	render() {
		return (
			<Clock
				clock={this.correctClock(this.state.date)}
				data={this.correctDate(this.state.date)}
			/>
		)
	}
}
export default AppClock
