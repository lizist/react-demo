/*
 * @Author: your name
 * @Date: 2020-03-13 17:38:46
 * @LastEditTime: 2020-03-13 17:57:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\redux-demo\reducers\index.js
 */
import { combineReducers } from "redux";
import title from "./title";
import friend from "./friend";

export default combineReducers({
  title,
  friend
});
