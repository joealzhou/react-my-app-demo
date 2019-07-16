import React, {Component} from 'react'
import { history } from '../../App';

export default class DetailPage extends Component {

    state = {
        number: ''
    }

    componentDidMount() {
        let number = history.location.state.number
        console.log(`number: ${number}`);
        this.setState({
            number 
        })
    }

    render() {
        
        return <div>
            this is detailpage! {this.state.number}
        </div>
    }
}