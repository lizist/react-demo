import React, { Component } from 'react';

class EventComponent extends Component {
    cb = {}
    on(name, cb) {
        this.cb[name] = cb
    }
    off(name) {
        delete this.cb[name]
    }
    trigger(name, ...arg) {
        this.cb[name](...arg)
    }
}

class List extends EventComponent {
    constructor() {
        this.state = {
            data: [
                { name: 'a', id: 0 },
                { name: 'b', id: 1 },
                { name: 'c', id: 2 }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.data.map(item => <p key={item.id}>{item.name}</p>)}
            </div>
        )
    }
    add(name) {
        let { data } = this.state
        data.push({
            name,
            id: data.length
        })
        this.setState({ data })
    }
}

class Action extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
                <button onClick={() => {
                    this.trigger('add', this.state.value)
                    this.setState({
                        value: ''
                    })
                }}>add</button>
            </div>
        )
    }
}



class App extends React.Component {
    render() {
        return (
            <div>
                <Action
                    ref='action'
                />
                <List ref='list'></List>
            </div>
        )
    }
    componentDidMount() {
        let listInstance = this.refs.list
        let actionInstance = this.refs.action
        actionInstance.on('add', (name) => {
            listInstance.add(name)
        })
        window.app = this
    }
}
export default App