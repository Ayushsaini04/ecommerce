import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart";
import "./Products.css";
import Footer from "./footer";

function Product({ productObj }) {
    const dispatch = useDispatch();
    
    const handleAddToCart = () => {
        dispatch(addToCart(productObj));
    }


    return (
        
        <div className="divi" >
            <Link to={`/products/${productObj.id}`} style={{ textDecoration: 'none',color:"black" }}>
                <div style={{ height: "300px", overflow: "hidden"  }}>
                    <img src={productObj.image} width="100px" height="100px" />
                    <h3>{productObj.title}</h3>
                    <p>{productObj.description}</p>
                </div>
            </Link>
            <button className="btn"
                
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>

        </div>
        

    );
}

export default Product;
// style={{ }}
// style={{ marginTop: "20px", marginBottom: "20px" }}