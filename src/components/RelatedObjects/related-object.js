import React from 'react';
require('styles/relatedObject-style.scss');

class RelatedObject extends React.Component {
  constructor() {
     super();
     this.state = {image: ''}
   }


   componentDidMount() {
     this.setState({image: 'https://api.bcdn.se/cache/primary_' + this.props.data.booliId  +'_140x94.jpg'})
    }




  render() {
    var imgUrl = this.state.image;
           var divStyle = {
               backgroundImage: 'url(' + imgUrl + ')', backgroundRepeat: 'no-repeat', backgroundSize: '100% 50%'

           }

    return (
      <div>

      <div className="demo-card-wide mdl-card mdl-shadow--2dp col-xs-4" style={divStyle}>
  <div className="mdl-card__title">
    <h2 className="mdl-card__title-text">{this.props.data.location.address.streetAddress}</h2>
  </div>

  <ul className='demo-list-two mdl-list'>
    <li className="mdl-list__item mdl-list__item--two-line">
     <span className="mdl-list__item-primary-content">
       <i className="material-icons mdl-list__item-avatar">person</i>
       <span>Bryan Cranston</span>
       <span className="mdl-list__item-sub-title">62 Episodes</span>
     </span>
     <span className="mdl-list__item-secondary-content">
       <span className="mdl-list__item-secondary-info">Actor</span>
       <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
     </span>
   </li>

  </ul>

  <div className="mdl-card__actions mdl-card--border">
    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Visa
    </a>
  </div>
  <div className="mdl-card__menu">
    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i className="material-icons">share</i>
    </button>
  </div>
</div>
</div>
    );
  }
}


export default RelatedObject;
