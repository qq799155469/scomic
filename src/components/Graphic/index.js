import React from 'react'
require('styles/Graphic.scss')

class Graphic extends React.Component {
	
	render () {

		let title = '图解'

		let count = 82

		let list = []

		let datas = [
			{title: '湄公河行动',des: '电影《湄公河行动》改编自2011年发生在湄公河金三角流域的中国商船遇袭案，当时13名中国船员全部遇难，船上却发现90万粒毒品。为了还遇难同胞一个清白，中国公安集结警队精英组成了此次案件的特别行动小组，企图揪出案件的幕后黑手。然而过程并非他们想得那么简单，事件的进展扑朔迷离，通往真相的道路更是险象环生。身手不凡的对手受雇与谁？普通商船上为何有大量毒品？一桩悲剧背后所隐藏了什么惊天阴谋？层层谜团等待被解开',src: '',id: 12,page: 73,views: 597},
			{title: '圆梦巨人',des: '孤儿院里一个名叫苏菲（鲁比·巴恩希尔 Ruby Barnhill 饰）的小女孩一天夜里睡不着觉，她在“巫师出没的时刻”看到一个和楼房一样高大的巨人（马克·里朗斯 Mark Rylance 饰）沿街走过来。巨人发现苏菲看见了他，于是便把她拎回了巨人国',src: '',id: 12,page: 73,views: 597},
			{title: '2012',des: '太阳活动异常，地球内部的能量平衡系统面临崩溃，玛雅人的预言即将实现，人类将遭遇灭顶之灾。各国政府已经联手开始秘密制造方舟，希望能躲过这一浩劫。以写科幻小说谋生的杰克逊（约翰·库萨克 John Cusack 饰）在带孩子们到黄石公园渡周末时发生一连串怪事，而且遇到了神经兮兮的查理（伍迪·哈里森 Woody Harrelson 饰)，查理告诉他世界末日即将来临。伴随着火山爆发，强烈地震以及海啸，杰克逊带领自己的家人驾驶一架临时租来的飞机冲出被死神阴霾瞬间笼罩的城市上空，开始寻找查理口中各国政府正在联合秘密制造的方舟。在生死攸关的时刻，一些伟大的鬼魂将脱颖而出，而一些自私的心灵将无所遁形，当千千万万个生灵通过各种方法来到方舟制造基地之时，方舟有限的容纳数量引发前所未有的恐慌。最终，仅存的人们用互爱和对生命的尊重渡过了难关。',src: '',id: 12,page: 73,views: 597}
		]

		datas.forEach((value,key) => {
			list.push(
				<li className="graphic-item" key={key}>
					<h5 className="graphic-item-title">{value.title}</h5>
					<div className="graphic-item-content">
						<img className="graphic-item-img" src={value.src}/>
						<div className="graphic-item-master"></div>
						<p className="graphic-item-des">
							<a>{value.des}</a>
						</p>
					</div>
				</li>
			)
		})

		return (
			<div className="graphic-box">
				<div className="graphic-header">
					<h3	className="graphic-title">
						{title}
					</h3>
					<p className="graphic-notice">
						看电影的精华，解电影的细节
					</p>
					<a className="graphic-more">更多</a>
					<a className="graphic-count">{count}个{title}</a>
				</div>
				<div className="graphic-content">
					<ul className="graphic-list">
						{list}
					</ul>
				</div>
			</div>
		)
	}

}

Graphic.defaultProps = {

}

export default Graphic