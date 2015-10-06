import React from 'react';
require('./styles/footer.less');

export default class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = { footer: 'footer1'  };
  }

  render(){
    return (
      <div className='footr'>
        sixwings <br />
        &copy;2015
      </div>
    );
  }
}