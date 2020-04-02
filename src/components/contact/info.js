import React from 'react';

const Info = (props) => {
    return (
    	 <div className="info">
            <div>
              <i className={props.icon}></i>
              <p>{props.text}</p>
            </div>
          </div>
    );
};

export default Info;