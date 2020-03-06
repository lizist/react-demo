import React from 'react'
let loading = com => {
  class LoadingComponent extends com {
    constructor(props) {
      super(props)
      this.state = {
        loading: false
      }
    }
    render() {
      const { loading } = this.state
      return (
        <div>
            
          {super.render()} {loading ? 'loading....' : ''}
        </div>
      )
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
  return LoadingComponent
}
//@loading相当于 let NewApp=loading(App) 由于添加了装饰器，loading是继承与App，所以App是父类，loading是子类，所以{super.render()}要写在loading
@loading
class App extends React.Component {
  render() {
    return <div>app</div>
  }
  componentDidMount() {
    this.showLoading()
    setTimeout(() => {
      this.hideLoading()
    }, 3000)
  }
}

export default App
