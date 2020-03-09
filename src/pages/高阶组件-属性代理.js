/*
 * @Author: your name
 * @Date: 2020-03-09 17:56:49
 * @LastEditTime: 2020-03-09 17:57:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\pages\高阶组件-全局数据store.js
 */
import React, { Component } from "react";

class Provider extends Component {
  getChildContext() {
    return this.props.data;
  }
  static childContextTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  };
  render() {
    return this.props.children;
  }
}

class BaseUser extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
class BasePost extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
const connect = Com => {
  class ConnectComponent extends Component {
    static contextTypes = Provider.childContextTypes;
    displayName = Com.displayName;
    render() {
      return <Com {...this.contextTypes}></Com>;
    }
  }
  return ConnectComponent;
};
const User = connect(BaseUser);
const Post = connect(BasePost);
const store = {
  name: "lizi",
  age: 28
};
class App extends Component {
  render() {
    return (
      <Provider data={store}>
        <div>
          <User></User>
          <Post></Post>
        </div>
      </Provider>
    );
  }
}
export default App;
