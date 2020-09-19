import React, { Component } from 'react';

class Item extends Component {
    render() { 
        return ( 
            <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
         );
    }

    handleClick() {
        this.props.deleteItem(this.props.index);
    }
}
 
export default Item;