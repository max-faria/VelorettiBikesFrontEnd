import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    price: number;
    color: string;
    quantity: number;
    url?: string,
}

interface CartState {
    items: Product[];
    showPopUp: boolean;

}

const initialState: CartState = {
    items: [],
    showPopUp: false,
}

export const cartSlice = createSlice({
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
            state.showPopUp = true;

        },
        removeFromCart(state, action: PayloadAction<{id: number, color: string}>) {
            state.items = state.items.filter(item => item.id !== action.payload.id || item.color !== action.payload.color)
        },
        clearCart(state){
            state.items = []
        },
        updateQuantity(state, action: PayloadAction<{id: number, color: string, quantity: number}>){
            const product = state.items.find(item => item.id === action.payload.id && item.color === action.payload.color);
            if (product){
                product.quantity = action.payload.quantity;
            }
        },
        hidePopUp(state){
            state.showPopUp = false;
        }
    }
})

export const { addToCart, removeFromCart, clearCart, updateQuantity, hidePopUp } = cartSlice.actions;
export default cartSlice.reducer;