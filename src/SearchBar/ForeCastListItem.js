import React from 'react';
import './ForeCastListItem.css';
import {getDate} from '../utils/utils';
import icon from '../icons/icons.svg';

function ForecastListItem(props){

	let {result} = props;
		return (
				<tr>
					<td className="cell1 table-cell">
						<div className="forecast-day">
							<div className="today">
								<span><b>{result.day}</b></span>
								<span>{getDate(result.time)}</span>
							</div>
							<img id="current-icon-daily" src={`${icon}#${result.icon}`} alt="X"/> 
						</div>
					</td>
					<td className="forecast-summary table-cell ">{result.summary}</td>
					<td className="table-cell">
						<b>{`${Math.round(result.temperatureHigh)}`}&deg;{`/${Math.round(result.temperatureLow)}`}&deg;</b>
					</td>
					<td className="table-cell">{`${Math.round(result.precipProbability*100)}%`}</td>
				</tr>
			);

}

export default ForecastListItem;