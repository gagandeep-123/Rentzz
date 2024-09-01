import { useDispatch } from "react-redux";
import { removeItems } from "../../Slices/cartslice";

const Cards = ({ ele, getButtonText, addToCart, fromCart }) => {
  const dispatch = useDispatch();
  const removeItem = (ele) => {
    dispatch(removeItems(ele));
    
  }
  return (
    <div className="my-card">
      <img className="card-img" src={ele.img}></img>
      <div className="right-contr">
        <div className="about">
          <p className="name">{ele.Propname}</p>
          <p className="type">
            {ele.type} property in{" "}
            <b style={{ color: "grey" }}>{ele.Location}</b>
          </p>
          <p className="bhk">{ele.Bedrooms} BHK</p>
          <div style={{ display: "flex" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Highlights:
            </span>
            {ele.ammenities.map((item) => {
              return <p className="amenities">{item}</p>;
            })}
          </div>

          <p className="price">{ele.Price}$</p>
        </div>

        <button
          onClick={() => (getButtonText(ele) ? null : addToCart(ele))}
          disabled={getButtonText(ele)}
        >
          {getButtonText(ele) ? "Added" : "Add to Wishlist"}
        </button>
        {fromCart && <button onClick={() => removeItem(ele)} style={{marginLeft : "30px"}}>Remove</button>}
      </div>
    </div>
  );
};

export default Cards;