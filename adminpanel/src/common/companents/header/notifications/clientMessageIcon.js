import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
function ClientMessageIcon(props) {
  return (
    <span className="square-icon">
      <i>
        <FontAwesomeIcon
          className="Icon-solid-big Align-center"
          icon={faComments}
        />
        <i id="newClientMessage" className="newMessage green-circle">
          <span className="counterMess"></span>
        </i>
      </i>
    </span>
  )
}

export default ClientMessageIcon
