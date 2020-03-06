import React, { Component } from 'react'
import propTypes from 'prop-types'
import './index.scss'
import Icon from '../icons'

class Button extends Component {
  static propTypes = {
    icon: propTypes.string,
    type: propTypes.string
  }
  static defaultProps = {
    icon: 'aixin',
    type: 'primary'
  }
  render() {
    const { icon, children, type } = this.props
    return (
      <button className={`ant-btn ui-demo__btn--${type}`}>
        <Icon name={icon}></Icon>
        {children}
      </button>
    )
  }
}

export default Button
