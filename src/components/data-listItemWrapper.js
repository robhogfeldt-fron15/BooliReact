//global $
import React from 'react';

require('normalize.css');
require('styles/App.scss');
import { Link } from 'react-router';
import $ from '../../bower_components/jquery/dist/jquery';

class DataListItemWrapper extends React.Component {
  constructor(props) {
          super(props);

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

        <Link to={`/single/${this.props.data.booliId}`} params={{singleId: 1}}>Visa!</Link>
      </li>)

    }

  }
export default DataListItemWrapper;
