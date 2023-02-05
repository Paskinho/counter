import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type CounterType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);



// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;