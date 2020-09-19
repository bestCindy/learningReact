import React, { Component, Fragment } from "react";

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
                    <input value={this.state.inputValue} onChange={this.onChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>添加</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                // 需要一个 key
                                return <li key={index + item}>{item}</li>
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

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        });
    }
}

export default Menu;