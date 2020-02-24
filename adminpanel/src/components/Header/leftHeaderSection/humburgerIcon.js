import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
function HumburgerIcon() {
  return (
    <i>
      <FontAwesomeIcon className="Icon-solid-big Align-center" icon={faHamburger} />
    </i>
  )
}
export default HumburgerIcon