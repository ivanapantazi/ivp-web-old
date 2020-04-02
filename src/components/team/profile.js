import React from 'react';

const Profile = (props) => {
    return (
      <div>
        <h4>{props.name}</h4>
        <span>{props.title}</span>
      </div>
    );
};

export default Profile;