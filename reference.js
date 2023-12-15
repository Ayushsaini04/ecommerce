// npm install react-router-dom

// This is a React Router v6 app
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  function Users() {
    return (
      <div>
        <nav>
          <Link to="me">My Profile</Link>
        </nav>
  
        <Routes>
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} />
        </Routes>
      </div>
    );
  }

// Ah, nice and simple API. And it's just like the <Suspense> API!
// Nothing more to learn here.
{/* <Route path=":userId" element={<Profile />} /> */}

// But wait, how do I pass custom props to the <Profile>
// element? Oh ya, it's just an element. Easy.
{/* <Route path=":userId" element={<Profile animate={true} />} /> */}

// Ok, but how do I access the router's data, like the URL params
// or the current location?
function Profile({ animate }) {
  let params = useParams();
  let location = useLocation();
}

// But what about components deep in the tree?
function DeepComponent() {
  // oh right, same as anywhere else
  let navigate = useNavigate();
}

// Aaaaaaaaand we're done here.

// -----

// store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter';
import cartReducer from './features/cart';
import { saveState, loadState } from "./localStorage";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    },
    // preloadedState: loadState()
});

// store.subscribe(() => {
//     console.log(store.getState());
//     saveState(store.getState());
// });

export default store;
