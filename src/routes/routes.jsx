import React from 'react'
import { Router, Route,IndexRoute,browserHistory,hashHistory,Redirect } from 'react-router'
import App from 'components/Main'
import Login from 'components/Login'
import ComicDetail from 'components/ComicDetail'
import StoryDetail from 'components/StoryDetail'
import ScriptEdit from 'components/ScriptEdit'
import ComicList from 'components/ComicList'
import Header from 'components/Header'

const Container = (props) => {
	return (
		<div>
			<Header/>
			{props.children}
		</div>
	)
}
//开发环境使用hash模式,线上环境使用browser模式
// const history = process.env.NODE_ENV !== 'production' ? hashHistory : browserHistory;
const history = hashHistory;
const routes = (
	<Router history={history}>
		<Route path="/" component={Container}>
			<IndexRoute component={App} />
			<Route path="login" component={Login} />
			<Route name="comicdetail" path="comicdetail/:id" component={ComicDetail} />
			<Route name="storydetail" path="storydetail/:id" component={StoryDetail} />
			<Route path="comiclist" component={ComicList} />
			<Route path="ScriptEdit" component={ScriptEdit} />
			<Redirect from='*' to='/' />
		</Route>
	</Router>
)

export default routes