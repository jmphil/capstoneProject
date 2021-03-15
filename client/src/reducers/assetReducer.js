const initialState = {
    checking: '',
    savings: '',
    investments: '',
    updatedAt: '',

}

const assetReducer = (state = initialState, action) => {

    switch(action.type){
        
        case "SET_ASSETS":
            return {
                ...state, 
                checking: action.data.checking,
                savings: action.data.savings,
                investments: action.data.investments,
                updatedAt: action.data.updatedAt
            }
        default:
            return state;
    } 
}


export default assetReducer