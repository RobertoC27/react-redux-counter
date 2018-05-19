import * as actionTypes from '../actionNames';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: action.payload.id, val: action.payload.value})
            };
        case actionTypes.DELETE_RESULT:
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