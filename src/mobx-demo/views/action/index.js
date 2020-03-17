/*
 * @Author: your name
 * @Date: 2020-03-17 14:00:08
 * @LastEditTime: 2020-03-17 19:12:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\mobx-demo\views\friend\index.js
 */
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
@inject("post")
@observer
class Friend extends Component {
  @observable title = "";
  @observable content = "";
  @observable friendId = "";

  render() {
    let { post } = this.props;
    return (
      <div>
        <div>
          <input
            value={this.title}
            placeholder="请输入标题"
            onChange={e => (this.title = e.target.value)}
          />
        </div>
        <div>
          <input
            value={this.content}
            placeholder="请输入内容"
            onChange={e => (this.content = e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            value={this.friendId}
            placeholder="请输入好友id"
            onChange={e => (this.friendId = parseInt(e.target.value))}
          />
        </div>
        <button
          onClick={() => {
            post.addPost({
              title: this.title,
              content: this.content,
              friendId: this.friendId
            });
          }}
        >
          添加
        </button>
      </div>
    );
  }
}
export default Friend;
