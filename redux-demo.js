const redux = require('redux')

// 2-> create reducer fnc
const counterReducer = (state = {counter:0},action)=>{
  if (action.type==='increment'){
    return {
      counter:state.counter+1
    }
  }
  if (action.type==='decrement'){
    return{
      counter:state.counter-1
    }
  }
}

//1-> create store
const store = redux.createStore(counterReducer)

// 3-> create subscription

const counterSubscribe = ()=>{
  const latestState = store.getState()
  console.log(latestState);
}

// 4-> redux on subscriber
store.subscribe(counterSubscribe)

store.dispatch({type:'decrement'})
// store.dispatch({type:'increment'})

