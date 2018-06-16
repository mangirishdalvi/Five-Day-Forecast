import React, { Component } from 'react';
import './ForeCastListItem.css';
import {getDate} from '../utils/utils';


class ForecastListItem extends Component
{		
	static iconMap = function()
	{
		let res={}
		res['clear-day']='wi wi-day-sunny';
		res['clear-night']='wi wi-night-clear';
		res['rain']='wi wi-rain';
		res['snow']='wi wi-snow';
		res['sleet']='wi wi-sleet';
		res['wind']='wi wi-windy';
		res['fog']='wi wi-fog';
		res['cloudy']='wi wi-cloudy';
		res['partly-cloudy-day']='wi wi-day-cloudy';
		res["partly-cloudy-night"]='wi wi-night-alt-cloudy';
		return res;
	}

	render()
	{
		let {result} = this.props;
		let iconMap=ForecastListItem.iconMap();

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
}

export default ForecastListItem;