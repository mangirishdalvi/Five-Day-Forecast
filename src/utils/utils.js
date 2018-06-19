// var moment=require('moment-timezone');
import * as moment from 'moment-timezone'

function getDay(time)
{
	var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
	return days[new Date(time*1000).getDay()];
}

function getDate(time)
{
	const months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
	const month=months[new Date(time*1000).getMonth()];
	const day=new Date(time*1000).getDate();
	return `${month} ${day}`;
}

function FtoC(temp)
{
	return (temp-32)*5/9;
}

function CtoF(temp)
{
	return temp*9/5+32;
}

function getTimezone(timestamp,timezone)
{
	var a=moment(timestamp*1000).tz(timezone);
	// console.log(a);
	return a.format('h:mm A');
}

export function iconMap()
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

export {getDay,getDate,FtoC,CtoF,getTimezone};