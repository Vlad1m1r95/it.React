import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons'
function PersonIcon() {
  const userIcon = <FontAwesomeIcon icon={faUserTie} />
  return (
    <Badge style={{ backgroundColor: '#FF5F5F' }} count={3}>
      <Avatar size={64} icon={<UserOutlined />} />
    </Badge>
  )
}
export default PersonIcon
