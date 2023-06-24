import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";

import Header from "./Header";
import { useState } from "react";
import ProductComponent from "./ProductComponent";

import "./lol.css";
const ProductListing = () => {
  const[ming,setdata] = useState([]);
  
  
  
  const fetchProducts = async () => {
    const response = await axios
      .get("https://reqres.in/api/users?page=1")
      .catch((err) => {
        console.log("Err: ", err);
      });
    setdata(response.data.data)
 
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const setsearch =(term)=>{
    if (term === "") { fetchProducts(); return; }

    const filterBySearch = ming.filter((item) => {
        if (item.first_name.includes(term)) { return item; }
      
    })
    setdata(filterBySearch);
    console.log(filterBySearch)

  }


  return (
    
    <div className="u">
        <Header setsearch={setsearch}/>
        <ProductComponent  ming={ming} />

      
      
    </div>
  );
};

export default ProductListing;
