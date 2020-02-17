import React from 'react'
import LeftHeaderSection from './leftHeaderSection/leftSection'
import CenterHeaderSection from './centerHeaderSection/centerHeaderSection'
import RightHeaderSection from './rightHeaderSection/rightHeaderSection'

function Header() {
	return (
		<header className='BlueHeader Header'>
			<LeftHeaderSection />
			<CenterHeaderSection />
			<RightHeaderSection />
		</header>
	)
}
export default Header
