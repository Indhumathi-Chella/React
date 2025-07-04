import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {value :0}

function counterReducer(state=initialState,action){
    switch(action.type){
        case 'increment':
            return {value : state.value + 1};
        case 'decrement' :
            return { value :state.value - 1};
        default:
            return state;
    }
}

const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware))
)
console.log(store.getState());

store.dispatch({type:'increment'});
console.log(store.getState());

export default store;