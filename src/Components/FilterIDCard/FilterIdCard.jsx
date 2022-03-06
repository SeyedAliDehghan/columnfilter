import { React, useState } from "react";
import style from "./FilterIdCard.style.module.css";


const FilterCard = ({data, setData,idFilterShow, setIdFilterShow,idCulmnShow, setidCulmnShow,idSearch, setIdSearch}) => {

  const AZIdDortHandler=()=>{
    setData(data.sort(function(a, b) { 
      return a.id - b.id  ||  a.id.localeCompare(b.id);
      
    }))
    setIdFilterShow(false)
  }
  const ZAIdDortHandler=()=>{
    setData(data.sort(function(a, b) { 
      return b.id - a.id  ||  b.id.localeCompare(a.id);
    }))
    setIdFilterShow(false)

  }
  return (
    <div className={style.cardMenu}>
      <h2>Id filter</h2>
      <div>
        <button onClick={()=>setIdFilterShow(false)}>x</button>
        <button onClick={()=>AZIdDortHandler()}>A to Z</button>
        <button onClick={()=>ZAIdDortHandler()}>Z to A</button>
      </div>
      <div>
        <input type="text" placeholder="Search" value={idSearch} onChange={(e)=>setIdSearch(e.target.value)} />
      </div>
      <div>
        <button onClick={()=>setIdSearch("")}>remove filter</button>
      </div>
      <div>
        <button onClick={()=>{setidCulmnShow(false);setIdFilterShow(false)}}>HideThisColumn</button>
      </div>
    </div>
  );
};

export default FilterCard;
