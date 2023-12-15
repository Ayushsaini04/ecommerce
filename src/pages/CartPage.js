import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from '../features/cart';
// import { useContext } from 'react';
// import { GlobalContext } from '../contexts/GlobalContext';

function CartPage() {
    const cartProducts = useSelector((store) => store.cart.value);
    const dispatch = useDispatch();

    // const { cart, setCart } = useContext(GlobalContext);
    let totalProductsPrice = 0;

    cartProducts.forEach((curProduct) => {
        totalProductsPrice += curProduct.price * curProduct.qty;
    });

    totalProductsPrice =  totalProductsPrice.toFixed(2);
    // totalProductsPrice = Math.round(totalProductsPrice)

    // with context
    // const handleRemoveProduct = (productId) => {
    //     let updatedCart = [...cart];
    //     // get all the product except the product with id = productId on which the click happend.
    //     updatedCart = updatedCart.filter((curProduct) => curProduct.id !== productId);
    //     console.log("updatedCart: ", updatedCart);
    //     setCart(updatedCart);
    // }

    // with redux
    const handleRemoveProduct = (productId) => {
        dispatch(removeItemFromCart(productId));
    }

    return (
        <div>
            <h2>Cart Page</h2>
            <div>
                {cartProducts.map((product) => (
                    <div style={{ 
                        border: "1px solid black",
                        marginBottom: "10px" 
                    }}
                        key={product.id}
                    >
                        <img src={product.image} width="100px" height="100px" />
                        <h4>{product.title}</h4>
                        <p>Quantity: {product.qty}</p>
                        <p>Price: {product.price * product.qty}</p>
                        <button 
                            onClick={() => handleRemoveProduct(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <h4>Total Price: {totalProductsPrice}</h4>
        </div>
    )
}

export default CartPage;
