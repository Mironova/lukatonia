import React from 'react';
import "material-design-lite/material.min.css";

class HelloWorld extends React.Component {
  render() {
    return(
      <div>
        <p>Hello World {this.props.name}</p>
      </div>
    );
  }
}

export default HelloWorld;
