import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialvalue: 100,
  dataProduct:[
    { categoria: "Frutas", precio: "$1", stocked: true, nombre: "Manzana" },
    { categoria: "Frutas", precio: "$1", stocked: true, nombre: "Frutilla" },
    { categoria: "Frutas", precio: "$2", stocked: false, nombre: "Banana" },
    { categoria: "Vegetales", precio: "$2", stocked: true, nombre: "Cebolla" },
    { categoria: "Vegetales", precio: "$4", stocked: false, nombre: "Lechuga" },
    { categoria: "Vegetales", precio: "$1", stocked: true, nombre: "Tomate" },
  ]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setInitialValue: (state, payload) => {
      state.initialvalue = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setInitialValue} = productSlice.actions

export default productSlice.reducer