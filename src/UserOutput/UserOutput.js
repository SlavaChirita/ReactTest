import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
      <div>
          <p className="UserOutput">{props.username}</p>
      </div>
  );
}

export default userOutput;