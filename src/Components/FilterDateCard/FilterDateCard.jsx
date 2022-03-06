import { React, useState } from "react";

import style from "./FilterDateCard.style.module.css";


const FilterDateCard = ({data, setData,dateFilterShow, setdateFilterShow,dateCulmnShow, setdateCulmnShow,dateSearch, setdateSearch}) => {
  const todaySearch=()=>{
    setdateSearch(new Date().toISOString().slice(0, 10))
  }
  const AZIdDortHandler=()=>{
    setData(data.sort(function(a, b) { 
      return a.dueDate - b.dueDate  ||  a.dueDate.localeCompare(b.dueDate);
      
    }))
    setdateFilterShow(false)
  }
  const ZAIdDortHandler=()=>{
    setData(data.sort(function(a, b) { 
      return b.dueDate - a.dueDate  ||  b.dueDate.localeCompare(a.dueDate);
    }))
    setdateFilterShow(false)

  }
  return (
    <div className={style.cardMenu}>
      <h2>date filter</h2>
      <div>
        <button onClick={()=>setdateFilterShow(false)}>x</button>
        <button onClick={()=>AZIdDortHandler()}>A to Z</button>
        <button onClick={()=>ZAIdDortHandler()}>Z to A</button>
      </div>
      <div>
        <input type="text" placeholder="Search" value={dateSearch} onChange={(e)=>setdateSearch(e.target.value)} />
      </div>
      <div>
        <button onClick={()=>setdateSearch("")}>remove filter</button>
      </div>
      <div>
        <button onClick={()=>todaySearch()}>only Today</button>
      </div>
      <div>
        <button onClick={()=>{setdateCulmnShow(false);setdateFilterShow(false)}}>HideThisColumn</button>
      </div>
    </div>
  );
};

export default FilterDateCard;
