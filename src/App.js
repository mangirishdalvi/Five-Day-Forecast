import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ForeCastList from './SearchBar/ForeCastList';
import Current from './SearchBar/Current';
import P from './SearchBar/weatherproxy';
// import { getTimezone } from './utils/utils';

const DEFAULT_LOCATION={
	lat:40.730610,
	lng:-73.935242
};

class Menu extends Component{
	render()
	{
		if(!this.props.forecast)
			return null;

		let currentClasses=['select-button'];
		let dailyClasses=['select-button'];

		if(this.props.selected==='now')
		{
			currentClasses.push('current-menu');
		}
		else
		{
			dailyClasses.push('current-menu');
		}

		// console.log('Curr: '+currentClasses.join(' '));
		// console.log('Daily: '+dailyClasses.join(' '));

		return (								
			<div className="menu">
				<button 
					name="now"
					className={currentClasses.join(' ')} 
					onClick={this.props.changeSelection}>
					Now
				</button>
				<button 
					name="daily" 
					className={dailyClasses.join(' ')} 
					onClick={this.props.changeSelection}>
					Daily
				</button>
			</div>
		);
	}
}

class App extends Component {

	constructor(props)
	{
		super(props);
		this.state={
				forecast:null,
				unit:'F',
				selected: 'now',
				loading: true,
				errors:null	
			};
	}

	changeUnit = (event)=>{
		if(this.state.unit!==event.target.name)
		{
			this.setState({unit:event.target.name});
		}
	}

	componentDidMount = function()
	{
		P.Weather(DEFAULT_LOCATION.lat,DEFAULT_LOCATION.lng)
		.then((res)=>{
			// console.log(res.currently.timezone)
			res.place='New York, NY, USA';
			this.searchBarClick(res);
		})
		.catch((err)=>{
			if(!err.response)
			{
				this.setErrors('Server is offline');
			}
			else
			{
				this.setErrors('Unable to retreive forecast');
			}
		});
	}

	setErrors= (err)=>
	{
		this.setState({errors:err});
	}

	searchBarClick=(forecast)=>
	{
		// console.log(get);
		this.setState({forecast:forecast,loading:false,errors:null});
	}

	setLoading = (load)=>{
		this.setState({loading:load});
	}

	changeSelection = (event) =>{
		this.setState({selected: event.target.name});
	}

	render() {
		let {errors}=this.state;
		let container=(errors)?(<div className="current"><span id="error">{errors}</span></div>)	
							  :(this.state.loading===true)?null
							  :(this.state.selected==='daily')?(
									<ForeCastList 
										load={this.state.loading} 
										forecast={this.state.forecast} 
										unit={this.state.unit} 
										id="container"/>
									):
									(
									<Current 
										place={this.state.forecast.place} 
										load={this.state.loading} 
										forecast={this.state.forecast.currently} 
										id="container" 
										unit={this.state.unit}/>
						);

		let functions={
			searchBarClick:this.searchBarClick,
			setLoading:this.setLoading,
			changeUnit:this.changeUnit,
			setErrors:this.setErrors
		};

		return (
			<div className="App">
				<div className="main">
					<SearchBar unit={this.state.unit} functions={functions} />
					<Menu 
						forecast={this.state.forecast} 
						selected={this.state.selected} 
						changeSelection={this.changeSelection} />
					<div id="load">{container}</div>
					<div id="loader" className="current">
						<i className="fa fa-spinner" id="spinner"></i>
					</div>					
				</div>
			</div>
		);
	}
}

export default App;
