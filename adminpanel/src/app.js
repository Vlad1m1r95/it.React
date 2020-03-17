import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import './sass/app.sass'
import './sass/icon.sass'
import { Layout, Switch } from 'antd'
import HeaderContent from './common/companents/header'
import SidebarMenu from './common/companents/sidebar'
import Login from './common/companents/loggin/login'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const themeColors = { dark: 'dark', light: 'light', blue: 'blue' }

function App({ children }) {
  console.log('dd')
  const { dark, light } = themeColors
  const [theme, setTheme] = useState(light)
  const [collapse, setCollapse] = useState(true)
  let history = useHistory()

  const iscollapseHandler = isOpen => {
    setCollapse(isOpen)
  }
  const themeModeHandler = e => {
    // setTheme(!theme)
    console.log(e)
  }

  const [logged, setLogget] = useState(localStorage.getItem('logged'))
  console.log(logged)

  console.log(isNaN(logged))
  console.log(logged === null)
  console.log(logged)
  console.log(logged)
  const pushHistory = () => {
    if (logged === null || logged === '401') {
      history.push('/Autorization')
    } else {
      history.push('/Dashboard')
    }
  }

  useEffect(() => {
    pushHistory()
  }, [logged])

  const CheckLogged = ({ children }) => {
    if (logged === null || logged === '401') {
      return <Login callback={setLogget} />
    } else {
      return children
    }
  }

  const { Header, Content, Footer } = Layout

  return (
    <div id="App" className={`theme-${theme}`}>
      <CheckLogged>
        <Layout>
          <Header className="header  fixed-header">
            <HeaderContent />
            <Switch className="switch-themes" onChange={themeModeHandler} />
          </Header>

          <SidebarMenu theme={theme} isOpen={iscollapseHandler} />

          <Content
            className={
              collapse ? `scrollable close-sidebar ` : `scrollable open-sidebar`
            }
          >
            {' '}
            <section id="Content">{children}</section>
            {/* <Main /> */}
          </Content>
          <Footer className="fixed-footer">
            <span className="link_icon">
              Icons made by{' '}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{' '}
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                {' '}
                www.flaticon.com
              </a>
            </span>
          </Footer>
        </Layout>
      </CheckLogged>
    </div>
  )
}
const mapStateToProps = state => ({
  // data: state.employeeReduser.data,
})

export default connect(mapStateToProps)(App)
