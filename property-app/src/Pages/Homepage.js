import React from 'react'
import Header from "../Components/Header";
import HotelCards from "../Components/HotelCards";
import OfferCards from "../Components/OfferCards"


const Homepage = ({cards}) => {
  return (
    <div>
          <Header cards={cards} hideForm={false}/>
          <OfferCards />
    </div>
  );
}

export default Homepage