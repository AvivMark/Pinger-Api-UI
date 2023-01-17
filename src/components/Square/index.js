import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <svg>
        <rect x="25" y="25" width="50" height="50" fill="blue" />
      </svg>
    );
  }
}

export default Square;