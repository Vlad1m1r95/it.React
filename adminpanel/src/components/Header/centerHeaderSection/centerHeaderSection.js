import React from 'react'
import ClientMessageIcon from './clientMessageIcon'
import TeamMessageIcon from './teamMessageIcon'
import OrderMessageIcon from './orderMessageIcon'
import './style/headerCenter.sass'
import { Row, Col, Badge } from 'antd'

function CenterHeaderSection() {
	return (
		<Row id='BadgeSection' type='flex' justify='start' align='middle'>
			<Col span={8}>
				{' '}
				<Badge
					style={{ backgroundColor: '#FF5F5F' }}
					className='square-badge badge-green'
					count={1}
				>
					<ClientMessageIcon />
				</Badge>
			</Col>
			<Col span={8}>
				<Badge
					style={{ backgroundColor: ' #5CF896' }}
					className='square-badge badge-yellow'
					count={99}
				>
					<TeamMessageIcon />
				</Badge>
			</Col>
			<Col span={8}>
				{' '}
				<Badge
					style={{ backgroundColor: '#F2E780' }}
					className='square-badge badge-red'
					count={99}
				>
					<OrderMessageIcon />
				</Badge>
			</Col>
		</Row>
	)
}
export default CenterHeaderSection
