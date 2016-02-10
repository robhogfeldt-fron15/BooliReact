import React from 'react';
require('../../../app/bower_components/material-design-lite/material.js');
var querystring = require('querystring');
var crypto = require('crypto');
var shasum = crypto.createHash('sha1');
var auth = {};
auth.callerId = '[ID]';
auth.time = Math.round(Date.now() / 1000);
auth.unique = crypto.randomBytes(Math.ceil(16/2)).toString('hex').slice(0, 16);
auth.hash = shasum.update(auth.callerId + auth.time + '[KEY]' + auth.unique).digest('hex');


class SingleObject extends React.Component {
  constructor() {
     super();
     this.state = { data: {}, address: {}, image: ''
   }
}

   componentDidMount() {
     let id = this.props.params.singleId;
     var url = 'http://robs-cors-server.herokuapp.com/http://api.booli.se/listings/' + id + '?' + querystring.stringify(auth);
     fetch(url, {
         method: 'get'
     }).then(function(response) {
         return	response.json();
     }).then(function(j){
        console.log(j);
        this.setState({data: j.listings[0],image:'https://api.bcdn.se/cache/primary_' + id  +'_140x94.jpg', address:j.listings[0].location.address });
     }.bind(this));
    }




  render() {
    let broker = '';
    if (this.state.data.source) {
      broker = this.state.data.source.name;
    } else {
      broker = 'N/A';
    }

    return (
      <div>
        <div className="mdl-card mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-shadow--2dp">
        <div className="mdl-card__title">
          {this.state.address.streetAddress}
        </div>

        <div col-md-12>
          <div className="mdl-card__supporting-text left col-md-6">
            <img src={this.state.image} className='objImg'/>
          </div>
          <div className="mdl-card__supporting-text right col-md-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </div>
        </div>

        <div className="mdl-card__actions mdl-card--border">
          <div className="demo-list-action mdl-list">
            <div className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-avatar">euro_symbol</i>
                <span>{this.state.data.listPrice}</span>
              </span>
              <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
            </div>
            <div className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-avatar">contact_phone</i>

                <span>{broker}</span>
              </span>
              <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
            </div>
          </div>
          <a href={this.state.data.url} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Se annons på Booli
          </a>
        </div>

        <div className="mdl-card__menu">
          <div className="material-icons mdl-badge mdl-badge--overlap" data-badge="♥">home</div>
        </div>
      </div>
    </div>
    );
  }
}


export default SingleObject;
