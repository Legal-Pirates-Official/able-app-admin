const axios = require('axios');
import { baseurl } from '../environment';

// const aboutforms = [
//     about_description,
//     card_title,
//     card_description,
//     card_image,
// ];

export const getAbout = async (values) => {
	return await axios.get(`${baseurl}/admin/about`);
};

export const postAbout = async (values, photo) => {
	try {
		return await axios.post(`${baseurl}/admin/about`, { values, photo });
	} catch (error) {
		console.log(error);
	}
};
