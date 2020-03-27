import React from 'react'
import { render } from 'react-dom'
//Redux
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { configureStore } from './store/configureStore'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import App from './app'
//section
import EmployeesManagement from './section/employeesManagement'
import DashBoard from './section/dashboard/'
import ClockClassic from './common/companents/clock/classic-white/index'
import Login from './common/companents/loggin/login'
import Page404 from './common/companents/404/'
import Page401 from './common/companents/401/'
import PageIndevelopment from './common/companents/500/index'
const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/Autorization" exact={true} component={Login}></Route>
        <Route path="/404" component={Page404}></Route>
        <Route path="/401" component={Page401}></Route>
        <Route path="/PageIndevelopment" component={PageIndevelopment}></Route>
        <Route path="/" exact={true}>
          <Redirect to="/Autorization" />
        </Route>

        <App>
          <Route
            path="/EmployeeManagement"
            component={EmployeesManagement}
          ></Route>
          <Route path="/DashBoard" component={DashBoard}></Route>
          <Route path="/OrderManagement" component={PageIndevelopment}></Route>
        </App>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
