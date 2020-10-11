import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import reducer from './reducer'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
//initial state

const initialState={

  cart:cartItems,
  amount:3,
  total:22
}
const store = createStore(reducer,initialState)
function App() {
  

  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer/>
    </Provider>
  );
}

export default App;
