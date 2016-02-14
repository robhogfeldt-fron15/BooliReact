//global $
import React from 'react';
import DataListItemWrapper from './data-listItemWrapper';
import SearchBar from './search/SearchBar';
import $ from '../../bower_components/jquery/dist/jquery';
import myAuth from '../config/auth';

require('normalize.css');
require('styles/App.scss');
require('../../app/bower_components/material-design-lite/material.js');
require('../../bower_components/bootstrap/dist/css/bootstrap.css');

var auth = myAuth;
var querystring = require('querystring');
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

  callApi(url) {
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

  handleSubmit(searchObj) {

    let area =  searchObj.data;
    let searchParams = [];
    let au = querystring.stringify(auth);
    for (var prop in searchObj) {
      if (searchObj[prop]===true) {
        searchParams.push(prop);
      }
    }
    console.log(searchObj.data + searchParams);
    var murl = `http://robs-cors-server.herokuapp.com/http://api.booli.se/listings/?q=${area}&objectType=${searchParams}&${au}`;
    this.callApi(murl);
  }

  render() {
    let self = this;
    return (
      <div>
        <div>
          <SearchBar onSubmit={this.handleSubmit.bind(this)}/>
        </div>
        <ul className='demo-list-three mdl-list' id="parent-list" >
          {this.state.data.map(function(data, i) {
            return <DataListItemWrapper data={data} key={data.booliId} onClick={self._handleClick.bind(this)}></DataListItemWrapper>
          })}
        </ul>
      </div>)
    }
  }

  export default DataList;
