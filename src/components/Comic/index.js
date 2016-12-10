import React from 'react'
require('styles/Comic.scss')

class Comic extends React.Component {

	constructor () {
		super()
	}

	getInitialState() {
	    return {
	          
	    }
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

		datas.forEach((value,index) => {
			list.push(
				<li className="comic-item" ref={'item' + index}>
					<img className="comic-item-img" src={value.src}/>
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