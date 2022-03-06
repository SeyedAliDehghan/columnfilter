import { React, useState } from "react";
import style from "./FilterStatusCard.style.module.css";

const FilterStatusCard = ({
  data,
  setData,
  statusFilterShow,
  setstatusFilterShow,
  statusCulmnShow,
  setstatusCulmnShow,
  statusSearch,
  setstatusSearch,
}) => {
  return (
    <div className={style.cardMenu}>
      <h2>Status filter</h2>
      <div>
        <button onClick={() => setstatusFilterShow(false)}>x</button>
      </div>
      <div>
        <button onClick={() => setstatusSearch(true)}>only done</button>
      </div>
      <div>
        <button onClick={() => setstatusSearch(false)}>not dones</button>
      </div>
      <div>
        <button onClick={() => setstatusSearch("")}>remove filter</button>
      </div>
      <div>
        <button
          onClick={() => {
            setstatusCulmnShow(false);
            setstatusFilterShow(false);
          }}
        >
          HideThisColumn
        </button>
      </div>
    </div>
  );
};

export default FilterStatusCard;
