import * as Actions from '../Actions/ActionTypes'


let initialState = {
    user: {}
}
const LoginReducer = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case Actions.LOGIN:
            return {
                ...state,
                user: {
                    name: action.name,
                    phone: action.phone,
                    email: action.email,
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
