import React from 'react';

export default class Ant extends React.Component {
  constructor(props){
    super(props);
    this.state = { ant: 'ant1' };
  }

  render(){
    return (
      <div>
        [Ant]
      </div>
    );
  }
}