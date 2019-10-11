import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';


const initialState = {
    smurfsApi: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    console.log(state);
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
                smurfsApi: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;