import React from 'react';
import {Link} from 'react-router';
require('./styles/header.less');

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = { header: 'header1' };
  }

  render(){
    return (
      <div className='headr'>
        <div className='linkcontainer'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Vegetables'>Vegetables</Link></li>
            <li><Link to='/Animals'>Animals</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}