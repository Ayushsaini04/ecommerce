import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo2.svg';
// import { GlobalContext } from '../contexts/GlobalContext';

function Navbar({ getInputValue }) {

    const [searchText, setSearchText] = useState("");
    const cartProducts = useSelector((store) => store.cart.value);
    // const { cart } = useContext(GlobalContext);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);

        getInputValue(searchText);
    }

    // const handleSearchButtonClick = () => {
    //     getInputValue(searchText);
    // }

    let nCartItems = 0;
    cartProducts.forEach((productObj) => {
        nCartItems += productObj.qty;
    });

    return (
        <div style={{ display: "flex", alignItems: "center" ,justifyContent:"space-between" ,marginTop:"0" ,backgroundColor:"black",color:"white"}}>
            <Link to="/">
                <img src={logo} alt="Logo"  />
            </Link>

            <div style={{ marginLeft: "20px" }}>
                <span style={{ marginRight: "7px" }}>Search</span>
                <input 
                    placeholder='Type here...' 
                    value={searchText} 
                    onChange={handleInputChange} 
                />
                {/* <button onClick={handleSearchButtonClick}>Search</button> */}
            </div>

            <div style={{ marginLeft: "20px" }}>
                <Link to="/products"style={{ textDecoration: 'none',color:"white" }}>
                    <p>Products Page</p>
                </Link>
            </div>
            <div style={{ marginLeft: "30px" }}>
                <Link to='/cart'style={{ textDecoration: 'none',color:"white" }}>
                    <p>Cart ({nCartItems})</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
