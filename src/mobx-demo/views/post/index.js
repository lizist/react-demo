/*
 * @Author: your name
 * @Date: 2020-03-17 14:00:08
 * @LastEditTime: 2020-03-17 19:11:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\mobx-demo\views\friend\index.js
 */
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("post")
@observer
class Post extends Component {
  render() {
    const { friendPost, post } = this.props;
    return (
      <div>
        {friendPost.map(item => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.content}</p>
              <button
                onClick={() => {
                  post.delItem(item.id);
                }}
              >
                del
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Post;
