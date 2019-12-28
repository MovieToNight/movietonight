import {createStore} from 'redux';
import hitReducer from "./header/hitReducer";


const store = createStore(hitReducer);


export default store;
