import React from 'react';
import Header from './Header';
import Footer from './Footer';
require('./styles/main.less');

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = { main: 'main1' };
  }

  render(){
    return (
      <div className='main'>
        <Header />
        [This is main]
        {this.props.children}
        {console.log(this.props.children)}
        <Footer />
      </div>
    );
  }
}