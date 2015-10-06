import React from 'react';

export default class Carrot extends React.Component {
  constructor(props){
    super(props);
    this.state = { carrot : 'carrot1' };
    console.log('Carrot::constructor');
  }

  render(){
    console.log('Carrot::render');
    return (
      <div>
        [Carrot]
      </div>
    );
  }
}