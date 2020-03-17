import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons'

function OrderMessageIcon() {
  return (
    <i>
      <FontAwesomeIcon
        className="Icon-solid-big Align-center"
        icon={faCommentDollar}
      />
      <i id="newOrderMessage" className="newMessage yellow-circle">
        <span className="counterMess"></span>
      </i>
    </i>
  )
}

export default OrderMessageIcon
