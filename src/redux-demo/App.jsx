import React from 'react'
import Home from './views/home'
import Friend from './views/friend'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Home></Home>
                <Friend></Friend>
            </div>
        )
    }
}