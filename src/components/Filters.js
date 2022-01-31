import React from "react";

import "../styles/Filters.css";

function Filters(props) {
  const handleFiltersChange = () => {
    props.handleFiltersChange();
  };

  return (
    <>
      <div className="filters-bar">
        <div className="title">Filters</div>
        <div className="filter-switch" onClick={handleFiltersChange}>
          APPLY
        </div>
      </div>

      <p className="filter-name">Age</p>
      <div className="age">
        <input
          type="text"
          placeholder="From"
          className={!props.ageFrom || props.ageFrom === 0 ? "" : "filled"}
        ></input>

        <input
          type="text"
          placeholder="To"
          className={!props.ageTo || props.ageTo === 999 ? "" : "filled"}
        ></input>
      </div>

      <p className="filter-name">Gender</p>
      <div className="gender">
        <select>
          <option value=""></option>
          <option value="male">male</option>
        </select>
      </div>

      <p className="filter-name">Unit</p>
      <div className="unit">
        <select>
          <option value=""></option>
          <option value="mg">mg</option>
        </select>
      </div>

      <p className="filter-name">Strength</p>
      <div className="strength">
        <input
          type="text"
          placeholder="From"
          className={
            !props.strengthFrom || props.strengthFrom === 0 ? "" : "filled"
          }
        ></input>
        <input
          type="text"
          placeholder="To"
          className={
            !props.strengthTo || props.strengthTo === 99 ? "" : "filled"
          }
        ></input>
      </div>

      <p className="filter-name">Form</p>
      <div className="form">
        <select>
          <option value=""></option>
          <option value="capsule">capsule</option>
        </select>
      </div>

      <p className="filter-name">Expiry Date</p>
      <div className="exp-date">
        <input type="text" placeholder="From"></input>
        <input type="text" placeholder="To"></input>
      </div>
    </>
  );
}

export default Filters;
