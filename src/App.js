import React from 'react'
import Icon from './ui-demo/icons'
import Button from './ui-demo/button'
import Input from './ui-demo/input'
import Table from './ui-demo/table'
import Parent from './pages/跨级组件'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      dataSource: [
        { name: 'lizi', age: '10', sex: '男' },
        { name: 'lizi1', age: '30', sex: '男' },
        { name: 'lizi2', age: '40', sex: '男' }
      ]
    }
  }
  value = '1'
  render() {
    return (
      <div>
        <Icon
          name="aixin"
          onClick={() => {
            alert('111')
          }}
          style={{ color: 'red' }}
        ></Icon>
        <Icon name="dingdan" style={{ color: 'buld' }}></Icon>
        <Icon name="rili" style={{ color: '#ff4444' }}></Icon>
        <Icon name="shaixuan" style={{ color: 'red' }}></Icon>
        <Icon name="sousuo" style={{ color: 'red' }}></Icon>
        <Icon name="tanhao" style={{ color: 'red' }}></Icon>
        <Button type="primary" icon="dingdan">
          提交
        </Button>
        <Button type="warning" icon="rili">
          报错
        </Button>
        <br />
        <Input size="large" subfix="rili" />
        <br />
        <Input size="middle" />
        <br />
        <Input
          size="small"
          rule={/^\d+$/}
          massage="请输入数字"
          value={this.state.value}
          onChange={e => {
            this.setState({
              value: e.target.value
            })
          }}
        />
        <Input
          size="small"
          defalutValue={this.value}
          onChange={e => {
            this.value = e.target.value
          }}
        />
        <Table
          columns={[
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              render(text, item, index) {
                return (
                  <a href="#">
                    {text}?+{item.age}+{item.sex}
                  </a>
                )
              }
            },
            { title: '年龄', dataIndex: 'age', key: 'age' },
            { title: '性别', dataIndex: 'sex', key: 'sex' }
          ]}
          dataSource={this.state.dataSource}
        />
        <Parent />
      </div>
    )
  }
}

export default App
