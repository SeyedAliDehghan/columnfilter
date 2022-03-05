import { createContext, useState } from "react";

export const dataContext = createContext({
  data: [],
  setData: () => {},
});
export const idFilterShowContext = createContext({
  idFilterShow: Boolean,
  setIdFilterShow: () => {},
});
export const idCulmnShowContext = createContext({
  idCulmnShow: Boolean,
  setidCulmnShow: () => {},
});
export const idSearchContext = createContext({
  idSearch: "",
  setIdSearch: () => {},
});
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: "1", name: "create index", status: false, createDate: "05-01-2022" },
    {
      id: "2",
      name: "create robots.txt",
      status: false,
      createDate: "06-01-2022",
    },
    { id: "3", name: "renew host", status: false, createDate: "03-01-2022" },
  ]);
  const [idFilterShow, setIdFilterShow] = useState(false);
  const [idCulmnShow, setidCulmnShow] = useState(true);
  const [idSearch, setIdSearch] = useState("");
  return (
    <dataContext.Provider value={{ data, setData }}>
      <idFilterShowContext.Provider value={{ idFilterShow, setIdFilterShow }}>
        <idCulmnShowContext.Provider value={{ idCulmnShow, setidCulmnShow }}>
          <idSearchContext.Provider value={{ idSearch, setIdSearch }}>
            {children}
          </idSearchContext.Provider>
        </idCulmnShowContext.Provider>
      </idFilterShowContext.Provider>
    </dataContext.Provider>
  );
};

export default DataContextProvider;
