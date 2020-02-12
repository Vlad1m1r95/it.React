import React from 'react';
import HumburgerIcon from './humburgerIcon';
import PersonIcon from './personIcon';
function LeftHeaderSection() {
  return (
    <section id="LeftHeaderSection" className="Section-left-header">
      <HumburgerIcon />
      <PersonIcon />
    </section>
  )
}
export default LeftHeaderSection