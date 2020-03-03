import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import 'antd/dist/antd.css'
import 'animate.css/animate.min.css'
import './style/error.sass'

const catchError = FieldComponent => {
  //Превращаю экземпляр класса в класс, ну подругому не работает
  class GetClass extends React.Component {
    render() {
      return FieldComponent
    }
  }
  return class extends React.Component {
    constructor(props) {
      super(props)
    }
    unvalidField() {
      const {
        layout,
        errors: { errorText },
        classError,
      } = this.props
      return (
        <div className="input-unvalid animated  pulse animate-errors-input">
          <GetClass {...this.props} />
          <span className="animated  pulse animate-errors-label" htmlFor="name">
            {errorText}
          </span>
        </div>
      )
    }
    validField() {
      const { layout } = this.props
      return (
        <div>
          <GetClass {...this.props} />
        </div>
      )
    }

    render() {
      const {
        errors: { error },
      } = this.props
      return error ? this.unvalidField() : this.validField()
    }
  }
}
export default catchError
