import axios from 'axios';

// const baseurl = "https://able-server.herokuapp.com";
// const baseurl = 'http://172.16.7.176:8080';
const baseurl = 'http://192.168.1.8:8080';

export const aboutget = () => axios.get(`${baseurl}/admin/home/about`);
export const getEvents = ()=> axios.get(`${baseurl}/admin/home/events`);
export const getyoutube = ()=> axios.get(`${baseurl}/admin/home/youtube`);
