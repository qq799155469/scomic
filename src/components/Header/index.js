import React from 'react'
require('styles/Header.scss')

class Header extends React.Component {
	
	render () {

		let navs_data = [
			"漫评","剧本","玩乐","细文"
		]

		let navs = []

		navs_data.forEach((value,index) => {
			navs.push(<li className="header-nav" ref={'nav' + index}>{value}</li>)
		})

		return (
			<div className="header-box">
				<div className="header-sign">
					<h1 className="header-logo">SIKO</h1>
					<ul className="header-navs">
						{ navs }
					</ul>
				</div>
			</div>
		)
	
	}

}

Header.defaultProps = {

}

export default Header