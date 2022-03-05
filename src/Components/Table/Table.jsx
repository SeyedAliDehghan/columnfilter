import { React, useContext, useState } from "react";
import "./Table.css";
import FilterIdCard from "../FilterCard/FilterIdCard";
import { idFilterShowContext } from "../Context/DataContext";
import { dataContext } from "../Context/DataContext";
import { idSearchContext } from "../Context/DataContext";
import { idCulmnShowContext } from "../Context/DataContext";
const Table = () => {
  const { idFilterShow, setIdFilterShow } = useContext(idFilterShowContext);
  const { data, setData } = useContext(dataContext);
  const { idCulmnShow, setidCulmnShow } = useContext(idCulmnShowContext);
  const { idSearch, setIdSearch } = useContext(idSearchContext);
  // let arr=(data.filter = (data) => data.id === idSearch)
  console.log();

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            {idCulmnShow && <th onClick={() => setIdFilterShow(true)}>id</th>}
            <th>Task name</th>
            <th>Status</th>
            <th>Create Date</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((data)=>data.id.includes(idSearch)).map((item) => (
            <tr key={item.id}>
              {idCulmnShow && <td>{item.id}</td>}
              <td>{item.name}</td>
              <td>{item.status === false && "Not done"}</td>
              <td>{item.createDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {idFilterShow && <FilterIdCard />}
    </div>
  );
};

export default Table;
