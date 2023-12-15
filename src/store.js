import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter';
import cartReducer from './features/cart';
import { saveState, loadState } from './localStorage';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    },
    preloadedState: loadState()
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
