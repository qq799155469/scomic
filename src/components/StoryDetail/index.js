import React from 'react'
import { connect } from 'react-redux'
import { api_addr } from '../../global/global'
import { GetStoryDetail } from '../../actions/Story'
require('styles/StoryDetail.scss')

class StoryDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			detail: {},
			story_id: this.props.params.id
		}
	}

	componentDidMount() {
		let { dispatch } = this.props
		dispatch(GetStoryDetail(this.props.params.id))
//详情加载
		fetch(api_addr + 'story/detail',{ 
			method: 'post',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: 'id=' + this.props.params.id
		}).then((res) => {
			return res.json()
		}).then((json) => {
			this.setState({
				detail: json.data[0]
			})
		})
	}

	render () {

		return (
			<div className="sd-box">

				<div className="sd-header">
					<h3 className="sd-header-title">{this.state.detail.title}</h3>
					<div className="sd-header-info">
						<p className="sd-header-info-bottom">
							<span className="sd-header-info-author">作者：{this.state.detail.author}</span>
							<span className="sd-header-info-type">类型：{this.state.detail.type}</span>
						</p>
					</div>
				</div>

				<div className="sd-content">
					<div className="sd-content-text" dangerouslySetInnerHTML={{__html: this.state.detail.content}}></div>
				</div>
			</div>
		)
	}
}

StoryDetail.defaultProps = {

}

module.exports = connect(state => state)(StoryDetail)