/* eslint-disable react/prop-types */
import React from 'react'
import { Form, Input, Button, Checkbox, Select } from 'antd'
import { editEmployee } from './../../../actions/employee'

// const InputName = CreateField(nameinput)

const createForm = (WrapperForm, fields) => {
  return class Form extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      const {
        settings: { title },
      } = this.props
      return (
        <WrapperForm {...this.props}>
          <legend>
            <strong>{title}</strong>
          </legend>

          {fields.map((Field, i) => {
            return <Field key={i} />
          })}
        </WrapperForm>
      )
    }
  }
}

export default createForm
