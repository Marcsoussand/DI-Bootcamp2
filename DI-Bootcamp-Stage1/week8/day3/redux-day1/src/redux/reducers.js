export const ADDVALUE = "ADDVALUE";


const initialState = {
    count: 0, 
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            };
        case ADDVALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state;
    }
}