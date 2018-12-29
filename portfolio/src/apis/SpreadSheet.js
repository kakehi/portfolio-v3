import axios from 'axios'; // The library to call API. Needs to npm install 

const ClientID= '473942831982-bkcno82uopkulvbdh9ao66ppc9cllhvm.apps.googleusercontent.com';
const ClientSecret= 'BijItcUeQXtC0gpP6xaIviWG';

export default axios.create({
	//baseURL: 'https://sheets.googleapis.com/v4/spreadsheets/'
	baseURL: 'https://spreadsheets.google.com/feeds/list'
});