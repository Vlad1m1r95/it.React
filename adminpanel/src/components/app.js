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
import SidebarMenu from './sidebar/menu'
// <Header className='header blue'>
// 							<HeaderContent />
// 						</Header>
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isOpen: false }
		this.sidebarMode = { isOpen: false }
		this.IsOpen = this.isOpenHandler.bind(this)
	}
	isOpenHandler(isOpen) {
		this.sidebarMode.isOpen = isOpen
		console.log(this.sidebarMode.isOpen)
		this.setState({ isOpen: isOpen })
	}

	render() {
		const inheritWight = { width: 'inherit' }
		const { Header, Content, Footer, Sider } = Layout
		const { isOpen } = this.state
		return (
			<div id='App'>
				<Layout>
					<Header className=' header blue fixed-header'>
						<HeaderContent />
					</Header>
					{/* <Sider width={isOpen ? 75 : 200} className='sidebar'> */}
					<SidebarMenu isOpen={this.IsOpen} />
					{/* </Sider> */}

					<Content
						className={
							isOpen ? 'scrollable close-sidebar' : 'scrollable open-sidebar'
						}
					>
						{' '}
						<Main />
					</Content>
					<Footer className='fixed-footer'></Footer>
				</Layout>
			</div>
		)
	}
}
export default App
