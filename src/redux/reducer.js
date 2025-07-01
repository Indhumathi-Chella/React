import { legacy_createStore as createStore } from 'redux';


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

const store =createStore(counterReducer);
console.log(store.getState());

store.dispatch({type:'increment'});
console.log(store.getState());

export default store;