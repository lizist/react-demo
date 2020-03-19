/*
 * @Author: your name
 * @Date: 2020-03-17 10:03:24
 * @LastEditTime: 2020-03-17 19:14:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\mobx-demo\App.js
 */
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Friend from './views/friend'
import Post from './views/post'
import Acrion from './views/action'
@inject('friend', 'post') // 注入响应式变量
@observer // 用装饰器把组件装饰成响应式组件
class App extends Component {
  render() {
    const { friend, post } = this.props
    return (
      <div>
        <div>
          {friend.list.length}
          {post.list.length}
          <Friend></Friend>
          <Post></Post>
          <Acrion />
        </div>
      </div>
    )
  }
}
export default App
