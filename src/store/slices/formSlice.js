import { createSlice } from "@reduxjs/toolkit";           
import { addCar } from './carsSlice'  ;

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0,
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        },
    },

    extraReducers(builder) {    //this means that when we dispatch addCar action make the state.name empty, and cost = 0
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        })
    }
});

export const {changeName , changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;