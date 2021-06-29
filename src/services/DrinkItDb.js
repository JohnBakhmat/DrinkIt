import axios from 'axios'
const API = axios.create({
	baseURL: 'http://192.168.0.105:8080/data',
})
export default {
	getAll() {
		return API.get('db.json')
	},
}
