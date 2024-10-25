/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [dataFromTable, setDataFromTable] = useState({});

  async function getDataFromTable() {
    try {
      const responseOfTableData = await axios.get(
        "http://localhost:4000/api/user/getData"
      );
      const dataInObjectFormat=transformTableData(responseOfTableData.data.dataFromTable)
      console.log("response we got",( dataInObjectFormat));
     
    setDataFromTable(dataInObjectFormat);
    } catch (error) {
      console.log("there is some error in getting data", error.message);
    }
  }

  const contextValue = {
    dataFromTable,
    getDataFromTable,
  };

  function transformTableData(data) {
    const keys = data[0].map(key => key.replace(/\s+/g, '').trim()); // First element (index 0) contains the keys
    const formattedData = data.slice(1).map((row) => {
      let obj = {};
      
      // Iterate through each value in the row and assign to corresponding key
      keys.forEach((key, index) => {
        obj[key] = row[index] || null; // Handle missing values by assigning null if undefined
      });
      
      return obj;
    });
  console.log('i am format function --->',formattedData);
  
    return formattedData;
  }
  

  useEffect(() => {
    console.log("i am use Effect");

    getDataFromTable();
    console.log("data we got is as below--->", dataFromTable.data);
  }, []);
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
