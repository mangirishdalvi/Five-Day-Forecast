import React from 'react';
import './ForeCastList.css';
import ForeCastListItem from './ForeCastListItem';
import {getDay, FtoC} from '../utils/utils';
let shortid = require('shortid');

function getHeaders()
{
	let headers=["DAY", 'DESCRIPTION',"HIGH/LOW", 'PRECIPITATION'];
	return headers.map((header,index)=>{
		if(header!=='HIGH/LOW')
		return (
			<th key={shortid.generate()} className={`forecast-headers table-cell col${index}`}>
				{header} 
			</th>
			);
		else
		return (
			  <th key={shortid.generate()} className={`forecast-headers table-cell col${index}`} >
				  {header}
			  </th>
		);
	});
}

function ForeCastList(props)
{
	const {forecast}=props;
		if(!forecast)
			return null;

		console.log(forecast.currently);
		let elements= forecast.daily.map((element)=>{
			 let {temperatureHigh,temperatureLow}=element;
			 let result={
			 	...element,
			 	day:getDay(element.time),
				 temperatureHigh:(props.unit==='F')?temperatureHigh
				 								   :FtoC(temperatureHigh),
				 temperatureLow:(props.unit==='F')?temperatureLow
				 								  :FtoC(temperatureLow)
			 };

			return <ForeCastListItem key={shortid.generate()} result={result} />

		});

		return (
				<table className="forecast-table">
					<thead>
					<tr>
					{getHeaders()}
					</tr>
			   		</thead>
			   		<tbody>
			   		{elements}
			   		</tbody>
			   	</table>
			   );
	
}

export default ForeCastList;