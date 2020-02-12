import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

function TeamMessageIcon() {
  return (
    <i>
      <FontAwesomeIcon className="Icon-solid-big Align-center" icon={faCommentAlt} />
      <i id="newTeamMessage" className="newMessage red-circle">
        <span className="counterMess">
          <p>1</p>
        </span>
      </i>
      <i className="Child-icon"><FontAwesomeIcon className="Icon-solid-small Align-center" icon={faUserGraduate} /></i>
    </i>
  )
}

export default TeamMessageIcon
