import React from 'react'
import '../../../sass/breadcrumbs/breadcrumbs.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import keys from './../../../_helpers/generator/generateKey'

function BreadCrumbs(props) {
	const {
		breadCrumbs: { links },
	} = props

	return (
		<section id='BreadCrumbs'>
			<ul className='BreadCrumbs'>
				{links.map((breadСrumb, index) => (
					<li key={keys[index]}>
						<i className='Icon-breadCrumb'>
							<FontAwesomeIcon icon={faHandPointRight} />
						</i>
						{breadСrumb}
					</li>
				))}
			</ul>
		</section>
	)
}
export default BreadCrumbs
