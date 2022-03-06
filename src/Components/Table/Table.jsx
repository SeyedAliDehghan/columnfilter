import { React, useContext, useState, useEffect } from "react";
import "./Table.css";
import FilterIdCard from "../FilterIDCard/FilterIdCard";
import FilterStatusCard from "../FilterStatusCard/FilterStatusCard";
import FilterDateCard from "../FilterDateCard/FilterDateCard";

import axios from "axios";

const Table = () => {
  const dateSplit = (datestr) => {
    const date = new Date(datestr);

    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  };
  const [data, setData] = useState([
    { id: "1", title: "create index", completed: false, dueDate: "05-01-2022" },
  ]);

  const [idFilterShow, setIdFilterShow] = useState(false);
  const [idCulmnShow, setidCulmnShow] = useState(true);
  const [idSearch, setIdSearch] = useState("");

  const [statusFilterShow, setstatusFilterShow] = useState(false);
  const [statusCulmnShow, setstatusCulmnShow] = useState(true);
  const [statusSearch, setstatusSearch] = useState("");

  const [dateFilterShow, setdateFilterShow] = useState(false);
  const [dateCulmnShow, setdateCulmnShow] = useState(true);
  const [dateSearch, setdateSearch] = useState("");
  // let arr=(data.filter = (data) => data.id === idSearch)
  useEffect(() => {
    axios
      .get(`http://fakerestapi.azurewebsites.net/api/v1/Activities`, {
        Headers: "accept: text/plain; v=1.0",
      })
      .then((res) => {
        const books = res.data;
        setData(books);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }, []);

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            {idCulmnShow && (
              <th
                onClick={() => {
                  setIdFilterShow(true);
                }}
              >
                id
              </th>
            )}
            <th>Title</th>
            {statusCulmnShow && <th onClick={() => setstatusFilterShow(true)}>Status</th>}
            {dateCulmnShow && <th onClick={()=>{setdateFilterShow(true)}}>Date</th>}
          </tr>
        </thead>
        <tbody>
          {data
            .filter(
              (dataItem) =>
                dataItem.id.toString().includes(idSearch) &&
                dataItem.completed.toString().includes(statusSearch) &&
                dataItem.dueDate.toString().includes(dateSearch)
            )
            .map((item) => (
              <tr key={item.id}>
                {idCulmnShow && <td>{item.id}</td>}
                <td>{item.title}</td>
                {statusCulmnShow && (
                  <td>
                    {item.completed === false && "Not done"}
                    {item.completed === true && "Done"}
                  </td>
                )}
                {dateCulmnShow && <td>{dateSplit(item.dueDate)}</td>}
              </tr>
            ))}
        </tbody>
      </table>
      {idFilterShow && (
        <FilterIdCard
          data={data}
          setData={setData}
          idFilterShow={idFilterShow}
          setIdFilterShow={setIdFilterShow}
          idCulmnShow={idCulmnShow}
          setidCulmnShow={setidCulmnShow}
          idSearch={idSearch}
          setIdSearch={setIdSearch}
        />
      )}
      {statusFilterShow && (
        <FilterStatusCard
          data={data}
          setData={setData}
          statusFilterShow={statusFilterShow}
          setstatusFilterShow={setstatusFilterShow}
          statusCulmnShow={statusCulmnShow}
          setstatusCulmnShow={setstatusCulmnShow}
          statusSearch={statusSearch}
          setstatusSearch={setstatusSearch}
        />
      )}
      {dateFilterShow && (
        <FilterDateCard
          data={data}
          setData={setData}
          dateFilterShow={dateFilterShow}
          setdateFilterShow={setdateFilterShow}
          dateCulmnShow={dateCulmnShow}
          setdateCulmnShow={setdateCulmnShow}
          dateSearch={dateSearch}
          setdateSearch={setdateSearch}
        />
      )}
    </div>
  );
};

export default Table;
