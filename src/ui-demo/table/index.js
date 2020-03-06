import React, { Component } from 'react'
import propTypes from 'prop-types'
import './index.scss'
import Icon from '../icons'

class ColumnsItem extends Component {
  render() {
    const { title } = this.props.item
    return <td>{title}</td>
  }
}

class Columns extends Component {
  render() {
    const { columns } = this.props
    return (
      <thead>
        <tr>
          {columns.map(item => (
            <ColumnsItem item={item} key={item.key} />
          ))}
        </tr>
      </thead>
    )
  }
}
class DataSourceItem extends Component {
  render() {
    const { dataItem, columns, index } = this.props
    const tds = columns.map(item => (
      <td key={item.key}>
        {item.render ? item.render(dataItem[item.dataIndex], dataItem, index) : dataItem[item.dataIndex]}
      </td>
    ))
    return <tr>{tds}</tr>
  }
}
class DataSource extends Component {
  render() {
    const { columns, dataSource } = this.props
    let trs = dataSource.map((item, index) => (
      <DataSourceItem dataItem={item} index={index} key={index} columns={columns} />
    ))
    return <tbody>{trs}</tbody>
  }
}
class Table extends Component {
  static propTypes = {
    columns: propTypes.array,
    dataSource: propTypes.array
  }
  static defaultProps = {
    columns: [],
    dataSource: []
  }
  render() {
    const { columns, dataSource, ...rest } = this.props
    return (
      <div>
        <table border="1">
          <Columns columns={columns} />
          <DataSource dataSource={dataSource} columns={columns} />
        </table>
      </div>
    )
  }
}

export default Table
