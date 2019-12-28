import {SI_FI} from "./dropdownTypes";


const initialState = {
    selectedType : 'Initial state'
}


const hitReducer = (state = initialState, action) => {
    if (action.type === SI_FI) {
        return {
            ...state,
            selectedType: SI_FI
        }
    } else {
        return state;
    }

}

export default hitReducer;
