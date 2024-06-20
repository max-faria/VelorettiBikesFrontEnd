import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    price: number;
    color: string;
    quantity: number;
}

interface CartState {
    items: Product[];

}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const existingProduct = state.items.find((item) =>
                item.id === action.payload.id &&
                item.color === action.payload.color
            )
            if(existingProduct){
                existingProduct.quantity += 1;
            } else {
                state.items.push(action.payload)
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart(state){
            state.items = []
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;