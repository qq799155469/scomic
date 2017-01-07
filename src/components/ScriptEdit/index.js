import React from 'react'
import { connect } from 'react-redux'
import { api_addr } from '../../global/global'
import { Link } from 'react-router'
require('wangeditor')
require('styles/ScriptEdit.scss')

var Editor = React.createClass({
    // 编辑器样式
    styletext: {
        width: '100%',
        height: '400px'
    },
    styletitle: {
    	width: '100%',
    	height: '40px',
    	background: 'red'
    },
    styletitleinput: {
    	width: '100%',
    	height: '100%',
    	border: 'none',
    	padding: '10px 15px',
    	boxSizing: 'border-box',
    	outline: 'none'
    },
    render: function() {
        return (
            <div>
            	<div style={this.styletitle}>
            		<input style={this.styletitleinput} placeholder="标题"/>
            	</div>
                <div id={this.props.id} style={this.styletext} contentEditable="true"></div>
                <button onClick={this.getContent}>get content</button>
            </div>
        );
    },
    componentDidMount: function () {
        var id = this.props.id;
        this.editor = new window.wangEditor(id);
        this.editor.config.uploadImgUrl = '/upload';
        this.editor.create();

        // 初始化内容
        this.editor.$txt.html(this.props.content);
    },
    // 获取内容
    getContent: function () {
        var content = this.editor.$txt.html();
        console.log(content);
    }
});

class ScriptEdit extends React.Component {
  	constructor(props) {
	    super(props);
	}

 	render() {
    	return (
        	<Editor id="editor1" />
    	);
  	}
}

ScriptEdit.defaultProps = {

}

module.exports = connect(state => state)(ScriptEdit)