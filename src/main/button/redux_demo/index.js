const redux = require('redux');
const reduxLogged = require('redux-logger');

const logger = reduxLogged.createLogger();

// Redux lib method
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//Action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}

//Reducer

const applyMiddleware = redux.applyMiddleware;

const initialState = {
    numOfCakes: 10,
    numOfIceCream: 20
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default :
            return state
    }

}


const store = createStore(reducer, applyMiddleware(logger))


const unsub = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


unsub()

