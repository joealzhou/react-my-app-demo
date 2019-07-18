import  React, {Component}  from 'react';
import { history } from '../../App';
import {  incrementAction, reduceAction } from '../../reducers/calculate';
import {connect} from 'react-redux'

interface Props {
    num: number
    increment: ()=>any,
    decrement: ()=>any,
}

const mapStateToProps = (state: any) => {
    return {
      num: state.calculate.num
    };
  };
  
  const mapDispatchToProps = (dispatch: any) => ({
    increment: () => dispatch(incrementAction),
    decrement: () => dispatch(reduceAction)
  });

@(connect( mapStateToProps, mapDispatchToProps, ) as any)
export default class Home extends Component<Props, any> {

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

    numIncrement() {
        this.props.increment()
    }

    numReduce() {
        this.props.decrement()
    }

    render() {
        return <div>
            <p>Hello World!</p>
            <p>
            <span onClick={this.gotoDetail}>click me go to detailPage</span>
            </p>
            <p onClick={this.gotoUser}>click me go to user</p>
           
            <p onClick={this.numIncrement.bind(this)}>num increment</p>
            <p onClick={this.numReduce.bind(this)}>num reduce</p>
            <p>{this.props.num}</p>
        </div>
    }
}
