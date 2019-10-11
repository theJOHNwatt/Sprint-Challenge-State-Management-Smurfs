import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE ,ADD_SMURF } from '../actions';



export const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
    
}

export const reducer = (state = initialState, action) => {
    console.log('smurfs api',state.smurfs)
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            };
        
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: 'Error Collecting Data',
            };
        case ADD_SMURF: 
                const newItem = {
                    ...action.payload,
                    id: Date.now()
                    
                }
                
            return{
                ...state,
                smurfs: [...state.smurfs, newItem]
                
            }
        default:
            return state;
    }
}

export default reducer;