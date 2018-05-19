const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload.factor
            };
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.payload.factor
            };
        case 'STORE_RESULT':
            return{
                ...state,
                results: state.results.concat({id: action.payload.id, val: state.counter})
            };
        case 'DELETE_RESULT':
            let tmp = []
            //usar filter es lo mismo que un map
            const withFilter = state.results.filter(result => result.id !== action.payload.id)
            state.results.map(result => {
                if (result.id !== action.payload.id){
                    tmp.push(result)
                }
            });
            return {
                ...state,
                results: withFilter
            }
            
        default:
            return state;
    }

};

export default reducer;