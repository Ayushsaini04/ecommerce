import axios from 'axios';
import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
// import Footer from '../components/footer';

function ProductsPage() {
    const [category, setCategory] = useState("all");

    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);

    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        const promise = axios.get("https://fakestoreapi.com/products");
        promise.then(function (response) {
            setProducts(response.data);
            setShowProducts(response.data);
            setLoading(false);
        }).catch(function (error) {
            console.log("Error: ", error);
            setLoading(false);
            setError(true);
        });
    }, []);

    const handleSelect = (event) => {
        const cat = event.target.value;
        setCategory(cat);

        // take copy of the state
        let updatedProducts = [...products];

        if (cat !== "all") {
            // modify the copy
            updatedProducts = updatedProducts.filter((curProduct) => {
                return curProduct.category === cat;
            });
        }

        // give the copy to setState
        setShowProducts(updatedProducts);
    }

    const getInputValue = (inputValue) => {
        let updatedProducts = [...products];

        updatedProducts = updatedProducts.filter((curProduct) => {
            return curProduct.title.toLowerCase().includes(inputValue.toLowerCase());
        });

        setShowProducts(updatedProducts);
    }

    // if (isLoading) return <p>Loading...</p>;
    // if (isError) return <p>Some error occurred!</p>

    return (
        <div>
            <Navbar getInputValue={getInputValue} />
            <p>Products Page</p>
            <select onChange={handleSelect} value={category}>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewellery</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
            </select>

            {isLoading ? 
                <p>Loading...</p> :
                <div style={{ display: "flex", flexWrap: 'wrap' }}>
                    {showProducts.map((product) => (
                        <Product key={product.id} productObj={product} />
                    ))}
                </div>
            }
            {isError && <p>Some error occurred!</p>}
        </div>
        
    );
//    <footer/>
};

export default ProductsPage;
