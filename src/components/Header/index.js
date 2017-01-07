import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { OnlineAction } from '../../actions/Online'
import { LoginoutAction } from '../../actions/Loginout'
require('styles/Header.scss')

class Header extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	
	    }
	}

	componentWillMount() {
		const { dispatch, actions } = this.props
		dispatch(OnlineAction(true))
	}

	render () {

		let { dispatch } = this.props

		let navs_data = [
			"漫评","脑洞","微文","图解"
		]

		let header_info = "在你的闲暇时光中加入一点小创意。"

		let navs = []

		navs_data.forEach((value,key) => {
			navs.push(<li className="header-nav" key={key} ref={'nav' + key}>{value}</li>)
		})

		let options = (status) => {
			if(status){
				return (
					<div className="header-options">
						<Link to="/login" className="header-login">{this.props.online.nic_name}</Link>
						<a className="header-login" onClick={() => dispatch(LoginoutAction())}>退出</a>
					</div> 			
		 		)
			}else{
				return (
					<div className="header-options">
						<Link to="/login" className="header-login">登录</Link>
						<a className="header-reg">注册</a>
					</div>
				)	
			}
		}

		return (

			<div className="header-box">
				<div className="header-sign">
					<Link className="header-logo" to={`/`}>
						<span className="header-logo-s">S</span>
						<span className="header-logo-c">C</span>
						<span className="header-logo-o">O</span>
						<span className="header-logo-m">M</span>
						<span className="header-logo-i">I</span>
						<span className="header-logo-c2">C</span>
					</Link>
					<ul className="header-navs">
						{ navs }
					</ul>
				</div>
				<h3 className="header-info">
					{ header_info }
				</h3>
				<div>
					{ options(this.props.online.is_online) }
				</div>
				
			</div>
		)
	
	}

}

Header.defaultProps = {

}

module.exports = connect(state => state)(Header)