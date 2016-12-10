import React from 'react'
require('styles/Story.scss')

class Story extends React.Component {
	
	render () {

		let title = '细文'

		let count = 5261

		let list = []

		let datas = [
			{title: '漫长的中场休息',link: '',id: 5},
			{title: '读在大好时光',link: '',id: 5},
			{title: '愿所有等待终不被辜负',link: '',id: 5},
			{title: '生活的哲学',link: '',id: 5},
			{title: '人人都有妄想症',link: '',id: 5},
			{title: '等你，在下一个路口',link: '',id: 5},
			{title: '爱因斯坦',link: '',id: 5},
			{title: '命运轮转之日',link: '',id: 5},
			{title: '执笔泼墨，只为那一世的眷恋',link: '',id: 5},
			{title: '伍迪~艾伦谈话录',link: '',id: 5},
			{title: '冬夜',link: '',id: 5},
			{title: '生活的哲学',link: '',id: 5},
			{title: '绝世唐门',link: '',id: 5},
			{title: '完美世界',link: '',id: 5},
			{title: '武动乾坤',link: '',id: 5},
			{title: '以梦为马',link: '',id: 5},
			{title: '秋深处，道声珍重',link: '',id: 5},
			{title: '……',link: '',id: 5}
		]

		datas.forEach((value,index) => {
			list.push(
				<li className="story-item">
					<a className="story-link">{value.title}</a>
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

export default Story