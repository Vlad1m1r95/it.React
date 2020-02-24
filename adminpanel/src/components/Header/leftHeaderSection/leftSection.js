import React from 'react'
import HumburgerIcon from './humburgerIcon'
import PersonIcon from './personIcon'
import { Row, Col } from 'antd'
import './style/leftHeaderSection.sass'
function LeftHeaderSection() {
	return (
		<Row type='flex' gutter={[30]} justify='start' align='middle'>
			{/* <Col id='humburger-menu' span={4}>
				{' '}
				<HumburgerIcon />
			</Col> */}
			<Col id='user' span={4}>
				{' '}
				<PersonIcon />
			</Col>
		</Row>
	)
}
export default LeftHeaderSection
