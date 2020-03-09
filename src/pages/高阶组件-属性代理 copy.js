/*
 * @Author: your name
 * @Date: 2020-03-09 17:56:49
 * @LastEditTime: 2020-03-09 18:15:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\pages\高阶组件-全局数据store.js
 */
import React, { Component } from "react";
// 属性代理用于预先 将业务组件，进行数据的封装，便于我们获取数据
// 反向继承
const connect = key => Com => {
  class ConnectComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        [key]: store[key]
      };
    }
    render() {
      return <Com {...this.state}></Com>;
    }
    componentDidMount() {
      let that = this;
      window.store = new Proxy(store, {
        get: function(target, key, receiver) {
          return Reflect.get(target, key, receiver);
        },
        set: function(target, key, value, receiver) {
          that.setState({
            [key]: value
          });
          return Reflect.set(target, key, value, receiver);
        }
      });
    }
  }
  return ConnectComponent;
};

let store = {
  name: "lizi",
  age: 28
};
@connect("age")
class User extends Component {
  render() {
    return <div>{this.props.age}</div>;
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <User></User>
      </div>
    );
  }
}
export default App;
