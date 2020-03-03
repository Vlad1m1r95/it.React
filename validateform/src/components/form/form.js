import React from 'react'
import { Form } from 'antd'
import 'antd/dist/antd.css'
import './style/formEmployeeEditor.sass'
import validate from './../../helpers/HOCFunction/vaidate/validate'
import Fields from './data/fields'
import { FormText } from './data/formData'

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 8,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
}
class FormEmployee extends React.Component {
  constructor(form) {
    super(form)
    this.state = {
      name: '',
      password: '',
      email: '',
    }
    this.change = this.handleChange.bind(this)
    this.submit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const { contractor } = this.state
    const target = event.target
    let value = ''
    let name = ''
    let contractorText = ''
    if (target.name) {
      if (typeof event !== 'string') {
        value = target.type === 'checkbox' ? target.checked : target.value
        if (target.type === 'checkbox') this.UpdateWorkStatus(target.checked)
        name = target.name
      } else {
        name = 'position'
        value = event
      }
      this.setState({ [name]: value })
      this.props.validate(name, value)
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    this.props.validate(name, this.state)
  }
  render() {
    const { send, title, logoTitle } = FormText
    const Errors = Object.entries(this.props.fieldValidate)
    return (
      <form className="form-flex" onSubmit={this.submit} onChange={this.change}>
        <Form.Item className="aln-start" {...tailLayout}>
          <legend>
            <strong>{logoTitle}</strong> <br />
            <small>{title}</small>
          </legend>
        </Form.Item>
        <div className="aln-start">
          {Fields.map((Field, i) => {
            return (
              <Form.Item key={i} {...tailLayout}>
                <Field errors={Errors[i][1]} />
              </Form.Item>
            )
          })}
        </div>

        <Form.Item className="aln-end" {...tailLayout}>
          {/* <Button name="submit">{send}</Button> */}
          <input type="submit" name="submit" value={send} />
        </Form.Item>
      </form>
    )
  }
}

const FormEmployeeEditor = validate(FormEmployee)

export default FormEmployeeEditor
