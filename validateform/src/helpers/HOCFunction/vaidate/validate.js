import React from 'react'
import 'antd/dist/antd.css'

import { message } from 'antd'
import {
  errors,
  fildNameValidation,
  messageSubmit,
} from './../../../components/form/data/formData'

const validate = WrapperValidateComponent => {
  return class extends React.Component {
    constructor(props) {
      const { success, error, forgotPass } = messageSubmit
      super(props)
      this.validate = this.validateField.bind(this)
      this.actionValidate = { validate: this.validate }
      this.state = errors

      this.settingsValidate = {
        validate: this.validate,
        action: this.actionValidate,
        fieldValidate: this.state,
        catchError: this.catch,
      }
      const key = 'updatable'
      this.openMessage = (time, timeout, complete, type) => {
        message.loading({ content: 'Секундочку...', key, duration: time })
        setTimeout(() => {
          message[type]({ content: complete, key, duration: time })
        }, timeout)
      }
      this.success = (time, timeout) => {
        timeout = timeout * 1000
        this.openMessage(time, timeout, success, 'success')
      }

      this.error = time => {
        message.error(error, time)
      }
      this.forgotPass = time => {
        message.error(forgotPass)
      }
      this.combineError = (time, timeout) => {
        timeout = timeout * 1000
        this.openMessage(time, timeout, error, 'error')
        timeout = timeout + time * 1000 * time * 2
        setTimeout(() => this.forgotPass(time), timeout)
      }
    }

    isGreateThen(name, value) {
      const { errorText } = errors[name]
      const len = this.setThelength(name)
      const isError = value >= len ? false : true
      let text = name === 'email' ? errorText : `${errorText} ${len}`
      this.setState({
        [name]: { error: isError, errorText: text },
      })
      return isError
    }
    setThelength(name) {
      const { length } = errors[name]
      const len = length || 5
      return len
    }
    getStrLength(str) {
      return str.trim().length
    }

    validateField(target, value) {
      const name = typeof target === 'object' ? 'submit' : target
      name === 'submit'
        ? this.showAllErrors(value)
        : this.isGreateThen(name, this.getStrLength(value))
    }
    showAllErrors(value) {
      let isError = false
      const errors = Object.entries(value)
      errors.forEach((error, i) => {
        let val = error[1]
        this.isGreateThen(fildNameValidation[i], this.getStrLength(val))
        isError =
          isError ||
          this.isGreateThen(fildNameValidation[i], this.getStrLength(val))
      })
      console.log(isError)
      return isError === true ? this.combineError(0.8, 2) : this.success(0.8, 2)
    }
    render() {
      const settingValidate = {
        ...this.settingsValidate,
        fieldValidate: this.state,
      }
      return <WrapperValidateComponent {...settingValidate} />
    }
  }
}

export default validate
