import React from 'react'
import ReactDom from 'react-dom'

class LoadingComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  render() {
    const { loading } = this.state
    return <div>{loading ? 'loading....' : ''}</div>
  }
  showLoading = () => {
    this.setState({
      loading: true
    })
  }
  hideLoading = () => {
    this.setState({
      loading: false
    })
  }
}

class App extends LoadingComponent {
  render() {
    return <div>{super.render()}app</div>
  }
  componentDidMount() {
    this.showLoading()
    setTimeout(() => {
      this.hideLoading()
    }, 3000)
  }
}
export default App
