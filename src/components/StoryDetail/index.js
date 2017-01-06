import React from 'react'
import { connect } from 'react-redux'
import { api_addr } from '../../global/global'
import { Link } from 'react-router'
import { GetStoryDetail } from '../../actions/Story'
require('styles/StoryDetail.scss')

class StoryDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			detail: {},
			story_id: this.props.params.id,
			list_recommend: []
		}
	}

	componentWillReceiveProps(nextProps) {
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

//推荐加载
		fetch(api_addr + 'story/list_recommend',{
			method: 'post',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: "id=" + this.props.params.id
		}).then((res) => {
			if(res.ok){
				res.json().then((json) => {
					let data = []
					for(let i = 0;i < json.data.length; i ++){
						data.push(json.data[i])
						this.setState({
							list_recommend: data
						})
					}
				})
			}
		})  
	}

	render () {

		let rlist = []

		this.state.list_recommend.forEach(function(value,index){
			rlist.push(
				<Link to={`/storydetail/${value.id}`} className="sd-rlist-item" key={index}>
					<div className="sd-rlist-item-header">
						{value.title}
					</div>
					<div className="sd-rlist-item-content">
						{value.des}
					</div>
				</Link>
			)
		})

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

				<div className="sd-rlist">
					<div className="sd-rlist-header">
						别停，还有…
					</div>
					{rlist}
				</div>
			</div>
		)
	}
}

StoryDetail.defaultProps = {

}

module.exports = connect(state => state)(StoryDetail)