// var fetch = require('fetch');

//global $

import React from 'react';
import DataList from './data-list';
import SearchBar from './search/SearchBar';
import myAuth from '../config/auth';

import styles from '../styles/datalist-style';
let yeomanImage = require('../images/booli.png');

var auth = myAuth;
var querystring = require('querystring');



class AppComponent extends React.Component {
  constructor() {
     super();
     this.state = { data: [] }
   }


    setChoosen() {
        console.log(event.currentTarget)

      }


  render() {
    return (
      <div className='index container'>
        <img src={yeomanImage} alt='Yeoman Generator' />
        <div className='notice'><h2>Det perfekta appnamnet</h2></div>


        {this.props.children}


        <div className='col-md-6'>
          <h1>Footer</h1>
        </div>
      </div>
    );
  }
}


export default AppComponent;
