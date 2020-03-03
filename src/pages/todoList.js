import React from 'react'

class Action extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      inputValue: ''
    }
  }
  render() {
    const { onAdd } = this.props
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={e => {
            this.setState({
              inputValue: e.target.value
            })
          }}
          type="text"
        />
        <button
          onClick={() => {
            onAdd(this.state.inputValue)
            this.setState({
              inputValue: ''
            })
          }}
        >
          提交
        </button>
      </div>
    )
  }
}
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onEditId: NaN,
      inputValue: ''
    }
  }
  render() {
    const { data, onDelete, onEdit } = this.props
    return (
      <div>
        <ol>
          {data.map((item, index) => {
            let isOnEdit = this.state.onEditId === index
            return (
              <li key={index}>
                {isOnEdit ? (
                  <input
                    value={this.state.inputValue}
                    onChange={e => {
                      this.setState({
                        inputValue: e.target.value
                      })
                    }}
                    type="text"
                  />
                ) : (
                  <p>{item}</p>
                )}
                <button
                  onClick={() => {
                    onDelete(index)
                  }}
                >
                  删除
                </button>
                <button
                  onClick={() => {
                    if (isOnEdit) {
                      onEdit(this.state.inputValue, index)
                      this.setState({
                        onEditId: NaN,
                        inputValue: ''
                      })
                    } else {
                      this.setState({
                        onEditId: index,
                        inputValue: item
                      })
                    }
                  }}
                >
                  {isOnEdit ? '保存' : '编辑'}
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false
    }
  }
  render() {
    return (
      <div>
        <Action
          onAdd={name => {
            let data = this.state.data
            data.push(name)
            this.setState({
              data
            })
          }}
        ></Action>
        <TodoList
          data={this.state.data}
          onEdit={(name, index) => {
            console.log(name)
            let data = this.state.data
            data.splice(index, 1, name)
            this.setState({
              data
            })
          }}
          onDelete={index => {
            let data = this.state.data
            data.splice(index, 1)
            this.setState({
              data
            })
          }}
        ></TodoList>
      </div>
    )
  }
}
export default App
