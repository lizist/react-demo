import React, { Component } from 'react'
import PropTypes from 'prop-types'

//常规方式
// class GrandSon extends Component {
//   render() {
//     return (
//       <div>
//         <input value={this.props.name} onChange={e => this.props.onUpdateName(e.target.value)} />
//       </div>
//     )
//   }
// }

// class Son extends Component {
//   render() {
//     return (
//       <div>
//         <GrandSon name={this.props.name} onUpdateName={this.props.onUpdateName}></GrandSon>
//       </div>
//     )
//   }
// }

// class Parent extends Component {
//   constructor() {
//     super(...arguments)
//     this.state = {
//       name: 'lizi'
//     }
//   }
//   onUpdateName = name => {
//     this.setState({ name })
//   }
//   render() {
//     return (
//       <div>
//         <Son name={this.state.name} onUpdateName={name => this.onUpdateName(name)}></Son>
//       </div>
//     )
//   }
// }

//上下文
/**
 
在父组件定义上下文
static childContextTypes = {
    name: PropTypes.string,
    onUpdateName: PropTypes.func
  }
设置上下文内的属性值
getChildContext() {
    return {
      name: this.state.name,
      onUpdateName: this.onUpdateName
    }
}
在子组件定义静态方法获取 contextTypes
static contextTypes = {
    name: PropTypes.string,
    onUpdateName: PropTypes.func
  }
取值 {this.context.name}
 */

class GrandSon extends Component {
  static contextTypes = {
    name: PropTypes.string,
    onUpdateName: PropTypes.func
  }
  render() {
    return (
      <div>
        <input value={this.context.name} onChange={e => this.context.onUpdateName(e.target.value)} />
      </div>
    )
  }
}

class Son extends Component {
  render() {
    return (
      <div>
        <GrandSon></GrandSon>
      </div>
    )
  }
}

class Parent extends Component {
  state = {
    name: 'lizi'
  }
  static childContextTypes = {
    name: PropTypes.string,
    onUpdateName: PropTypes.func
  }
  getChildContext() {
    return {
      name: this.state.name,
      onUpdateName: this.onUpdateName
    }
  }
  onUpdateName = name => {
    this.setState({ name })
  }
  render() {
    return (
      <div>
        <Son></Son>
      </div>
    )
  }
}

export default Parent
