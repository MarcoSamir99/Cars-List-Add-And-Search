import { createSlice, nanoid } from "@reduxjs/toolkit";    //nano id is a func help us to use randomly generated ids          

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,  //it's just an assumption
                cost: action.payload.cost,  //it's just an assumption
                id: nanoid(),
            });
        },
        removeCar(state, action) {
            const updated = state.data.filter((car) => {  //filter to update the cars that its id not = the deleted id
                return car.id !== action.payload;
            });
            state.data = updated;
        },
    }
});

export const {
    changeSearchTerm, addCar, removeCar
} = carsSlice.actions

export const carsReducer = carsSlice.reducer;