import React, { useState, useEffect } from 'react'
import {
  asyncAction,
  asyncGetDataAndUpdateStore,
} from './../../common/helpers/async'
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
          isError={(error, setError)}
          settings={{ ...settingsForm }}
        />
      </Col>
      <Col className="theme-table col-height" span={14}>
        <TableEmployees
          flag={flag}
          isError={(error, setError)}
          settings={{ ...settingsTable }}
        />
      </Col>
    </Row>
  )
}

export default EmployeesManagement
