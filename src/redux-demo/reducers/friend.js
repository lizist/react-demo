/*
 * @Author: your name
 * @Date: 2020-03-13 17:57:10
 * @LastEditTime: 2020-03-13 18:34:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LieYouTemplatesd:\文档\Study\react\src\redux-demo\reducers\friend.js
 */
import { ADD_LIST, DEL_ITEM } from '../actions/friend'
const initialState = {
  list: [
    { name: 'lizi', id: 0 },
    { name: 'vue', id: 1 },
    { name: 'react', id: 2 }
  ]
}
export default (state = initialState, action = {}) => {
  const { type, data } = action
  let List = state.list
  switch (type) {
    case ADD_LIST:
      List.push(data)
      return Object.assign({}, state, { list: [...List] }) // 这边List要解构，不然和state.list的内存地址是一样的，js认为数据没改变
    case DEL_ITEM:
      List = List.filter(item => item.id != data)
      return Object.assign({}, state, { list: [...List] })
    default:
      return state
  }
}
