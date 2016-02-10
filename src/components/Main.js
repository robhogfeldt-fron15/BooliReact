// var fetch = require('fetch');

//global $
require('normalize.css');
require('styles/App.scss');
// require('../../app/bower_components/material-design-lite/material.js');
require('../../bower_components/bootstrap/dist/css/bootstrap.css');
import React from 'react';
import DataList from './data-list';


import styles from '../styles/datalist-style';
let yeomanImage = require('../images/booli.png');



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
