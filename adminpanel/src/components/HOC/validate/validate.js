/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
// import FormEmployee from './../../Content/employee/form/formEmployee'
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd'
import keys from './../../../_helpers/generator/generateKey'
import ShowFormEmployee from './../../Content/employee/form/showFormEmployee';
import FormEmployee from './../../Content/employee/form/formEmployee'
import FormCustomValid from './../../_blocks/validate/error';




function validate(WrapperComponent, data) {
  return class extends React.Component {
    constructor(props) {
      console.log(props.errorText)
      super(props)
      this.state = {
        error: false,
        errorText: this.props.errorText,
        value: this.props.value,
        len: this.props.len
      }
      this.validLenght = this.isGreaterThan.bind(this)
      this.set = this.setvalue.bind(this)
    }
    errorMessage(errorText, len) {
      const message = `${errorText} : ${len}`
      this.setState({ errorText: message })
    }
    setvalue(value) {
      this.setState({ value })
    }
    isGreaterThan(data) {
      const { errorText, len } = this.props
      return len > data ? this.errorMessage(errorText, len) : this.setState({ errorText: null })
    }
    componentDidMount() {
      this.isGreaterThan(this.props.children)
      console.log(this.state.errorText)
    }
    componentDidUpdate(prevProps) {
      const { len, value } = this.state
      if (prevProps !== this.props) {
        this.setState({ value: this.props.value })
        this.isGreaterThan(value)
        console.log(this.props)
      }

    }
    render() {
      const isValid = this.validLenght
      return (<div>
        {/* <FormEmployee {...this.props} /> */}
        <WrapperComponent {...this.props} errorText={this.state.errorText} set={this.set} />

      </div>
      )

    }
  }
}
let FormEditorEmployee = validate(FormCustomValid)

// console.log(<ValidateFieldInput errorText={`Меньше чем`} len={5} data={10} />)
export default FormEditorEmployee


