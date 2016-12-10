import React from 'react'
require('styles/Script.scss')

class Script extends React.Component {
	
	render () {

		let title = '剧本'

		let count = 5261

		let list = []

		let datas = [
			{title: '满山也',sort: '悬疑',views: 15},
			{title: '头脑风暴',sort: '极客',views: 1123},
			{title: '大好时光',sort: '剧情',views: 8},
			{title: '极盗者',sort: '冒险',views: 4151},
			{title: '良辰旧事',sort: '剧情',views: 321},
			{title: '一条街怎么繁荣',sort: '记事',views: 41},
			{title: '就事论事',sort: '剧情',views: 9102},
			{title: '樱花降',sort: '爱情',views: 5121},
			{title: '月华似练',sort: '古风',views: 2055}
		]

		datas.forEach((value,index) => {
			list.push(
				<li className="script-item">
					<img className="script-item-img" src={value.src}/>
					<div className="script-item-content">
						<p className="script-item-title">{value.title}</p>
						<p className="script-item-info">
							<span className="script-item-sort">{value.sort}</span>
							<span className="script-item-views">{value.views}观看</span>
						</p>
					</div>
				</li>
			)
		})

		return (
			<div className="script-box">
				<div className="script-header">
					<h3	className="script-title">
						{title}
					</h3>
					<a className="script-more">更多</a>
					<a className="script-count">{count}个{title}</a>
				</div>
				<div className="script-content">
					<ul className="script-list">
						{list}
					</ul>
					<div className="script-wall">
						<div className="script-wall-header">
							<strong className="script-wall-title">创意墙</strong>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

Script.defaultProps = {

}

export default Script