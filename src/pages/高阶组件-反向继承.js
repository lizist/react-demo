/*
 * @Author: your name
 * @Date: 2020-03-09 17:56:49
 * @LastEditTime: 2020-03-09 18:34:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\pages\高阶组件-全局数据store.js
 */
import React, { Component } from "react";
// 反向继承 交互的封装
const Loading = Com => {
  class LoadingComponent extends Com {
    constructor(props) {
      super(props);
      this.state = {
        isShowLoading: false
      };
    }
    showLoading() {
      this.setState({
        isShowLoading: true
      });
    }
    hideLoading() {
      this.setState({
        isShowLoading: false
      });
    }
    // render() {
    //   return (
    //     <div>
    //       {super.render()} {this.state.isShowLoading ? "loading" : ""}
    //     </div>
    //   );
    // }
  }
  return LoadingComponent;
};

@Loading
class User extends Component {
  render() {
    return <div>User</div>;
  }
  componentDidMount() {
    this.showLoading();
    // http请求
    this.hideLoading();
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
