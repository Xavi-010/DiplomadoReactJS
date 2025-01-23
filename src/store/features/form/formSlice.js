import { createSlice } from '@reduxjs/toolkit';

 export const initialState = {
    dataForm:{
        module: "React Mod7",
        username: "",
        email: "",
        password: "mod7USIP-JAVIER",
    },
    isLoggin: false
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.dataForm = { ...state.dataForm, ...action.payload };
        },

        setIsLoggin : (state, action) =>{
            state.isLoggin = action.payload
        }
    },
});

export const { setFormData , setIsLoggin} = formSlice.actions;

export default formSlice.reducer;
