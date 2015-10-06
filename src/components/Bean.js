import React from 'react';

export default class Bean extends React.Component {
  constructor(props){
    super(props);
    this.state = { bean : 'Bean1' };
    console.log('Bean::constructor');
  }

  render(){
    console.log('Bean::render');
    return (
      <div>
        [Bean]
      </div>
    );
  }
}