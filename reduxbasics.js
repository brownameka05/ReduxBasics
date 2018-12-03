const redux = require('redux')

const initialState = {
  counter: 100
}



const createStore = redux.createStore

const rootReducer = (state = initialState,action) => {
  if(action.type == "DECREMENT"){
    return {
      ...state,
      counter : state.counter - 1
    }
  } else if(action.type == "SUBTRACT"){
    return {
      ...state,
      counter : state.counter + action.value
    }
  }
  return state
}




const store = createStore(rootReducer)

console.log("befor the dispatching")
console.log(store.getState())


store.dispatch({type: "DECREMENT"})
store.dispatch({type: "SUBTRACT", value : -3})


console.log("after the dispatching")
console.log(store.getState())
