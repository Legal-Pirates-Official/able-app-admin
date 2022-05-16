import axios from 'axios';
import { baseurl } from '../environment';


export const aboutget = () => axios.get(`${baseurl}/admin/home/about`);
export const getEvents = () => axios.get(`${baseurl}/admin/home/events`);
export const getyoutube = () => axios.get(`${baseurl}/admin/home/youtube`);
