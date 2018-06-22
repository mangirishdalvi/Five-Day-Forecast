import axios from 'axios';

function Proxy(){

}

Proxy.prototype.Weather=function(lat,lng)
{
	let url=`https://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/${lat}/${lng}`;
	return axios.get(url,{timeout:5000})
	.then((response)=>{
		// console.log(response);
		return response.data;
	})
	.catch((err)=>{
		// console.log(err);
		throw err;
	})
}

Proxy.prototype.Location=function()
{
	let url=`https://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/location`;
	// let url='http://localhost:5000/location';
	return axios.get(url)
	.then((response)=>{
		// console.log(response);
		return response.data;
	})
	.catch((err)=>{
		// console.log(err);
		throw err;
	});
}

export default new Proxy();