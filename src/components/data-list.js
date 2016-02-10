//global $
import React from 'react';

import DataListItemWrapper from './data-listItemWrapper';
import $ from '../../bower_components/jquery/dist/jquery';

var querystring = require('querystring');
var crypto = require('crypto');
var shasum = crypto.createHash('sha1');
require('normalize.css');
require('styles/App.scss');
require('../../app/bower_components/material-design-lite/material.js');
require('../../bower_components/bootstrap/dist/css/bootstrap.css');
var auth = {};
auth.callerId = 'boolireact';
auth.time = Math.round(Date.now() / 1000);
auth.unique = crypto.randomBytes(Math.ceil(16/2)).toString('hex').slice(0, 16);
auth.hash = shasum.update(auth.callerId + auth.time + '2daKX1MRh2mJdOtcEif5AFh9Cq9DPOonu75q9ufX' + auth.unique).digest('hex');
var url = 'http://robs-cors-server.herokuapp.com/http://api.booli.se/listings/?q=kalmar&' + querystring.stringify(auth);

class DataList extends React.Component {
  constructor() {
     super();
     this.state = { data: [] }
   }

  loadCommentsFromServer() {
  fetch(url, {
      method: 'get'
  }).then(function(response) {
      return	response.json();
  }).then(function(j){
     console.log(j.listings);
     this.setState({data: j.listings});
  }.bind(this));
}


  componentDidMount() {
      this.loadCommentsFromServer();
    }

_handleClick(){
  alert("test");
}

    render() {
    let self = this;
    return (
            <div>
              <ul className='demo-list-three mdl-list' id="parent-list" >
                {this.state.data.map(function(data, i) {
                       return <DataListItemWrapper data={data} key={data.booliId} onClick={self._handleClick.bind(this)}></DataListItemWrapper>
                     })}
              </ul>
            </div>)
            }
         }

export default DataList;
