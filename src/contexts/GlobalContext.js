import { createContext, useState } from 'react';

export const GlobalContext = createContext();

function ContextComp({ children }) {
    const [cart, setCart] = useState([]);

    let stateObj = {
        cart: cart,
        setCart: setCart
    };

    return (
        <GlobalContext.Provider value={stateObj}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextComp;
