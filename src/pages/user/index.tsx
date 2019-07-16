import React, {Component} from 'react'

export default class User extends Component<any, any> {

    render() {
        let { match } = this.props
        const name = match.params.name
        return <div>
            this is {name}
        </div>
    }
}