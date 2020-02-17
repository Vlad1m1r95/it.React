import React from 'react';
import ClientMessageIcon from './clientMessageIcon';
import TeamMessageIcon from './teamMessageIcon';
import OrderMessageIcon from './orderMessageIcon';
import './../../../sass/messageHeaderSection.sass'
function CenterHeaderSection() {
  return (
    <section id="HeaderCenterSection" className="Section-center-Header">
      <div id="infoStatusMessage" className="Info-status-message">
        <ClientMessageIcon />
        <TeamMessageIcon />
        <OrderMessageIcon />
      </div>
    </section>
  )
}
export default CenterHeaderSection