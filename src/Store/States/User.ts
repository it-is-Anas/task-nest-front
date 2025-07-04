import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'user',
    initialState: { 
        firstName: '',
        lastName: '',
        email: '',
        imgSrc: '',
        token: '',
    },
    reducers: {
        updateData: (state,payload) => {
            const { token , user} = payload.payload;
            state.token = token;
            state.firstName = user.firstName;
            state.lastName = user.lastName;
            state.email = user.email;
            state.imgSrc = user.imgSrc;
        },

    },
});

export const { updateData } = counterSlice.actions;
export default counterSlice.reducer;
