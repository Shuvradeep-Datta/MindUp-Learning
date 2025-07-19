import { createStore } from 'redux'


//Create Reducer
function counterReducer(currentState = {count:0},action){

    if(action.type  == 'counter/incremented'){
        return {count:currentState.count+1}
    }else if(action.type  == 'counter/decremented'){
            return {count:currentState.count-1}
    }else if(action.type  == "COUNTER_INCREAMENTED_BY_ACTION"){
        return {count:currentState.count+action.payload}
    }

    else{
        return currentState;
    }
}


//Create Store
let store = createStore(counterReducer)

//Subscribe Store
store.subscribe(()=>{
    console.log(store.getState());
    
});

//Counter Performing Action:increasing
store.dispatch({
    type: "counter/incremented",
    
});


//Counter Performing Action:increasing by 5
// This action is not handled by the reducer, so it will not change the state
store.dispatch({
    type: "COUNTER_INCREAMENTED_BY_ACTION",
    payload: 5
});

//Counter Performing Action:decreasing
store.dispatch({
    type: "counter/decremented"
});




