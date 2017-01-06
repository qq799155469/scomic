import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { LoginAction } from '../../actions/Login'
require('styles/login.scss')

class Login extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	username: '',
	    	pwd: ''
	    }
	    this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}
	
	render () {

		const { dispatch } = this.props

		return (
			<div className="login-box">
				<div className="login-poster">
				</div>
				<div className="login-container">
					
					<h3 className="login-logo">SCOMIC.</h3>

					<div className="login-username">
						<input name="username" className="login-input" onChange={this.handleChange} value={this.state.username} type="text" placeholder="用户名" />
						<i className="fa fa-user login-icon"></i>
					</div>

					<div className="login-pwd">
						<input name="pwd" className="login-input" onChange={this.handleChange} type="password" placeholder="密码" value={this.state.pwd} />
						<i className="fa fa-lock login-icon"></i>
					</div>

					<div className="login-option">
						<div className="login-option-check">
							<input id="login-check" type="checkbox" />
							<label htmlFor="login-check">记住账号</label>
							<a>《免责声明》</a>
						</div>
						<button className="login-btn" onClick={() => dispatch(LoginAction(this.state.username,this.state.pwd))}>登陆</button>
					</div>

				</div>
			</div>
		)
	}

}

Login.defaultProps = {

}

module.exports = connect(state => state)(Login)