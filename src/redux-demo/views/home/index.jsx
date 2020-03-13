import React from 'react'
import { connect } from 'react-redux'
import { updateTitle } from '../../actions/title'

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2 onClick={(e) => updateTitle('hello world')}>{this.props.title} </h2>
            </div>
        )
    }
}
export default connect((state) => {
    return {
        title: state.title
    }
})(Home)