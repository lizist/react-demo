/*
 * @Author: your name
 * @Date: 2020-03-17 10:03:24
 * @LastEditTime: 2020-03-17 11:12:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\mobx-demo\index.js
 */
import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import store from './store'

import App from "./App";

render(
  <Provider {...store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
