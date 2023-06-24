
import React from 'react';

import "./lol.css";



const ProductComponent = ({ming}) => {
    


    
  
  return (
    <div className='ul'>
    { ming.map((product) => {
        const { id, avatar, first_name } = product;
        return (
          <div className="column" key={id}>
            
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={avatar}  />
                  </div>
                  <div className="content">
                    <div className="header">{first_name}</div>
                    
                  </div>
                </div>
              </div>
            
          </div>
        );
      })}
      </div>
    
      
      


  );
}

export default ProductComponent;


