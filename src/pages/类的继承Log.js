import React from 'react'
import ReactDom from 'react-dom'

class LogComponent extends React.Component {
  componentWillUnmount() {
    console.log('app Unmount') // 组件销毁的时候输出日志
  }
}

class App extends LogComponent {
  render() {
    return <div>app</div>
  }
}
export default App
