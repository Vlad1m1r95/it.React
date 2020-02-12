import React from 'react';
import '../../sass/breadcrumbs/breadcrumbs.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

function BreadCrumbs() {
  return (
    <section id="BreadCrumbs" className="BreadCrumbs-grid">
      <ul className="BreadCrumbs">
        <li>
          <i className="Icon-breadCrumb">
            <FontAwesomeIcon icon={faHandPointRight} />
          </i>
          Команда проекта</li>
        <li className="selected">
          <i className="Icon-breadCrumbs">
            <FontAwesomeIcon icon={faHandPointRight} />
          </i>
          Добавление нового сотрудника
          </li>
      </ul>
    </section>
  )
}
export default BreadCrumbs
