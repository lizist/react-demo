import React from 'react'
import { connect } from 'react-redux'
import { addList, delItem } from '../../actions/friend'

class friend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    render() {
        const {
            value
        } = this.state
        const {
            friendList
        } = this.props
        return (
            <div>
                {friendList.map((item, index) =>
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <button onClick={() => {
                            delItem(item.id)
                        }}>del</button>
                    </div>
                )}
                <input value={value} onChange={e => {
                    this.setState({ value: e.target.value })
                }} />
                <button onClick={(e) => {
                    addList({ name: value, id: friendList.length })
                    this.setState({ value: '' })
                }}>add</button>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        friendList: state.friend.list
    }
})(friend)