import React, { useEffect, useState } from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addTypeFilter, addBudgetFilter, addlist } from '../../Slices/propertyslice';

const Index = () => {
    const propLoc = useSelector((store) => store.property.location) || [];
    const [budgetfilters, setbudgetfilters] = useState("");
    const [typefilters, settypefilters] = useState([]);
    const dispatch = useDispatch();
    
    const handlechange = (key, val, ischecked) => {
        if (key === "budget") {
            setbudgetfilters(val)
            
        }
        else {
            settypefilters([...typefilters, val]);
        }
        
    }
        useEffect(() => {
        //   if (
        //     propList &&
        //     propList.length > 0 &&
        //     (selectedType.length > 0 || selectedBudget.length > 0)
        //   ) {
        //     const filteredList =
        //       propList &&
        //       propList.map((ele) => {
        //         return parseInt(propList.price) <= parseInt(budgetfilters);
        //       });
        //     dispatch(addlist(filteredList));
        //   }

          dispatch(addTypeFilter(typefilters));
          dispatch(addBudgetFilter(budgetfilters));
        }, [typefilters, budgetfilters]);


    
  return (
    <div className="filters-contr">
      <div className="filters">
        <p className="heading">Applied Filters</p>
        <div className="inner">
          <p className="head">Selected Location</p>
          <p className="loc">{propLoc.toUpperCase()}</p>
        </div>
        <div className="inner">
          <div className="head">Budget</div>
          <div
            style={{
              display: "flex",
              marginTop: "6px",
              flexDirection: "column",
            }}
          >
            {["30", "50", "70", "90", "110"].map((ele) => {
              return (
                <div className="input-div">
                  <input
                    type="radio"
                    name="budget"
                    onChange={() => handlechange("budget", ele)}
                  ></input>
                  <label>Less than {ele}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="head">Property Type</div>
          <div
            style={{
              display: "flex",
              marginTop: "6px",
              flexDirection: "column",
            }}
          >
            {["1", "2", "3", "4"].map((ele) => {
              return (
                <div className="input-div">
                  <input
                    type="checkbox"
                    onChange={() => handlechange("type", ele)}
                  ></input>
                  <label>{ele}BHK</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;