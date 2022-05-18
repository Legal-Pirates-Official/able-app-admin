const axios = require("axios");
import { baseurl } from '../environment';


export const addSlot = async (dates, values, meetLink, email) => {
	// var json = JSON.stringify(values);
	try {
		return await axios
			.post(`${baseurl}/meet/addslot`, {
				time_slot: values,
				date: dates,
				meetLink: meetLink,
				email: email
			})
			.then((res) => {
				return res.data;
			});
	} catch (error) {
		console.log(error);
	}
};

export const getSlot = async (date) => {
<<<<<<< HEAD
	try {
		console.log(date, 'p');
		return await axios
			.post(`${baseurl}/meet/getslot/`, {
=======
	console.log(date, 'p');
	try {
		console.log(date, 'p');
		return await axios
			.post(`${baseURL}/meet/getslot/`, {
>>>>>>> 308eb6cbc267760119aa7b494a11e134e548d3c6
				date
			})
			.then((res) => {
				console.log('====================================');
				console.log(res);
				console.log('====================================');
				return res.data;
			});
	} catch (error) {
		console.log(error);
	}
};

export const sendMail = async (email, name, date, timeslot, slots) => {
	try {
		return await axios
			.post(`${baseurl}/meet/mail/`, {
				email,
				name,
				date,
				timeslot,
				slots
			})
			.then((res) => {
				return res.data;
			});
	} catch (error) {
		console.log(error);
	}
};
