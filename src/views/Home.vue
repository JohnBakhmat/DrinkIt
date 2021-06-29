<template>
	<div
		class="
			fixed
			bg-gradient-to-b
			from-blue-700
			via-pink-600
			to-yellow-500
			w-screen
			h-screen
			z-0
		"
	></div>
	<div
		class="
			absolute
			z-10
			grid
			row-auto
			col-span-1
			bg-transparent
			mt-8
			gap-9
			w-screen
			p-3
		"
	>
		<div v-for="(drink, index) in this.drinkDB" :key="index">
			<Drink :drink="drink" />
		</div>
	</div>
</template>

<script>
import Drink from '../components/Drink.vue'
// import CoctailDbService from '@/services/CoctailDb'
// import DrinkItDb from '@/services/DrinkItDb'

// @ is an alias to /src

export default {
	name: 'Home',
	components: {
		Drink,
	},

	data() {
		return {
			drinkDB: [],
		}
	},
	mounted() {
		const db = require('@/data/db.json')
		this.drinkDB = db
		// DrinkItDb.getAll()
		// 	.then((resp) => {
		// 		this.drinkDB = resp.data.drinks
		// 		console.log(JSON.stringify(resp.data.drinks))
		// 	})
		// 	.catch((error) => console.error(error))
		// CoctailDbService.getAll()
		// 	.then((resp) => {
		// 		this.drinkDB = resp.data.drinks
		// 		console.log(JSON.stringify(resp.data.drinks))
		// 	})
		// 	.catch((error) => console.error(error))
	},
}
</script>
