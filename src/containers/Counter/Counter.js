import React, { Component } from 'react';
import { connect } from 'react-redux';
import v4 from 'uuid-v4';
import * as actions from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    //{this.props.storedResults.map(result => <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.val}</li>)}
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(v4(), this.props.ctr)}>Store result</button>
                {this.props.storedResults.map(result => <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.val}</li>)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.INCREMENT()),
        onDecrementCounter: () => dispatch(actions.DECREMENT()),
        onAddCounter: () => dispatch(actions.ADD(5)),
        onSubtractCounter: () => dispatch(actions.SUBTRACT(5)),
        onStoreResult: (id, value) => dispatch(actions.STORE_RESULT(id, value)),
        onDeleteResult: (id) => dispatch(actions.DELETE_RESULT(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);