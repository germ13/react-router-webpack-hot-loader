import React from 'react';
import {Link} from 'react-router';
require('./styles/animals.less');

export default class Animals extends React.Component {
  constructor(props){
    super(props);
    this.state = { animals: 'animals1' };
  }

  render(){
    return (
      <div className='animals'>
        [Animals]
        <ul>
          <li><Link to='/Animals/Ant'>Ant</Link></li>
          <li><Link to='/Animals/Buffalo'>Buffalo</Link></li>
          <li><Link to='/Animals/Condor'>Condor</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

