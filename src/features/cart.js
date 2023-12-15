import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const productObj = action.payload;

            const product = state.value.find(
                (stateObj) => productObj.id === stateObj.id
            );

            if (product) {
                product.qty++;
            } else {
                const obj = { ...productObj, qty: 1 };
                state.value.push(obj);
            }
        },
        incrementItem: () => {

        },
        decrementItem: () => {
            
        },
        removeItemFromCart: (state, action) => {
            const productId = action.payload;
            const otherProducts = state.value.filter((curProduct) => curProduct.id !== productId);
            state.value = otherProducts;
        }
    }
});

export default cartSlice.reducer;

export const { addToCart, removeItemFromCart } = cartSlice.actions;
