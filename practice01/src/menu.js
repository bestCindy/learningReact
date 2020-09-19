import React, { Component, Fragment } from "react";
import Item from "./item";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: ["锅包肉", "土豆丝"]
        }
    }

    render() {
        return (
            // 在 React 中外层一定要有一个 div，但是有的时候不需要外层加 div
            // 这个时候可以用 Fragment 代替
            <Fragment>
                <div>
                    <label htmlFor="menu">菜单：</label>
                    <input id="menu" value={this.state.inputValue} onChange={this.onChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>添加</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                // 需要一个 key
                                return (
                                    <Item 
                                        key={index+item}
                                        content={item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }

    onChange(e) {
        // 改变 state 里面的数据要用 setstate
        this.setState({
            inputValue: e.target.value
        });
    }

    // 增加列表项
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        });
    }

    //删除列表项
    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        });
    }

}

export default Menu;