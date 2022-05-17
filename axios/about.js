const axios = require('axios');

// const aboutforms = [
//     about_description,
//     card_title,
//     card_description,
//     card_image,
// ];
// const baseURL = "https://able-server.herokuapp.com";
// const baseURL = 'http://172.16.7.176:8080';
const baseURL = 'http://192.168.1.8:8080';


export const getAbout = async (values) => {
	return await axios.get(`${baseURL}/admin/about`);
};

export const postAbout = async (values, photo) => {
	try {
		return await axios.post(`${baseURL}/admin/about`, { values, photo });
	} catch (error) {
		console.log(error);
	}
};
