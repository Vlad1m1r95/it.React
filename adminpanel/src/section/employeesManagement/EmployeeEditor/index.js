/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import nanoid from 'nanoid'

import { Form, Button } from 'antd'
import formFields from '../settings/_fields'
import createForm from './../../../common/hoc/form/form'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { actions } from './../../../actions'
import useFetch from './../../../common/hooks/useFetch'
import { ADD_EDIT_EMPLOYEE, ADD_EMPLOYEE } from './../../../actionTypes/'

function СontrolFormEmployee(props) {
  const [form] = Form.useForm()
  const {
    settings: { buttons },
  } = props
  const { add, edit } = buttons
  const [mode, setMode] = useState(add)
  const dispatch = useDispatch()

  const ADD_FETCH_EDIT_EMPLOYEE = 'editEmployee'
  const ADD_FETCH_EMPLOYEE = 'addEmployee'

  const [buttonText, setButtonText] = useState(add.text)
  const editEmployee = useSelector(
    state => state.editEmployeeReduser.data,
    shallowEqual
  )

  const { setReq, res } = useFetch()
  const { isLoading, data } = res

  useEffect(() => {
    if (typeof editEmployee === 'object') {
      if (Object.keys(editEmployee).length !== 0) {
        form.setFieldsValue(editEmployee)
        setMode(edit)
        setButtonText(edit.text)
      } else {
        setMode(add)
      }
    }
  }, [editEmployee])

  const onFinish = values => {
    values.contractor = values.contractor === true ? 'Контрактор' : 'Фрилансер'
    console.log(values)
    if (mode === edit) {
      mode.text = mode.loading
      values = { ...values, key: editEmployee.key, id: editEmployee.key }
      setReq(ADD_FETCH_EDIT_EMPLOYEE, values)

      dispatch({ type: ADD_EDIT_EMPLOYEE, payload: values })
      isLoading === true ? setButtonText(edit.text) : setButtonText(add.text)
      if (isLoading === true) {
        setButtonText(edit.text)
        setMode(edit)
      } else {
        setButtonText(add.text)
        setMode(add)
      }
    }
    if (mode === add) {
      mode.text = mode.loading
      const id = nanoid(3)
      const password = nanoid(6)
      const email = 'test@email.com'
      values = { ...values, key: id, id, password: password, email: email }
      setReq(ADD_FETCH_EMPLOYEE, values)
      dispatch({ type: ADD_EMPLOYEE, payload: values })
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
        loading={isLoading}
        type="primary"
        htmlType="submit"
        data-action={mode.action}
      >
        {buttonText}
      </Button>
    </Form>
  )
}

const EmployeeEditor = createForm(СontrolFormEmployee, formFields)
export default EmployeeEditor
