import React from 'react';

const Item = (props) => {
    return (
    	<div className="col-md-3">
            <a className="portfolio-item" hrer="#">
		      <div className="details">
		        <h4>{props.name}</h4>
		        <span>{props.desc}</span>
		      </div>
		     </a>
         </div>
    );
};

export default Item;