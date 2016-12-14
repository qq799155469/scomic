import React from 'react'
require('styles/Comic.scss')

class Comic extends React.Component {

	constructor (props) {
		super()
		this.state = {
			datas: []
		}
	}

	componentDidMount() {
		let self = this
		fetch('http://211.149.195.231:3000/api/comic/list',{ methods: 'get' })
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
	}

	render () {

		let title = "漫评"

		let comic_count = '1255'

		let list = []

		let datas = [
			{title: '你的名字。',src: 'images/1.jpg',count: 51},
			{title: '未闻花名',src: 'images/2.jpg',count: 4845},
			{title: '你不在的街道',src: 'images/3.jpg',count: 15351},
			{title: '阴阳师',src: 'images/4.jpg',count: 41351},
			{title: '夏目友人帐',src: 'images/5.jpg',count: 51232},
			{title: 'Fate/Zero',src: 'images/6.jpg',count: 123},
			{title: '夏洛特',src: 'images/7.jpg',count: 153},
		]
		this.state.datas.forEach((value,key) => {
			list.push(
				<li className="comic-item" key={key} ref={'item' + key}>
					<img className="comic-item-img" src={value.image}/>
					<p className="comic-item-name">{value.title}</p>
				</li>
			)
		})

		return (
			<div className="comic-box">
				<div className="comic-header">
					<h3	className="comic-title">
						{title}
					</h3>
					<a className="comic-more">更多</a>
					<a className="comic-count">{comic_count}个{title}</a>
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

export default Comic