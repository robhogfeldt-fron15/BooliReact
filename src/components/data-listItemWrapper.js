//global $
import React from 'react';

require('normalize.css');
require('styles/App.scss');

import $ from '../../bower_components/jquery/dist/jquery';


class DataListItemWrapper extends React.Component {
  constructor(props) {
    super(props);

  }

componentDidMount(){
  console.log(this.props.related);
}

  getIcon(val){
    if (val==='Lägenhet') {
      return  'home';
    }
    return 'business';
  }

  _handleClick(e){
    var parentLi =   $(e.target).closest('li').toggleClass( "hilight" );
    console.log(parentLi);
  }

  handleNewRoute(s){
    console.log(s);
    let path = `/single/${this.props.data.booliId}`;
    let singleId = this.props.data.booliId;
    let url = this.props.related;
  
    this.context.history.push({    // use push
      pathname: `/single/${this.props.data.booliId}`,
      query:  {singleId, url}

    })
 }

  render(){



    return(
      <li className='mdl-list__item mdl-list__item--three-line' id={this.props.data.booliId}>
        <span className='mdl-list__item-primary-content'>
          <i className='material-icons mdl-list__item-avatar'>{this.getIcon(this.props.data.objectType)}</i>
          <span>{this.props.data.location.address.streetAddress}</span>
          <span style={this.props.styles} className='mdl-list__item-text-body'>
            {this.props.data.objectType}  |  {this.props.data.location.region.countyName}
          </span>
        </span>

        <span className='mdl-list__item-secondary-content'>
          <a className='mdl-list__item-secondary-action' href='#'><i className='material-icons'>star</i></a>
        </span>
        <button onClick={this.handleNewRoute.bind(this)}>Btn</button>

      </li>)

    }

  }
  DataListItemWrapper.contextTypes = {
    history: React.PropTypes.any.isRequired
};
  export default DataListItemWrapper;
