import React from 'react';




class SearchBar extends React.Component {
  constructor() {
     super();
     this.state = { data: '', Lägenhet: false, Hus: false };
     this. handleChange = this. handleChange.bind(this);

}

handleChange(field, e) {
   var nextState = {};
   console.log(e.target);
   nextState[field] = e.target.checked
   this.setState(nextState)
 }

 handleStrChange(e) {
    this.setState({data: e.target.value})
  }


onSubmit(e) {
  e.preventDefault();

  this.props.onSubmit(
      this.state
   );
}


  render() {
    return (
          <div className="col-lg-12">
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="panel-heading clearfix">


                 <input
                  className="form-control"
                 	type="text"
                 	placeholder="Stad, gata"
                 	ref="filterTextInput"
                 	value= {this.state.filterText}
                 	onChange= {this.handleStrChange.bind(this)}
                 />
                 <div className="pull-right">
                   <label className="checkbox-inline">
                     <input type="checkbox"
                       checked={this.state.lgh}
                       onChange={this.handleChange.bind(this, 'Lägenhet')}
                     /> Lägenhet
                   </label>
                   <label className="checkbox-inline">
                     <input type="checkbox"
                       checked={this.state.hus}
                       onChange={this.handleChange.bind(this, 'Villa')}
                     /> Hus
                   </label>
                 </div>
               <button  type="submit">Sök</button>
                 </div>
             </form>
          </div>
    );
  }
}
export default SearchBar;
