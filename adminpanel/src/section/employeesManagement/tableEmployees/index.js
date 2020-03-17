/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useState, useMemo } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import './style/tableEmployee.sass'
import { actions } from '../../../actions'
import { asyncAction } from './../../../common/helpers/async'
import columns from './settings/collums/collums'

function TableEmployees(props) {
  const {
    data: employees,
    editEmployee,
    subscribe,
    isError: { error, setError },
    flag,
    loading: { loading, setLoading },
  } = props
  const GET_FETCH_EMPLOYEES = 'getEmployees'
  const DELETE_FETCH_EMPLOYEE = 'deleteEmployee'
  const SET_NEW_STORE = subscribe
  console.log(employees)
  // const [updateFlag, setUpdateFlag] = useState([false])

  // const [error, setError] = useState(isError)

  const clickHandler = e => {
    e.stopPropagation()
    e.preventDefault()

    if (e.target.value === 'delete') {
      setLoading(true)
      const emloyee = e.target.closest('tr')
      const emloyeeID = emloyee.dataset.rowKey
      const targetEmployee = employees.find(
        emloyee => emloyee.key === emloyeeID
      )

      const settings = {
        payload: targetEmployee,
        setLoading,
        // setError,
        flag,
      }
      asyncAction(DELETE_FETCH_EMPLOYEE, SET_NEW_STORE, settings)
    }
    if (e.target.value === 'edit') {
      const emloyee = e.target.closest('tr')
      const emloyeeID = emloyee.dataset.rowKey
      let targetEmployee = employees.find(emloyee => emloyee.key === emloyeeID)
      const tag = targetEmployee.contractor === 'Контрактор' ? true : false
      targetEmployee = { ...targetEmployee, contractor: tag }
      editEmployee(targetEmployee)
    }
  }
  console.log(employees)
  return (
    <div onClick={clickHandler}>
      <div className="table-operations"></div>
      <Table
        className="table-employee"
        columns={columns}
        dataSource={Array.isArray(employees) === true ? employees : []}
        loading={loading}
      />
    </div>
  )
}
const { deleteEmployee, editEmployee, setEmployees } = actions

const mapStateToProps = state => ({
  data: state.employeeReduser.data,
})
const mapDispatchToProps = {
  setEmployees,
  deleteEmployee,
  editEmployee,
}

export default connect(mapStateToProps, mapDispatchToProps)(TableEmployees)
