/*
 * @Author: your name
 * @Date: 2020-03-09 16:44:34
 * @LastEditTime: 2020-03-19 17:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./react-route/HashHistory";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App name="lizi" />, document.getElementById("root"));
window.ReactDOM = ReactDOM;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
