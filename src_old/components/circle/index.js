import React from 'react';

class Circle extends React.Component {
  render() {
    return (
      <svg>
        <path d="M10,10 C20,20 30,20 40,10" stroke="black" fill="none"/>
      </svg>
    );
  }
}

export default Circle;