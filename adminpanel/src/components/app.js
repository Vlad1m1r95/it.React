import React from 'react'
import 'antd/dist/antd.css'
import './../sass/app.sass'
import './../sass/icon.sass'
// import './../sass/grid.sass'
import { Layout } from 'antd'
import HeaderContent from './Header/header'
// import BreadCrumbs from './breadCrumbs/breadCrumbs'
import Main from './Content/content'
import { StickyContainer, Sticky } from 'react-sticky'

// <Header className='header blue'>
// 							<HeaderContent />
// 						</Header>
function App(props) {
	const { Header, Footer, Sider, Content } = Layout

	return (
		<div id='App'>
			<Layout>
				<Header className=' header blue fixed-header'>
					<HeaderContent />
				</Header>

				<Content className='scrollable'>
					{' '}
					<Main />
				</Content>
				<Footer className='fixed-footer'></Footer>
			</Layout>
		</div>
	)
}
export default App
