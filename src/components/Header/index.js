import React from 'react'
require('styles/Header.scss')

class Header extends React.Component {
	
	render () {

		let navs_data = [
			"漫评","剧本","细文","图解"
		]

		let header_info = "在你的闲暇时光中加入一点小创意。"

		let navs = []

		navs_data.forEach((value,key) => {
			navs.push(<li className="header-nav" ref={'nav' + key}>{value}</li>)
		})

		return (
			<div className="header-box">
				<div className="header-sign">
					<h1 className="header-logo">SIKO</h1>
					<ul className="header-navs">
						{ navs }
					</ul>
				</div>
				<h3 className="header-info">
					{ header_info }
				</h3>
				<div className="header-options">
					<a className="header-login">登录</a>
					<a className="header-reg">注册</a>
				</div>
			</div>
		)
	
	}

}

Header.defaultProps = {

}

export default Header