import React from 'react'
import { render } from 'react-dom'
//Redux
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { configureStore } from './store/configureStore'
import App from './app'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//section
import EmployeesManagement from './section/employeesManagement'
import DashBoard from './section/dashboard/'
import ClockClassic from './common/companents/clock/classic-white/index'
import Login from './common/companents/loggin/login'

const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/Autorization" component={Login}></Route>
          <Route
            path="/EmployeeManagement"
            component={EmployeesManagement}
          ></Route>
          <Route path="/DashBoard" component={DashBoard}></Route>

          <Route path="/OrderManagement" component={ClockClassic}></Route>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
