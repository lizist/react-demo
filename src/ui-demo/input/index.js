import React, { Component } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
import './index.scss'
import Icon from '../icons'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      innerValue: '',
      isShowMsg: false
    }
  }
  static propTypes = {
    value: propTypes.string,
    onChange: propTypes.func,
    size: propTypes.string
  }
  static defaultProps = {
    size: 'middle',
    onChange: () => {}
  }

  get isControl() {
    return 'value' in this.props
  }
  get value() {
    if (this.isControl) {
      return this.props.value
    } else {
      return this.state.innerValue
    }
  }
  render() {
    const { size, prefix, subfix } = this.props
    let cls = classNames({
      input: true,
      focus: this.state.focus,
      [`size-${size}`]: true,
      'ui-demo__input': true
    })
    return (
      <div>
        <div className={cls}>
          {prefix && <Icon name={prefix}></Icon>}
          <input
            value={this.value || ''}
            onFocus={e => {
              this.setState({
                focus: true
              })
            }}
            onBlur={e => {
              if (!this.props.rule.test(e.target.value)) {
                this.setState({
                  isShowMsg: true
                })
              } else {
                this.setState({
                  isShowMsg: false
                })
              }
              this.setState({
                focus: false
              })
            }}
            onChange={e => {
              if (!this.isControl) {
                this.setState({
                  innerValue: e.target.value
                })
              }
              this.props.onChange(e)
            }}
          />
          {subfix && <Icon name={subfix}></Icon>}
        </div>
        {this.state.isShowMsg && <p>{this.props.massage}</p>}
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      innerValue: this.props.defalutValue
    })
  }
}

export default Input

/**受控组件 必须要有value 和onChange事件 触发onChange事件的时候必须要this.setState来修改state的值
<Input
size="small"
value={this.state.value}
onChange={e => {
  this.setState({
    value: e.target.value
  })
}}
/>  
*/
/**
 非受控组件，绑定值为defalutValue，可以不用onChange事件 defalutValue的值可以绑定自定义的字段，可以不用setState来改变值
    <Input
        size="small"
        defalutValue={this.value}
        onChange={e => {
            this.value = e.target.value
    }}
    />
 */
