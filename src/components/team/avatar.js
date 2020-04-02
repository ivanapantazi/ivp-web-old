import React from 'react';

const Avatar = (props) => {
    return (
      <div className="pic"><img src={props.img} alt="profile"/></div> 
    );
};

export default Avatar;