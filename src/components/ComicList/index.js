import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { api_addr } from '../../global/global'
require('styles/ComicList.scss')

class ComicList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			detail: {},
			list: [],
			start: 0,
			limit: 10,
			datas: []
		}
	}

	componentDidMount() {
		let self = this
		fetch(api_addr + 'comic/list',{
			method: "post",
			mode: "cors",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: ''
		}).then((res) => {
			if(res.ok){
				res.json().then((json) => {
					let data = []
					for(let i in json.data){
						data.push(json.data[i])
					}
					self.setState({
						datas: data
					})	
				})
			}
		})
	}

	render () {

		let list = []

		let datas = this.state.datas

		datas.forEach(function(value,index){
			list.push(
				<li className="cl-list-item" key={index}>
					<div className="cl-list-item-left">
						<img className="cl-list-item-face" src={value.image}/>
					</div>
					<div className="cl-list-item-right">
						<Link to={`/comicdetail/${value.id}`}>
							<a className="cl-list-item-name">
								{value.title}
							</a>
						</Link>
						<a className="cl-list-item-author">
							作者：{value.author}
						</a>
						<a className="cl-list-item-type">
							类型：{value.type}
						</a>
						<a className="cl-list-item-type">
							评分：<span>{value.score}</span>
						</a>
					</div>
				</li>
			)
		})

		return (
			<div className="cl-box">

				<div className="cl-header">

				</div>

				<div className="cl-list">
					<div className="cl-list-header">
						<h3 className="cl-list-header-title">漫评列表：</h3>
					</div>
					
					<ul className="cl-list-box">
						{list}
					</ul>
				</div>
			</div>
		)
	}
}

ComicList.defaultProps = {

}

module.exports = connect(state => state)(ComicList)