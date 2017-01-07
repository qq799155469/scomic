import React from 'react'
import { api_addr } from '../../global/global'
import { Link } from 'react-router'
require('styles/Story.scss')

class Story extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	datas: []
	    }
	}

	componentDidMount() {
		let self = this
		fetch(api_addr + 'story/list_simple',{
			method: 'post'
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

		let title = '微文'

		let count = 5261

		let list = []

		let datas = [
			
		]

		this.state.datas.forEach((value,key) => {
			list.push(
				<li className="story-item" key={key}>
					<Link to={`/storydetail/${value.id}`} className="story-link"><p className="comic-item-name">{value.title}</p></Link>
				</li>
			)
		})

		return (
			<div className="story-box">
				<div className="story-header">
					<h3	className="story-title">
						{title}
					</h3>
					<p className="story-notice">
						故事以细致取胜
					</p>
					<a className="story-more">更多</a>
					<a className="story-count">{count}个{title}</a>
				</div>
				<div className="story-content">
					<ul className="story-list">
						{list}
					</ul>
				</div>
			</div>
		)
	}

}

Story.defaultProps = {

}

module.exports = Story