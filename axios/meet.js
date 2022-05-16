const axios = require("axios");

// const baseURL = "https://able-server.herokuapp.com";
<<<<<<< HEAD
const baseURL = 'http://192.168.0.101:8080';
=======
const baseURL = "http://172.16.7.176:8080";
>>>>>>> 51251ef120c8e90372cbe7638ceda8031db85992

export const addSlot = async (dates, values, meetLink, email) => {
    // var json = JSON.stringify(values);
    try {
        return await axios
            .post(`${baseURL}/meet/addslot`, {
                time_slot: values,
                date: dates,
                meetLink: meetLink,
                email: email,
            })
            .then((res) => {
                return res.data;
            });
    } catch (error) {
        console.log(error);
    }
};

export const getSlot = async (date) => {
	console.log(date, 'p');
	try {
		console.log(date, 'p');
		return await axios
			.post(`${baseURL}/meet/getslot/`, {
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
            .post(`${baseURL}/meet/mail/`, {
                email,
                name,
                date,
                timeslot,
                slots,
            })
            .then((res) => {
                return res.data;
            });
    } catch (error) {
        console.log(error);
    }
};
