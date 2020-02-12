import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
function ClientMessageIcon(props) {
  return (
    <i>
      <FontAwesomeIcon className="Icon-solid-big Align-center" icon={faComments} />
      <i id="newClientMessage" className="newMessage green-circle">
        <span className="counterMess">
          <p>1</p>
        </span>
      </i>
    </i>
  )
}

export default ClientMessageIcon
