/*
 * @Author: your name
 * @Date: 2020-03-13 17:33:38
 * @LastEditTime: 2020-03-13 17:45:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\redux-demo\store\index.js
 */
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";

const middlewares = [];

// if (process.env.NODE_ENV === "development") {
//   const { logger } = require("redux-logger");
//   middlewares.push(logger);
// }

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);
