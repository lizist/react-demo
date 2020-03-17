/*
 * @Author: your name
 * @Date: 2020-03-17 11:13:18
 * @LastEditTime: 2020-03-17 15:44:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\mobx-demo\store\friend.js
 */
import { observable, computed } from "mobx";
import Post from "./post";

class Friend {
  @observable list = [
    { name: "lizi", id: 1 },
    { name: "vue", id: 2 },
    { name: "react", id: 3 }
  ];
  @observable activeId = 1;
  @computed
  get friendPost() {
    return Post.list.filter(item => item.friendId === this.activeId);
  }
}
const friend = new Friend();
export default friend;
