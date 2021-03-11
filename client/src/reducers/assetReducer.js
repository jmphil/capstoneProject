const initialState = {
    checking: '',
    savings: '',
    investments: ''

}

const assetReducer = (state = initialState, action) => {

    switch(action.type){
        
        case "SET_ASSETS":
            return {
                ...state, 
                checking: action.data.checking,
                savings: action.data.savings,
                investments: action.data.investments
            }
        default:
            return state;
    } 
}


export default assetReducer