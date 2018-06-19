import axios from 'axios';

function Proxy(){

}

Proxy.prototype.Weather=function(lat,lng)
{
	let url=`http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/${lat}/${lng}`;
	return axios.get(url)
	.then((response)=>{
		return response.data;
	})
	.catch((err)=>{
		throw err;
	})
}

Proxy.prototype.Location=function()
{
	let url=`http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/location`;
	// let url='http://localhost:5000/location';
	return axios.get(url)
	.then((response)=>{
		return response.data;
	})
	.catch((err)=>{
		throw err;
	});
}

export default new Proxy();