import { useSelector, useDispatch} from 'react-redux';
import './style.scss';
import { useEffect, useState } from 'react';
import { clearCart } from '../../Slices/cartslice';

const Payment = () => {
  const [total, setTotal] = useState(0);
  const [cartvalue, setCartValue] = useState(0);
  const dispatch = useDispatch();

  const items = useSelector((store) => (store.cart.items))

  const clearCartItem = () => {
    dispatch(clearCart())
  }
  
  useEffect(() => {
    const res = (total + (total * 0.18) + (total * 0.02));
    setCartValue(res);   
    console.log("cart values is", cartvalue);
  },[total])
    
   
  
  useEffect(() => {
    if (items && items.length > 0) {
      const Total = items.reduce((acc, b) => {
        return acc = acc + parseInt(b.Price);
      }, 0);
      setTotal(Total);
    }
    
  },[items]
    
  )
  return (
    <div className="payment-wrapper">
      <div className="head">Your Payment Summary </div>
      <div className="main">
        {" "}
        <div className="items">
          <p>Items Total : </p>
          {total}${" "}
        </div>{" "}
        <div className="items">
          <p>GST(18%) : </p>
          {(total * 0.18).toFixed(2)}${" "}
        </div>{" "}
        <div className="items">
          <p>Service Fee(2%) : </p>
          {(total * 0.02).toFixed(2)}${" "}
        </div>{" "}
        <div className="items">
          <p>Security Amount : </p> 5${" "}
        </div>{" "}
        <div className="items cartVal">
          <p> Your total cart value is : </p>
          {cartvalue}${" "}
        </div>{" "}
      </div>
      <button onClick={() => clearCartItem()} className="clear-cart">
        Clear Cart
      </button>
    </div>
  );
}

export default Payment;