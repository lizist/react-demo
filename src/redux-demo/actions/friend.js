/*
 * @Author: your name
 * @Date: 2020-03-13 18:12:12
 * @LastEditTime: 2020-03-13 18:57:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\redux-demo\actions\friend.js
 */
import { store } from "../store";

export const ADD_LIST = "ADD_LIST";
export const DEL_ITEM = "DEL_ITEM";
export function addList(data) {
  const dispatch = store.dispatch;
  setTimeout(() => {
    dispatch({ type: ADD_LIST, data });
  }, 1000);// 异步更新
}
export function delItem(data) {
  const dispatch = store.dispatch;
  dispatch({ type: DEL_ITEM, data });
}
