import  React, {Component}  from 'react';
import { history } from '../../App';

export default class Home extends Component {

    gotoDetail() {
        // 普通传值
        history.push({
            pathname: '/detail',
            state: { number: 123 },
          })
    }

    gotoUser() {
        // 路径传值
        history.push({pathname: '/user/joeal'})
    }

    render() {
        return <div>
            <p>Hello World!</p>
            <p>
            <span onClick={this.gotoDetail}>click me go to detailPage</span>
            </p>
            <p onClick={this.gotoUser}>click me go to user</p>
           
            
        </div>
    }
}
