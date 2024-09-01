import React from 'react'
import Header from "../Components/Header";
import Cart from "../Components/Cart";
import Payment from '../Components/Payment';
import { useSelector } from 'react-redux';
import { PiExclamationMarkFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
const naviage = useNavigate();

  const styling = {
    emptyCart: {
          display: "flex",
    fontSize: "20px",
    flexDirection:"column",
    alignItems: "center",
    fontWeight: "700",
    marginTop: "50px",
    justifyContent: "center",
    },

    backBtn: {
    fontSize: "14px",
    padding: "15px 28px",
    "fontWeight": "600",
    color: "#ffffff",
    "backgroundColor": "#771a1a",
    border: "none",
    cursor: "pointer"
    }
  }
  const cart = useSelector((store) => store.cart.items);
  return (
    <div>
      <Header fromCart={true} />
      {cart.length > 0 ? (
        <div className="wrapper">
          <Cart />
          <Payment />
        </div>
      ) : (
        <div style={styling.emptyCart}>
            <p><PiExclamationMarkFill /> Please add properties to show in cart .</p>
            <button style={styling.backBtn} onClick={() => naviage('/browse')}>Back to Homepage</button>
        </div>
      )}
    </div>
  );
}

export default Cartpage