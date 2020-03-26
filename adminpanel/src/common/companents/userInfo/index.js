import React, { useState, useEffect } from 'react'
import { Drawer } from 'antd'

function UserInfo({ isVisible }) {
  const { visible, setVisible } = useState(false)
  const { placement, setPlacement } = useState('')

  const visibleSet = () => {
    setVisible(isVisible)
  }
  useEffect(() => {
    visibleSet()
  }, [isVisible])

  const onChange = e => {
    setPlacement(e.target.value)
  }
  const onClose = e => {
    setVisible(false)
  }

  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
      destroyOnClose={true}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default UserInfo
