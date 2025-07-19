import { createSlice } from "@reduxjs/toolkit";


// Initial State
const initialState = {
  value: 0,
}

// Creating Slice for craeting Action & Reducer
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers :{
        increament: (state) => {
            state.value += 1;
        },
        decreament: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        setCount: (state, action) => {
            state.value = action.payload;
        },
        increaseByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        // You can add more cases here if needed
        // builder.addCase('someAction', (state, action) => {
        //     // handle some action
        // });
    }
   
});


// Action creators are generated for each case reducer function
export const {increament,decreament,reset, setCount, increaseByAmount} = counterSlice.actions;
export default counterSlice.reducer;
