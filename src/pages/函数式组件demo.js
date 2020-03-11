/*
 * @Author: your name
 * @Date: 2020-03-11 14:47:07
 * @LastEditTime: 2020-03-11 18:35:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\pages\函数式组件.js
 */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Action = props => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={e => {
          props.onAdd(value);
          setValue("");
        }}
      >
        add
      </button>
    </div>
  );
};
const List = props => {
  return (
    <div>
      {props.data.map((item, index) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button
            onClick={e => {
              props.onDel(index);
            }}
          >
            del
          </button>
        </div>
      ))}
    </div>
  );
};

const App = props => {
  let [data, setData] = useState([
    { name: "react", id: 0 },
    { name: "vue", id: 1 }
  ]);
  return (
    <div>
      <Action
        onAdd={name => {
          data.push({ name, id: data.length });
          setData([...data]); // 这里要结构因为data.push只是改变了data的值，没有改变data的内存地址，js判断data是没有改变的，解构是为了改变data在内存地址的指向，触发钩子函数
        }}
      ></Action>
      <List
        data={data}
        onDel={index => {
          data.splice(index, 1);
          setData([...data]);
        }}
      ></List>
    </div>
  );
};

// 自定义hooks
const useTitleHook = (title, setLoading) => {
  useEffect(() => {
    document.title = title;
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      document.title = "close";
    };
  });
};
const Loading = () => {
  return <div>loading</div>;
};
let node = "";
const useLoadingDemo = isShow => {
  useEffect(() => {
    if (isShow) {
      node = document.createElement("div");
      document.body.appendChild(node);
      ReactDOM.render(<Loading />, node);
    } else {
      if (node === "") return;
      ReactDOM.unmountComponentAtNode(node);
      document.body.removeChild(node);
    }
  });
};

const App1 = () => {
  let [title, setTitle] = useState("");
  let [loading, setLoading] = useState(true);

  useTitleHook(title, setLoading); // 通过useEffect hook来绑定数据的更新，把模块独立出来
  useLoadingDemo(loading);

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)}></input>
    </div>
  );
};

const useFriendStatus = value => {
  const [isOnline, setIsOnline] = useState(null);
  const handleStatus = status => {
    setIsOnline(status);
  };
  useEffect(() => {
    if (value === "1000") {
      handleStatus("isOnline");
    } else {
      handleStatus("noOnline");
    }
    document.title = "ison";
    console.log("ison");
    return () => {
      document.title = "close";
      console.log("close");
      handleStatus("loading");
    };
  });
  return isOnline;
};

const App2 = () => {
  let [value, setValue] = useState("");
  let [set, setSet] = useState(true);
  let isOnline = useFriendStatus(value);
  return (
    <div>
      {isOnline}
      <input value={value} onChange={e => setValue(e.target.value)}></input>
    </div>
  );
};

export default App2;
