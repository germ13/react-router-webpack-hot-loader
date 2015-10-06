import React from 'react';

export default class Fruit extends React.Component {
  constructor(props){
    super(props);
    this.state = { fruit: 'fruit1'  };
  }

  render(){
    return (
      <div>
        [Fruit]
      </div>
    );
  }
}