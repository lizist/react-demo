/*
 * @Author: your name
 * @Date: 2020-03-13 17:39:35
 * @LastEditTime: 2020-03-13 17:53:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\redux-demo\reducers\title.js
 */

import { UPDATE_TITLE } from "../actions/title";

const initialState = "请点击";

export default (state = initialState, action = {}) => {
  const { type, data } = action;
  switch (type) {
    case UPDATE_TITLE:
      return data;
    default:
      return state;
  }
};
