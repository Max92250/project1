import React, { useState } from "react";


const Header = ({setsearch}) => {
    
   
    const setTerm = (e)=> {
        
    
        
        setsearch(e);
        console.log(e);
     


      
    }
  return (
 
      <div className="ui container center block">
        <form  className="form"  >
            <input type="text"  placeholder="search name" 
            
            onChange={(e)=>setTerm(e.target.value)} className="input-res"/>
            
        </form>
      </div>
    
  );
};

export default Header;

