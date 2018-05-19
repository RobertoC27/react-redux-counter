import React, { Component } from 'react';
import { connect } from 'react-redux';
import v4 from 'uuid-v4';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(result => <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.val}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', payload: {factor: 5} }),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', payload: {factor: 5} }),
        onStoreResult: () => dispatch({type: 'STORE_RESULT', payload: {id: v4()}}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', payload: {id}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);