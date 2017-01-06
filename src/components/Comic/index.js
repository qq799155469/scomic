import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { api_addr } from '../../global/global'
require('styles/Comic.scss')

class Comic extends React.Component {

	constructor (props) {
		super()
		this.state = {
			datas: [],
			count: 0
		}
	}

	componentDidMount() {
		let self = this
		fetch(api_addr + 'comic/list',{ method: 'post' })
			.then((res) => {
				return res.json()
			}).then((json) => {
				let data = []
				for(let i in json.data){
					data.push(json.data[i])			
				}
				self.setState({
					datas: data
				})	
			})

		fetch(api_addr + 'comic/count',{ method: 'post' })
			.then((res) => {
				if(res.ok){
					res.json().then((json) =>{
						self.setState({
							count: json.data.count
						})
					})
				}
			})
	}

	goDetail(id) {
		let self = this
		fetch(api_addr + 'view/comic',{ 
			method: 'post',
			mode: "cors",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: 'id=' + id 
		}).then((res) => {
				if(res.ok){
					res.json().then((json) => {

					})
				}
			})
		// history.pushState(null,'/comicdetail/' + id)
		window.location.hash = '/comicdetail/' + id
	}

	addView(id) {
		
	}

	render () {

		let title = "漫评"

		let list = []

		this.state.datas.forEach((value,key) => {
			list.push(
				<li className="comic-item" key={key} ref={'item' + key}>
					<img className="comic-item-img" src={value.image}/>
					<p onClick={this.goDetail.bind(this,value.id)} className="comic-item-name">{value.title}</p>
					<p className="comic-item-like"><span>{value.like}</span>人喜欢</p>
				</li>
			)
		})

		return (
			<div className="comic-box">
				<div className="comic-header">
					<h3	className="comic-title">
						{title}
					</h3>
					<p className="comic-notice">
						看漫不评，要你何用
					</p>
					<Link className="comic-more" to={`/comiclist`}><i className="comic-more-icon"></i>更多</Link>
					<a className="comic-count">{this.state.count}个{title}</a>
				</div>
				<div className="comic-content">
					<ul className="comic-list">
						{list}
					</ul>
				</div>
			</div>
		)
	}

}

Comic.defaultProps = {

}

module.exports = connect(state => state)(Comic)