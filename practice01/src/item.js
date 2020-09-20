import React, { Component } from 'react';

class Item extends Component {
    content(props) {
    }

    //组件第一次存在于 dom 中，函数是不会被执行
    //如果已存在 dom 中，函数才会被执行
    componentWillReceiveProps() {
        console.log("child -- componentWillReceiveProps");
    }

    componentWillUnmounting() {
        console.log("child -- componentWillUnmounting");
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        };
        return false;
    }

    render() {
        console.log("child render");
        return ( 
            <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
         );
    }

    handleClick() {
        this.props.deleteItem(this.props.index);
    }
}
 
export default Item;