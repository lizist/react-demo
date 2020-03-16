import React from 'react'
import Home from './views/home'
import Friend from './views/friend'
import ReducerHook from './views/reducerHookDemo'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Home></Home>
                <Friend></Friend>
                <ReducerHook></ReducerHook>
            </div>
        )
    }
}