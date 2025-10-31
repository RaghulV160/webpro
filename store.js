import { configureStore } from '@reduxjs/toolkit';
// We can create a simple slice for now.
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
user: null,
};
const userSlice = createSlice({
name: 'user',
initialState,
reducers: {
login: (state, action) => {
state.user = action.payload;
},
logout: (state) => {
state.user = null;
},
},
});
export const { login, logout } = userSlice.actions;
const store = configureStore({
reducer: {
user: userSlice.reducer,
},
});
export default store;
