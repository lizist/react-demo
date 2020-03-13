import React, { Component, ChangeEvent } from 'react'
import PropTypes from 'prop-types'
interface IProps {
    name: string
}
interface IState {
    value: string
}
class Parent extends Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props)
        this.state = {
            value: 'a'
        }
    }
    render() {
        const {
            name
        } = this.props
        const {
            value
        } = this.state
        return (
            <div>
                {name}
                {value}
                <input value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    this.setState({
                        value: e.target.value
                    })
                }} />
            </div>
        )
    }
}

export default Parent