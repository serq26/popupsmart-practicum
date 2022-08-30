import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    theme: localStorage.getItem("theme") || "light"
}

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("theme",action.payload);
        }
    }
})

export const { changeTheme } = theme.actions
export default theme.reducer