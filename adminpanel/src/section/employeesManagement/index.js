import React, { useState, useEffect } from 'react'
import {
  asyncAction,
  asyncGetDataAndUpdateStore,
} from './../../common/helpers/async'
import { connect } from 'react-redux'
import { actions } from './../../actions/index'
import BreadCrumbs from './../../common/companents/breadCrumbs/'
import TableEmployees from './tableEmployees'
import EmployeeEditor from './EmployeeEditor'
import { Row, Col } from 'antd'

//settings
import {
  settingsForm,
  settingsTable,
  settingsBreadCrumbs,
} from './settings/settings'
import formfields from './settings/_fields'

function EmployeesManagement({ setEmployees }) {
  const [flag, setFlag] = useState(true)

  const [error, setError] = useState('')
  const [mount, setMount] = useState([])

  // const settings_get = {
  //   payload: [],
  //   setLoading,
  //   setFlag,
  //   setError,
  // }
  const SET_NEW_STORE = setEmployees
  const GET_FETCH_EMPLOYEES = 'getEmployees'
  // useEffect(() => {
  //   getFetch(SET_NEW_STORE, GET_FETCH_EMPLOYEES, settingsFeth_GET, updateFlag)
  // })
  // useEffect(() => {
  //   console.log("d")
  //   Updater(mount)
  // })
  // })

  // const transformData = data => data
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    UpdateStoreifChildChange(loading)
  }, [loading])
  // useEffect(() => {
  //   UpdateStoreifChildChange(loading)
  // }, [])

  async function UpdateStoreifChildChange(flag) {
    console.log('d')
    try {
      await asyncGetDataAndUpdateStore(GET_FETCH_EMPLOYEES, SET_NEW_STORE)
    } catch (e) {
      setError(e.message || 'Unexpected error')
    }
    setLoading(false)
  }

  const Updater = mount => {
    UpdateStoreifChildChange(mount)
  }

  return (
    <Row
      justify="center"
      gutter={[30, 30]}
      type="flex"
      className="align-baseline"
    >
      <Col span={23}>
        <BreadCrumbs breadCrumbs={{ ...settingsBreadCrumbs }} />
      </Col>
      <Col className="theme-form col-height" span={8}>
        {' '}
        <EmployeeEditor
          flag={flag}
          loading={{ loading, setLoading }}
          isError={(error, setError)}
          subscribe={UpdateStoreifChildChange}
          settings={{ ...settingsForm }}
        />
      </Col>
      <Col className="theme-table col-height" span={14}>
        <TableEmployees
          flag={flag}
          loading={{ loading, setLoading }}
          isError={(error, setError)}
          subscribe={UpdateStoreifChildChange}
          settings={{ ...settingsTable }}
        />
      </Col>
    </Row>
  )
}
const { setEmployees } = actions
const mapDispatchToProps = {
  setEmployees,
}

export default connect(null, mapDispatchToProps)(EmployeesManagement)
