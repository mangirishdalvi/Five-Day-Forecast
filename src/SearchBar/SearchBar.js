import React, { Component } from 'react';
import './SearchBar.css';
import Autocomplete from 'react-google-autocomplete';
import Proxy from './weatherproxy';
// import {getDay, FtoC,getTimezone} from '../utils/utils';

function UnitSelector(props)
{
	let cClass=(props.unit==='C')?'selected':'';
	let fClass=(props.unit==='F')?'selected':'';
		return (								
			<div className="unit-selector">
				<button name="C" className={cClass+' unit-button height-set'} onClick={props.changeUnit}>&deg;C</button>
				<button name="F" className={fClass+' unit-button height-set'} onClick={props.changeUnit}>&deg;F</button>
			</div>
		);
}

class SearchBar extends Component
{
	constructor(props)
	{
		super(props);
		this.state={
			place:null,
			selected:false,
		};
	}

	handleChange= (e)=>{
		this.setState({selected:false});
	}

	onSelect=(place) => {
      this.setState({place:place,selected:true});
    }

    handleClick= (e) => {
    	e.preventDefault();
    	if(this.state.selected)
    	{
			this.props.functions.setLoading(true);
    		const lat=this.state.place.geometry.location.lat();
			const lng=this.state.place.geometry.location.lng();
    		Proxy.Weather(lat,lng).
    		then((values)=>{
				values.place=this.state.place.formatted_address;
				// console.log(this.state.place);
    			this.props.functions.searchBarClick(values);
    		});
    	}
    }


	render()
	{
		return (
			<div className="search-form">
			<form onSubmit={this.handleClick} className="height-set">
				<Autocomplete name='search' className='search height-set' onChange={this.handleChange} onPlaceSelected={this.onSelect} />
				<button type="submit" id="submit-button" name="button" className="height-set"><span className="fas fa-search"></span></button>
			</form>
				<UnitSelector unit={this.props.unit} changeUnit={this.props.functions.changeUnit} />
			</div>
		);
	}
}

export default SearchBar;