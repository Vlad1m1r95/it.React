/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import nanoid from 'nanoid'

import { Form, Button } from 'antd'
import formFields from '../settings/_fields'
import createForm from './../../../common/hoc/form/form'
import { connect } from 'react-redux'
import { actions } from './../../../actions'
import { asyncAction } from './../../../common/helpers/async'

function СontrolFormEmployee(props) {
  const [form] = Form.useForm()
  const {
    settings: { buttons },
    settings,
  } = props
  const { add, edit } = buttons
  const [mode, setMode] = useState(add)
  const {
    editEmployee,
    resetEditEmployee,
    setEmployees,
    subscribe,
    flag,
    isError: { error, setError },
    loading: { loading, setLoading },
  } = props
  console.log(addEditEmployee)
  const CALL_PARENT = subscribe
  const ADD_EDIT_EMPLOYEE = 'editEmployee'
  const ADD_EMPLOYEE = 'addEmployee'

  const [buttonText, setButtonText] = useState(add.text)
  const [updateFlag, setUpdateFlag] = useState([false])

  useEffect(() => {
    if (Object.keys(editEmployee).length !== 0) {
      form.setFieldsValue(editEmployee)
      setMode(edit)
      loading === false ? setButtonText(edit.text) : setButtonText(edit.loading)
    } else {
      setMode(add)
      loading === false ? setButtonText(add.text) : setButtonText(add.loading)
    }
  })

  const onFinish = values => {
    values.contractor = values.contractor === true ? 'Контрактор' : 'Фрилансер'
    setLoading(true)
    console.log(values)
    if (mode === edit) {
      mode.text = mode.loading
      values = { ...values, key: editEmployee.key, id: editEmployee.key }
      const settings_edit = {
        payload: values,
        setUpdateFlag,
        setLoading,
        // setError,
        flag,
      }
      asyncAction(ADD_EDIT_EMPLOYEE, CALL_PARENT, settings_edit)

      //resetEditEmployee()
    }
    if (mode === add) {
      mode.text = mode.loading
      const id = nanoid(3)
      const password = nanoid(6)
      values = { ...values, key: id, id, password }
      const settings_add = {
        payload: values,
        setUpdateFlag,
        flag,
      }
      asyncAction(ADD_EMPLOYEE, CALL_PARENT, settings_add)
      // addEmployee(values)
    }
    form.resetFields()
  }

  const onFinishFailed = errorInfo => {
    console.log(errorInfo)
  }

  // UpdateWorkStatus(workStatus) {
  //   workStatus === true
  //     ? this.setState({ contractorText: 'Контрактор' })
  //     : this.setState({ contractorText: 'Фрилансер' })
  // }

  // postFromServer() {
  //   // Отправка на сервер. Тут должен быть POST запрос на сервер
  //   //fetch()
  // }

  return (
    <Form
      form={form}
      className="form-employee"
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {props.children}
      <Button
        loading={loading}
        type="primary"
        htmlType="submit"
        data-action={mode.action}
      >
        {buttonText}
      </Button>
    </Form>
  )
}

const Employee = createForm(СontrolFormEmployee, formFields)

const {
  addEmployee,
  addEditEmployee,
  resetEditEmployee,
  setEmployees,
} = actions
const mapStateToProps = state => ({
  editEmployee: state.editEmployeeReduser,
})
const mapDispatchToProps = {
  resetEditEmployee,
  addEmployee,
  addEditEmployee,
  setEmployees,
  // editEmployee: employee => editEmployee(dispatch, employee),
}

const EmployeeEditor = connect(
  mapStateToProps,
  mapDispatchToProps
  // dispatch => ({
  //   addEmployee: employee => addEmployee(dispatch, employee),
  //   addEditEmployee: employee => addEditEmployee(dispatch, employee),
  //   resetEditEmployee: () => resetEditEmployee(dispatch),
  // })
)(Employee)
export default EmployeeEditor
