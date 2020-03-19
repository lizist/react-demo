/*
 * @Author: your name
 * @Date: 2020-03-17 14:00:08
 * @LastEditTime: 2020-03-17 18:22:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\mobx-demo\views\friend\index.js
 */
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import '../../assets/friend.scss'
@observer
@inject('friend')
class Friend extends Component {
  render() {
    let { friend } = this.props
    return (
      <div>
        {friend.list.map(item => {
          return (
            <span
              className="friend-name"
              key={item.id}
              onClick={e => {
                console.log(item.id)
                friend.activeId = item.id
              }}
            >
              {item.name}
            </span>
          )
        })}
      </div>
    )
  }
}
export default Friend
