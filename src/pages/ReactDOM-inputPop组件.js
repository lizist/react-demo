import React from 'react';
import ReactDOM from 'react-dom'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value=''
        }
    }
    render() {
        const { onOK } = this.props
        return (
            <div>
                <input value={this.state.value} onChange={(e) =>
                    this.setState({
                        value: e.target.value
                    })
                } />
                <button onClick={(e) => {
                    let v = this.state.value
                    onOK(v)
                    this.setState({
                        value: ''
                    })
                    inputPop.hide()
                }}>
                    提交
                </button>
            </div>
        )
    }
}
let node = null
const inputPop = {
    show: () => {
        node = document.createElement('div')
        document.body.appendChild(node)
        ReactDOM.render(<Input />, node)
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
        super(props);
        this.state = {
            data=[]
        }
    }

    render() {
        return (
            <div>
                {this.state.map(item => <p>{item}</p>)}
            </div>
        )
    }

    componentDidMount() {
        inputPop.show({
            onOK: (name) => {
                this.setState({
                    name
                })
            }
        });
    }
}
export default App