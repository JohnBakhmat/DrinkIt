import axios from 'axios'
const API = axios.create({
	baseURL: 'https://the-cocktail-db.p.rapidapi.com',
	headers: {
		'Access-Control-Allow-Origin': '*',
		Accept: 'text/plain',
		'Content-Type': 'application/json',
		'x-rapidapi-key': 'af00fdaa26msh967926b6d1bb450p1f71e7jsnc25d6c03fcef',
		'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
	},
})
export default {
	getAll() {
		return API.get('/popular.php')
	},
}
