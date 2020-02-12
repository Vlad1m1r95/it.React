import React from 'react'
import './../sass/app.sass'
import './../sass/icon.sass'
import './../sass/grid.sass'
import Header from './Header/header';
import BreadCrumbs from './breadCrumbs/breadCrumbs';
import Content from './Content/content';



function App(props) {
  return (
    <div id="App" >
      <Header />
      <BreadCrumbs />
      <Content />
    </div>
  )
}
export default App