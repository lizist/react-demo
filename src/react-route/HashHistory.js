/*
 * @Author: your name
 * @Date: 2020-03-19 17:47:11
 * @LastEditTime: 2020-03-19 18:54:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\react-route\HashHistory.js
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

class Router extends Component {
  static childContextTypes = {
    hash: PropTypes.string,
    query: PropTypes.object
  };
  getChildContext() {
    return {
      hash: this.state.hash,
      query: this.state.query
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      hash: this.handleHash().hash,
      query: this.handleHash().query
    };
  }
  getQuery(query) {
    let arry = query.split("&");
    let queryList = {};
    arry.forEach(item => {
      let arryItem = item.split("=");
      queryList[arryItem[0]] = arryItem[1];
    });
    return queryList;
  }
  handleHash() {
    let hash = window.location.hash.replace("#", "");
    let query;
    if (hash.indexOf("?") !== -1) {
      let hashArr = hash.slice(0, hash.indexOf("?"));
      query = this.getQuery(hash.slice(hash.indexOf("?") + 1));
      hash = hashArr;
    }
    return { hash, query };
  }
  render() {
    return <>{this.props.children}</>;
  }
  componentDidMount() {
    // 在组件挂载的时候定义监听hash变化的事件
    window.onhashchange = () => {
      this.setState({
        hash: this.handleHash().hash,
        query: this.handleHash().query
      });
      console.log(this.state.hash);
    };
  }
}
class Route extends Component {
  static contextTypes = {
    hash: PropTypes.string,
    query: PropTypes.object
  };
  render() {
    const { path, component } = this.props;
    const { hash, query } = this.context;

    return <>{hash === path && React.createElement(component, {query}, null)}</>; // React.createElement(第一个参数为react组件、第二个参数为给组件传的props，第三个参数为需要渲染的子组件)
  }
}

const AA = props => {
  return <div>{props.query.a}aa</div>;
};
const BB = () => <div>bb</div>;

function HashHistoryDemo() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div>header</div>
          <Route path="/aa" component={AA} />
          <Route path="/bb" component={BB} />
        </header>
      </Router>
    </div>
  );
}

export default HashHistoryDemo;
