import React from 'react';
import './ForeCastListItem.css';
import {getDate,iconMap as iMap} from '../utils/utils';

function ForecastListItem(props){

	let {result} = props;
		let iconMap=ForecastListItem.iMap();

		return (
				<tr>
					<td className="cell1 table-cell">
						<div className="forecast-day">
							<div className="today">
								<span><b>{result.day}</b></span>
								<span>{getDate(result.time)}</span>
							</div>
							<i className={iconMap[result.icon]}></i>							
						</div>
					</td>
					<td className="forecast-summary table-cell ">{result.summary}</td>
					<td className="table-cell"><b>{`${Math.round(result.temperatureHigh)}`}&deg;{`/${Math.round(result.temperatureLow)}`}&deg;</b></td>
					<td className="table-cell">{`${Math.round(result.precipProbability*100)}%`}</td>
				</tr>
			);

}

export default ForecastListItem;