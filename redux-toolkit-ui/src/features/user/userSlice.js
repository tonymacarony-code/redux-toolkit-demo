import { createSlice } from "@reduxjs/toolkit";


const initialState = { // initial state of the slice
    firstName: '', // initial state of the firstName property
    lastName: '', // initial state of the lastName property
};

export const userSlice = createSlice({
    name: 'user', // name of the slice
    initialState, // initial state of the slice
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload; // change the firstName property, action.payload is the new value of the firstName property\
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        }
    }
});


export const { setFirstName, setLastName } = userSlice.actions; // export the actions
export default userSlice.reducer; // export the reducer