import React from 'react'
import "./index.scss"
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Slices/cartslice';
import FilterSection from '../FilterSection/index.js'
import { useEffect, useState } from 'react';
import { addlist } from '../../Slices/propertyslice.js';
import { PiExclamationMarkFill } from "react-icons/pi";
import Cards from './Cards.js';
import { useNavigate } from 'react-router-dom';

const Index = ({ cards }) => {
  const navigate = useNavigate();
  const styling = {
    emptyCart: {
      display: "flex",
      fontSize: "20px",
      flexDirection: "column",
      alignItems: "center",
      fontWeight: "700",
      marginTop: "50px",
      justifyContent: "center",
    },
    backBtn: {
      fontSize: "14px",
      padding: "15px 28px",
      fontWeight: "600",
      color: "#ffffff",
      backgroundColor: "#771a1a",
      border: "none",
      cursor: "pointer",
    },
  };
    const [propList, setPropList] = useState([]);
    const propLocation = useSelector((store) => store.property.location) || [];
    const selectedType = useSelector((store) => store.property.typefilters);
    const selectedBudget = useSelector((store) => store.property.budgetfilters);
    const cart = useSelector((store) => store.cart.items)
    const list = useSelector((store) => store.property.list);


    const dispatch = useDispatch();
    const addToCart = (ele) => {
        dispatch(addItem(ele))

    }

    useEffect(() => {
        if (propLocation && propLocation.length > 0) {
                const finalList = cards?.filter((ele) => {
                  if (
                    ele.Location.toLowerCase() == propLocation.toLowerCase()
                  ) {
                    return ele;
                  }
                });
            setPropList(finalList);
            dispatch(addlist(finalList));
        }
    },[propLocation])

    useEffect(() => {
      if (
        propList &&
        propList.length > 0 &&
        (selectedType.length > 0 || selectedBudget.length > 0)
      ) {
        const filteredList =
          propList &&
          propList.filter((ele) => {
            return (
             ( (selectedBudget.length > 0 && selectedType.length > 0) ? (parseInt(ele.Price) <= parseInt(selectedBudget)) &&
              selectedType.includes(ele.Bedrooms) : (selectedBudget.length > 0 ? (parseInt(ele.Price) <= parseInt(selectedBudget)) : selectedType.includes(ele.Bedrooms)))
            );
          });
          console.log("filt", filteredList);
        dispatch(addlist(filteredList));
      }
    }, [selectedBudget, selectedType]);
    
    const getButtonText = (data) => {
        const res =
          cart &&
          cart.filter((item) => {
            return item.id === data.id;
          });

        if (res && res.length > 0) {
            return true
        }
        else return false;
    }
    const showcards = () => {
        return list?.map((ele) => {
            return <Cards ele={ele} getButtonText={getButtonText} addToCart={addToCart}/>;
        });
    }
    
  return (
    <>
      {list.length === 0 ? (
        <div style={styling.emptyCart}>
          <p>
            <PiExclamationMarkFill /> Oops, No properties available.
          </p>
          <button style={styling.backBtn} onClick={() => navigate("/browse")}>
            Back to Homepage
          </button>
        </div>
      ) : (
        <div className="main-contr">
          <FilterSection />
          <div className="container">
            <div className="text">
              Showing property results for {propLocation.toUpperCase()}
            </div>
            <div className="card-cont">{showcards()}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index