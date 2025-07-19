import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Initial State
const initialState = {
  Notification:[],
  loading:false,
  error: null
}



export const getTodoById = createAsyncThunk(
  'todo/getTodoById',
  async(id,thunkAPI) =>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.data;
  }
)



const NotifySlice = createSlice({

    name:"notify",
    initialState,
    reducers :{
        AddNotification: (state,action)=>{
                state.Notification.push(action.payload);
            
        }
        
    },
    extraReducers: (builder) =>{
      builder.addCase(getTodoById.pending, (state)=>{
          state.loading =true;
          state.error =null;
          console.log("Loading...");
      })
      .addCase(getTodoById.fulfilled,(state,action)=>{
        state.loading=false;
        state.Notification.push(action.payload);
        console.log("fullfiled...");
        
      })
      .addCase(getTodoById.rejected,(state)=>{
          state.loading = false;
          state.error ="Error Occured while fetching data";
          console.log("Got Some error");
          
      }).addDefaultCase(
        
      );
    }
});
// Action creators are generated for each case reducer function

export default NotifySlice.reducer;
export const { AddNotification } = NotifySlice.actions;