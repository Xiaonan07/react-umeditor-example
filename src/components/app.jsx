import React from 'react';
import {Router,Route,RouteHistory,Link} from './base/react-router';
import FormIndex from './form/index';
import FormBase from './form/base';
import SampleIndex from './sample/index';
import SampleBase from './sample/base';
import SampleIcon from './sample/icon';
import SampleUpload from './sample/upload';

class RightNavbar extends React.Component {
	render () {
		return (
			<div className="left-navbar">
				<ul className="navbar">
					<li className="nav-item"> 
						<div className="item-title">
							基础示例
						</div>
						<ul className="sub-navbar">
							<li className="nav-item">
								<Link to="/sample/base" anchor={true}>最简单示例</Link>
							</li>
							<li className="nav-item">
								<Link to="/sample/icon" anchor={true}>自定义功能</Link>
							</li>
							<li className="nav-item">
								<Link to="/sample/upload" anchor={true}>文件上传</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item"> 
						<div className="item-title">表单示例</div>
						<ul className="sub-navbar">
							<li className="nav-item">
								<Link to="/form/base" anchor={true}>简单的表单</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		)
	}
}

class UmeditorApp extends React.Component {
	render(){
		return (<div className="ueditor-app">
			<RightNavbar />	
			<div className="right-content">
				{this.props.children}
			</div>
		</div>)
	}
}

class RouterApp extends React.Component {
	render(){
		return (
			<Router defaultRoute="/sample/base" path="/" component={UmeditorApp}>
				<Route path="sample" component={SampleIndex}>
					<Route path="base" component={SampleBase}></Route>
					<Route path="icon" component={SampleIcon}></Route>
					<Route path="upload" component={SampleUpload}></Route>
				</Route>
				<Route path="form" component={FormIndex}>
					<Route path="base" component={FormBase}></Route>
				</Route>
			</Router>
		)
	}
}
export default UmeditorApp;