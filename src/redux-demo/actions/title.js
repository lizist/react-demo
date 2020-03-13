/*
 * @Author: your name
 * @Date: 2020-03-13 17:40:50
 * @LastEditTime: 2020-03-13 17:53:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\redux-demo\actions\title.js
 */
import { store } from "../store";

export const UPDATE_TITLE = "UPDATE_TITLE";

export function updateTitle(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_TITLE, data });
}
