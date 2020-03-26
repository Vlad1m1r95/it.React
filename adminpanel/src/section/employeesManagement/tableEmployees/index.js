/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import './style/tableEmployee.sass'
import { actions } from '../../../actions'
import columns from './settings/collums/collums'
import hooks from './../../../common/hooks/index'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { EDIT_EMPLOYEE } from './../../../actionTypes/'

function TableEmployees(props) {
  const { editEmployee } = props

  const { useEdibleData, useFetch } = hooks
  const GET_EMPLOYEES = 'getEmployees'
  const DELETE_EMPLOYEES = 'deleteEmployee'
  const addEditEmployee = useSelector(
    state => state.addEditEmployeeReduser.data,
    shallowEqual
  )
  const addEmployee = useSelector(
    state => state.addEmployeeReduser.data,
    shallowEqual
  )

  const { setReq, res } = useFetch()
  const { isLoading, data: employees } = res

  useEffect(() => {
    setReq(GET_EMPLOYEES, 'null', [addEditEmployee, addEmployee])
  }, [GET_EMPLOYEES, employees, addEditEmployee, addEmployee])

  const edibleDataEmployees = useEdibleData(employees, 'Array')
  const dispatch = useDispatch()

  const clickHandler = e => {
    e.stopPropagation()
    e.preventDefault()
    const { editEmployee } = actions
    if (e.target.value === 'delete') {
      // setLoading(true)
      const emloyee = e.target.closest('tr')
      const emloyeeID = emloyee.dataset.rowKey
      const targetEmployee = edibleDataEmployees.find(
        emloyee => emloyee.key === emloyeeID
      )
      setReq(DELETE_EMPLOYEES, targetEmployee)

      // asyncAction(DELETE_FETCH_EMPLOYEE, SET_NEW_STORE, settings)
    }
    if (e.target.value === 'edit') {
      const emloyee = e.target.closest('tr')
      const emloyeeID = emloyee.dataset.rowKey

      let targetEmployee = edibleDataEmployees.find(
        emloyee => emloyee.key === emloyeeID
      )
      console.log(targetEmployee)
      const tag = targetEmployee.contractor === 'Контрактор' ? true : false
      targetEmployee = { ...targetEmployee, contractor: tag }
      dispatch({ type: EDIT_EMPLOYEE, payload: targetEmployee })
    }
  }
  return (
    <div onClick={clickHandler}>
      <div className="table-operations"></div>
      <Table
        className="table-employee"
        columns={columns}
        dataSource={edibleDataEmployees}
        loading={isLoading}
      />
    </div>
  )
}

export default TableEmployees
