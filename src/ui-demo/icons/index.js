import React, { Component } from 'react'
import propTypes from 'prop-types'
import '../../font-demo/iconfont.css'

class Icons extends Component {
  static propTypes = {
    name: propTypes.string
  }
  static defaultProps = {}
  render() {
    const { name, ...arg } = this.props
    return <span {...arg} className={`icon iconfont icon-${name}`}></span>
  }
}

export default Icons
