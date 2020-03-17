/*
 * @Author: your name
 * @Date: 2020-03-17 11:13:25
 * @LastEditTime: 2020-03-17 19:08:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\mobx-demo\store\post.js
 */
import { observable, action } from "mobx";
let idKey = 4;
class Post {
  @observable list = [
    {
      title: "hello,lizi",
      content: "hello lizi content1",
      id: 1,
      friendId: 1
    },
    {
      title: "hello,lizi2",
      content: "hello lizi content2",
      id: 2,
      friendId: 1
    },
    {
      title: "hello,lizi3",
      content: "hello lizi content3",
      id: 3,
      friendId: 2
    }
  ];
  @action
  addPost(data) {
    this.list.push(Object.assign(data, { id: idKey++ }));
  }
  @action
  delItem(id) {
    this.list = this.list.filter(item => {
      return item.id !== id;
    });
  }
}
const post = new Post();

export default post;
