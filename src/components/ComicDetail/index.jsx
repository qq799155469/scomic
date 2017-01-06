import React from 'react'
import { connect } from 'react-redux'
import { api_addr } from '../../global/global'
import { GetComicDetail } from '../../actions/Comic'
import ComicComment from '../ComicComment'
require('styles/ComicDetail.scss')

class ComicDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			detail: {},
			list: [],
			start: 0,
			limit: 10,
			showPublish: false,
			comic_id: this.props.params.id
		}
		this.toggleTopic = this.toggleTopic.bind(this)
	}

	componentDidMount() {
		let { dispatch } = this.props
		dispatch(GetComicDetail(this.props.params.id))
//详情加载
		fetch(api_addr + 'comic/detail',{ 
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
//漫评列表加载
		fetch(api_addr + 'comic_comment/comment_list',{ 
			method: 'post',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: 'limit=' + this.state.limit + '&start=' + this.state.start + '&comic_id=' + this.props.params.id
		}).then((res) => {
			return res.json()
		}).then((json) => {
			let data = []
			for(let i in json.data){
				data.push(json.data[i])			
			}
			this.setState({
				list: data
			})	
		})
	}

	toggleTopic() {
		this.setState({
			showPublish: !this.state.showPublish
		})
	}

	render () {

		let list = []

		let datas = this.state.list

		datas.forEach(function(value,index){
			list.push(
				<li className="cd-comment-item" key={index}>
					<div className="cd-comment-item-header">
						<img className="cd-comment-face" src={value.user_face}/>
						<span className="cd-comment-author">{value.author}</span>
						<span className="cd-comment-time">{value.create_time}</span>
						<span className="cd-comment-topic">来自主题：{value.topic}</span>
					</div>

					<p className="cd-comment-content">
						{value.content}
					</p>
					<div className="cd-comment-option">
						<a className="cd-comment-like">
							顶&nbsp; {value.star}
						</a>
					</div>
				</li>
			)
		})

		return (
			<div className="cd-box">

				{ this.state.showPublish && <ComicComment comicid={this.state.comic_id} /> }
				<div className="cd-header">
					
					<div className="cd-poster-box">
						<img className="cd-poster" src={this.state.detail.image} />
					</div>

					<div className="cd-intro">
						<h3 className="cd-intro-title">
							{this.state.detail.title}
						</h3>
						<p className="cd-intro-author">
							作者：<span>{this.state.detail.author || "未知"}</span>
						</p>
						<p className="cd-intro-type">
							类型：<span>{this.state.detail.type || "未知"}</span>
						</p>
						<p className="cd-intro-text" title={this.state.detail.des}>
							简介：{this.state.detail.des || "暂无简介"}
						</p>
					</div>
					<div className="cd-score">

						<p className="cd-score-year">
							年代：{this.state.detail.year || "未知"}
						</p>
						<p className="cd-score-place">
							国家/地区：<span>{this.state.detail.place || "未知"}</span>
						</p>
						<p className="cd-score-views">
							点击量：{this.state.detail.views_count || "106"}
						</p>

						<p className="cd-score-view">
							{this.state.detail.views_count} 人看过
						</p>
						<p className="cd-score-like">
							{this.state.detail.like} 人印象深刻
						</p>
						<p className="cd-score-grade">
							{this.state.detail.score} 分
						</p>
					</div>

				</div>

				<div className="cd-comment">
					<div className="cd-comment-header">
						<h3 className="cd-comment-title">漫评：</h3>
						<span className="cd-comment-publish" onClick={this.toggleTopic}>发表主题</span>
					</div>
					
					<ul className="cd-comment-list">
						{list}
					</ul>
				</div>
			</div>
		)
	}
}

ComicDetail.defaultProps = {

}

module.exports = connect(state => state)(ComicDetail)