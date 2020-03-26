import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import './sass/app.sass'
import './sass/icon.sass'
import { Layout } from 'antd'
import HeaderContent from './common/companents/header'
import SidebarMenu from './common/companents/sidebar'
import { useHistory } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import useProtectedRoute from './common/hooks/useProtectedRoute'

const themeColors = { dark: 'dark', light: 'light', blue: 'blue' }

function App({ children }) {
  useProtectedRoute()
  // const history = useHistory()

  // const authData = localStorage.getItem('authData')
  // useEffect(() => {
  //   if (authData === undefined) {

  //     history.push('/Autorization')
  //   }
  // }, [authData])

  const { dark, light } = themeColors
  const [theme, setTheme] = useState(light)
  const [collapse, setCollapse] = useState(true)

  const { Header, Content, Footer } = Layout
  const iscollapseHandler = isOpen => {
    setCollapse(isOpen)
  }

  return (
    <div id="App" className={`theme-${theme}`}>
      <Layout>
        <Header className="header  fixed-header">
          <HeaderContent />
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
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
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
    </div>
  )
}

export default App
