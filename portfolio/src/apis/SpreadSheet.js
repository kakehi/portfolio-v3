import axios from 'axios'; // The library to call API. Needs to npm install 

export default axios.create({
	baseURL: 'https://spreadsheets.google.com/feeds/list'
});