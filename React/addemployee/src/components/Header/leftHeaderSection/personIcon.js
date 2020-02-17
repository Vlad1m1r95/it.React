import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
function PersonIcon() {
  return (
    <i className="Header-left-section">
      <FontAwesomeIcon className="Icon-solid-bigx2" icon={faUserCircle} />
    </i>
  )
}
export default PersonIcon