import React from 'react';
import './Current.css';
import {FtoC,getTimezone,iconMap as iMap} from '../utils/utils';

function getWindDirection(windBearing)
{
	let direction;
	if(windBearing>=158&&windBearing<=203)
		direction='S';
	if(((windBearing>=0)&&(windBearing<=23))||windBearing>337)
		direction='N';
	if(windBearing>23&&windBearing<=68)
		direction='NE';
	if(windBearing>68&&windBearing<=113)
		direction='E';
	if(windBearing>113&&windBearing<=158)
		direction='SE';
	if(windBearing>158&&windBearing<=203)
		direction='S';
	if(windBearing>203&&windBearing<=248)
		direction='SW';
	if(windBearing>248&&windBearing<=293)
		direction='W';
	if(windBearing>293&&windBearing<=337)
		direction='NW';
	return direction;
}

function Current(props)
{
	const iconMap=iMap();
		const {forecast}=props;
		const currentTemperature=(props.unit==='F')?forecast.temperature
												   :FtoC(forecast.temperature);
		const apparentTemperature=(props.unit==='F')?forecast.apparentTemperature
													:FtoC(forecast.apparentTemperature);
		const dewPoint=(props.unit==='F')?forecast.dewPoint
										 :FtoC(forecast.dewPoint);
		// console.log("forecast:");
		// console.log(forecast);
		return (
			<div className="current">
				<div className="current-forecast">
					<div id="current-time">
						<span id="place">{props.place}</span>
						<span id="time">{getTimezone(forecast.time,forecast.timezone)}</span>
					</div>
					<img id="current-icon" src={`icons/icons.svg#${forecast.icon}`} />
					<div id="current-weather">
						<div className="current-temp">
							<span id="current-temp">{Math.round(currentTemperature)}&deg;{props.unit}</span>
							<span id="realfeel">Feels like {Math.round(apparentTemperature)}&deg;{props.unit}</span>
							<span id="summary">{forecast.summary}</span>
						</div>
					</div>
				</div>
				<div className="current-info">
					<div className="wind-info">
						<span><i id="wind-image" className={`wi wi-wind from-${forecast.windBearing}-deg`}></i></span>
						<span id="wind-summary">{`Wind from ${getWindDirection(forecast.windBearing)}`}</span>
						<span id="wind-speed">{`${forecast.windSpeed} mph`}</span>
					</div>
					<div className="misc-info">
						<span id="humidity">{`Humidity: ${Math.round(forecast.humidity*100)}%`}</span>
						<span id="dew-point">{`Dew Point: ${Math.round(dewPoint)}`}&deg;{props.unit}</span>
						<span id="visibility">{`Visibility: ${forecast.visibility} miles`}</span>
						<span id="uv-index">{`UV Index: ${forecast.uvIndex}`}</span>
						<span id="precip-probability">{`Precipitation: ${Math.round(forecast.precipProbability*100)}%`}</span>
					</div>
				
				</div>
			</div>
			);
}

export default Current;