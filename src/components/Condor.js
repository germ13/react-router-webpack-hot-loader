import React from 'react';

export default class Condor extends React.Component {
  constructor(props){
    super(props);
    this.state = { condor: 'condor1' };
  }

  render(){
    return (
      <div>
        [Condor!!]
      </div>
    );
  }
}