import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from './pages/UserPage';
import Counter from './components/Counter';
import CartPage from './pages/CartPage';
import Footer from './components/footer';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <><ProductsPage /><Footer /> </>} />
                <Route path='/products' element={<><ProductsPage /><Footer /> </>}/>
                <Route path='/products/:productId' element={<ProductPage />} />
                <Route path='/user' element={<UserPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/counter' element={<Counter />} /> 

                {/* Match all paths */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
