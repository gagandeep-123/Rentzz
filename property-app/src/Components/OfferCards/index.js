import React from 'react'
import "./index.scss"

const arr = [
  {
    Name: "Independent/Builder Floor",
    Number: "4000+",
    img: "https://static.99acres.com/universalhp/img/d_hp_property_type_4.webp",
  },
  {
    Name: "Farm House",
    Number: "2000+",
    img: "https://static.99acres.com/universalhp/img/d_hp_property_type_5.webp",
  },
  {
    Name: "Residential Appartment",
    Number: "1000+",
    img: "https://static.99acres.com/universalhp/img/d_hp_property_type_1.webp",
  },
  {
    Name: "Independent House/Villa",
    Number: "4000+",
    img: "https://static.99acres.com/universalhp/img/d_hp_property_type_2.webp",
  },
];



const Index = () => {
  return (
    <div className='offer-wrapper'>
      <p className="offer-text">Discover Your Perfect Rental with us.</p>

      <div className="offer-box">
        {arr.map((ele) => {
          return (
            <div className="inner">
              <p className="name">{ele.Name}</p>
              <p className="properties">{ele.Number} Properties</p>
              <div className='img-contr'>
                <img className="offer-image" src={ele.img}></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index