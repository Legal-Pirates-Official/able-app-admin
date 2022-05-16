const axios = require('axios');

// const baseurl = "https://able-server.herokuapp.com";
const baseurl = 'http://192.168.0.103:8080';

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
	try {
		console.log(date, 'p');
		return await axios
			.post(`${baseurl}/meet/getslot/`, {
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
