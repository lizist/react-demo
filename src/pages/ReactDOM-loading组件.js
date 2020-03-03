import React from 'react'
import ReactDOM from 'react-dom'

class Loading extends React.Component {
  render() {
    return <div>loading</div>
  }
}

let node = null
const loading = {
  show: () => {
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<Loading />, node)
  },
  hide: () => {
    if (node) {
      ReactDOM.unmountComponentAtNode(node)
      document.body.removeChild(node)
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        {this.state.data.map(item => (
          <p>{item}</p>
        ))}
      </div>
    )
  }

  componentDidMount() {
    loading.show()
    setTimeout(() => {
      this.setState({
        data: ['a', 'b', 'c']
      })
    }, 2000)
  }
}
export default App
