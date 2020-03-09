/*
 * @Author: your name
 * @Date: 2020-03-09 17:58:21
 * @LastEditTime: 2020-03-09 17:58:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\pages\高阶组件-Provider渲染属性.js
 */
import React, { Component } from "react";

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "provider-name"
    };
  }
  render() {
    return this.props.render(this.state.name);
  }
}

class User extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
class App extends Component {
  render() {
    return <Provider render={name => <User name={name}></User>}></Provider>;
  }
}
export default App;
