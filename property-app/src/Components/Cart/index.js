import React from 'react'
import './index.scss';
import { useSelector, useDispatch } from 'react-redux'
import Cards from '../HotelCards/Cards';
import { addItem } from '../../Slices/cartslice';

const Index = () => {
    const dispatch = useDispatch();
    const cart = useSelector((store) => (store.cart.items))
    
        const getButtonText = (data) => {
          const res =
            cart &&
            cart.filter((item) => {
              return item.id === data.id;
            });

          if (res && res.length > 0) {
            return true;
          } else return false;
    };

    const addToCart = (ele) => {
        dispatch(addItem(ele));
    };
    
  return (
    <div className="main-contr" style={{flexDirection:"column"}}>
      {cart && cart.map((ele) => {
        return (
          <Cards
            fromCart={true}
            getButtonText={getButtonText}
            ele={ele}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
}

export default Index