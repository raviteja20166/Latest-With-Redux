import * as Actions from '../Actions/ActionTypes'


let initialState = {
    user: {}
}
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOGIN:
            return {
                ...state,
                user: {
                    name: action.name,
                    mobile: action.mobile,
                    Email: action.Email,
                    path: action.path
                }
            };

        case Actions.SavePhoto:
            return {
                ...state,
                user: {
                    ...state.user,
                    path: action.path
                }
            };

        default:
            return state;
    }
}

export default LoginReducer;
