/*
 * @Author: your name
 * @Date: 2020-03-13 17:11:50
 * @LastEditTime: 2020-03-13 17:33:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\redux-demo\index.js
 */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";

render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
