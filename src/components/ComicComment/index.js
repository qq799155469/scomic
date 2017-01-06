import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import fetch from 'isomorphic-fetch'
import { api_addr } from '../../global/global'
require('styles/ComicComment.scss')

class ComicComment extends React.Component {

	constructor (props) {
		super()
		this.state = {
			face: sessionStorage.getItem('face'),
			name: sessionStorage.getItem('name')
		}
		this.toSubmitTopic = this.toSubmitTopic.bind(this)
	}

	toSubmitTopic() {
		let self = this
		fetch( api_addr + 'comic_comment/topic',{
			method: "post",
			mode: "cors",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: "comic_id=" + this.props.comicid + "&content=" + this.refs.content.value + "&user_id=" + sessionStorage.getItem('id') + "&create_time=" + new Date().toLocaleString()
		}).then((res) => {
			if(res.ok){
				res.json().then((json) => {

				})
			}
		})
	}

	render () {

		return (
			<div className="ComicComment-box">
				<i className="">×</i>
				<div className="ComicComment-header">
					<div className="ComicComment-face">
						<img className="ComicComment-face-img" src={this.state.face} />
					</div>
					<div className="ComicComment-info">
						<p className="ComicComment-name">
							{this.state.name}
						</p>
						<p className="ComicComment-intro">

						</p>
					</div>
				</div>
				<div className="ComicComment-text">
					<textarea className="ComicComment-textarea" ref="content">

					</textarea>
					<div className="ComicComment-option">
						<button className="ComicComment-submit" onClick={this.toSubmitTopic}>提交</button>
					</div>
				</div>
			</div>
		)
	}

}

ComicComment.defaultProps = {

}

module.exports = connect(state => state)(ComicComment)