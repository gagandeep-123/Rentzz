import React from 'react'
import Header from "../Header"
import './index.scss';
const Index = () => {
  return (
    <div className="confirm">
      <Header fromCart={true} />

      <div className="confirm-wrapper">
              <div className='text'>Booking Confirmation Details</div>
              <div className='form'>
              <div className='input'>
                  
          <label>Enter your Name</label>
          <input type='text' className='name' placeholder='Enter here ...'></input>
        </div>
        <div className='input'>
          <label>Enter your Contact Number</label>
          <input className='contact' type ="number" placeholder='Enter here ...'></input>
                  </div>
              </div>
              <div className='options-wrapper'>
                  <div className='optionText'>Choose the payment option</div>
                  {["Debit/Credit Card", "UPI (GPay/ PayTm)", "E Wallet", "Netbanking"].map((ele) => {
                      return (
                        <div className="options">
                          <input type="radio" name="payOptions"></input>
                          <label>{ele}</label>
                        </div>
                      );
                  })}
              </div>

              <button className='pay-btn'>Confirm to Pay</button>
              
      </div>
    </div>
  );
}

export default Index