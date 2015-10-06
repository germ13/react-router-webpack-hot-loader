import React from 'react';

export default class Apple extends React.Component {
  constructor(props){
    super(props);
    this.state = { apple : 'apple1' };
    console.log('Apple::construtor');
  }

  render(){
    console.log('Apple::render');
    return (
      <div>
        [Apple]
      </div>
    );
  }
}