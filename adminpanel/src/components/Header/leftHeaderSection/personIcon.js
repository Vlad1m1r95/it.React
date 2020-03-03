import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Badge } from 'antd'
function PersonIcon() {
  const userIcon = <FontAwesomeIcon icon={faUserTie} />
  return (
    <Badge style={{ backgroundColor: '#FF5F5F' }} count={100}>
      <Avatar size={64} shape="square" icon="user" />
    </Badge>
  )
}
export default PersonIcon
