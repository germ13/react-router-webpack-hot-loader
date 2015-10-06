import React from 'react';

export default class Buffalo extends React.Component {
  constructor(props){
    super(props);
    this.state = { buffalo: 'buffalo1' };
  }

  render(){
    return (
      <div>
        [Buffalo]
      </div>
    );
  }
}