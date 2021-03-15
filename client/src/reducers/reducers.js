// import actionTypes from '../actions/actionTypes';

const initialState = {
    authenticated: "",
    id: '',
    firstName: '',
    lastName: ''
   
}

const reducerTemplate = (state = initialState, action) => {

    switch(action.type){
        
        case "AUTH_USER":
            return {
                ...state, 
                authenticated: action.data.token, //the jwt
                id: action.data.id,
                firstName: action.data.firstName,
                lastName: action.data.lastName  
            }
        default:
            return state;
    } 
}


export default reducerTemplate