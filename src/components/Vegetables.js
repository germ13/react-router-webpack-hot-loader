import React from 'react';
import {Link} from 'react-router';

export default class Vegetables extends React.Component {
  constructor(props){
    super(props);
    this.state = { vegetables: 'vegetables1' };
  }

  render(){
    return (
      <div>
        [Vegetables]
        <ul>
          <li><Link to='/Vegetables/Apple'>Apple</Link></li>
          <li><Link to='/Vegetables/Bean'>Bean</Link></li>
          <li><Link to='/Vegetables/Carrot'>Carrot</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}