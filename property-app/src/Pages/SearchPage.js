import React from 'react'
import Header from "../Components/Header"
import HotelCards from "../Components/HotelCards"

const SearchPage = ({cards}) => {
  return (
    <div>
      <Header cards={cards} hideForm={true} />
        <HotelCards cards={cards} />
    </div>
  );
}

export default SearchPage