import React from 'react'
import "./index.scss"
import SignInSignUp from "../SignInSignUp";
import Header from "../Header";
const Index = () => {
  return (
    <div className="landing-wrapper">
      {/* <Header/> */}
      <img
        className="image"
        src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <div className="entry-text">WHERE FINDING A RENTAL FEELS LIKE HOME</div>
      {/* <div className="book-but">
        <p>Finding your next Stay ?</p>
        <button>Book Us</button>
      </div> */}
      <SignInSignUp />
      <div className="Footer">
        <p className="sub-head">Find It, Love It, Rent It.</p>
      </div>
    </div>
  );
}


export default Index