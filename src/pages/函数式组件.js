/*
 * @Author: your name
 * @Date: 2020-03-11 14:47:07
 * @LastEditTime: 2020-03-11 16:33:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\pages\函数式组件.js
 */

import React, { useState, useEffect } from "react";


const App = props => {
  let [time, setTime] = useState(0); //定义useState不要用if else来进行判断，useState定义要放在前面
  let [age, setAge] = useState(100);
  // userEffect是相当于class组件的 componentDidMount和componentDidUpdate钩子函数
  useEffect(()=>{
    console.log('hello')
    return()=>{
      console.log('status clear')// 对应class组件的componentWillUnMount 组件将被销毁
    }
  },[time])// 第二个参数是控制userEffect 在哪些数据发生改变的时候才去触发函数，相当于componentShouldUpdate
  return (
    <div>
      {time}
      {age}
      <button onClick={e => setTime(time + 1)}>add</button>
      <button onClick={e => setAge(age - 1)}>age</button>
    </div>
  );
};

export default App;
