import React, { useState } from 'react'
import "./index.scss"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLocation } from '../../Slices/propertyslice';
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Index = ({ cards, hideForm, fromCart}) => {
    const navigate = useNavigate();
  const cart = useSelector((store) => (store.cart.items));
  const userName = useSelector((store) => store.user.userName) || 'User';
  const avatar =
    useSelector((store) => store.user.userAvatar) ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPFG2avZ9h7ROn4W6qZy5risfoI-ykQlsew&s";
    const [inputtext, setinputtext] = useState("");
 
    const handlechange = (e) => {
        setinputtext(e.target.value);
      
    
    }
    const dispatch = useDispatch()

    const handleSearch =  (e) => {
        e.preventDefault();
    //   const ans =  cards?.filter((ele) => {
    //       if (ele && ele.Location && ele.Location.toLowerCase() == inputtext && inputtext.toLowerCase()) {
    //           return ele;
    //         }
    //   })
        
        
        dispatch(addLocation(inputtext));
        navigate('/search')
        // setinputtext("");
    }

    
    const handleCart = () => {
        navigate('/cart')
    }

    return (
      <div>
        <div className="outer">
          <div className="main1">
            <div className="left">RENTZ.com</div>
            
              <div className="text">Find It, Love It, Rent It.</div>
            
            <div className="right">
              <p>Hi, {userName.slice(0, 5)}...</p>
              <img alt="avatar" src={avatar} className="img-avatar"></img>
            </div>
          </div>

          {hideForm && !fromCart && cart.length > 0 && (
            <div className="cart" onClick={handleCart}>
              <IoCartOutline />
              Cart <div className="count">{cart.length}</div>
            </div>
          )}
        </div>
        {!hideForm && !fromCart && (
          <form className="search-form">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter the state you're searching for"
                onChange={(e) => handlechange(e)}
                value={inputtext}
              ></input>

              <button
                disabled={inputtext.length == 0 ? true : false}
                onClick={handleSearch}
              >
                {/* <a href={inputtext.length === 0 ? "" : "/search"}>Search</a> */}
                Search
              </button>
            </div>
          </form>
        )}
      </div>
    );
}

export default Index