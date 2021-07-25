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
			overflow-x-hidden
		"
	></div>
	<div
		class="
			overflow-x-hidden
			absolute
			z-10
			grid
			row-auto
			grid-cols-1
			md:grid-cols-2
			lg:grid-cols-3 lg:gap-7
			bg-transparent
			gap-5
			p-3
		"
	>
		<div v-for="(drink, index) in this.drinkDB" :key="index">
			<Drink :drink="drink" />
		</div>
		<Search v-model="searchString" @search="this.proceedSearch()" />
	</div>
</template>

<script>
import Drink from '../components/Drink.vue'
import Search from '../components/Search.vue'
import db from '@/data/db.json'
import { ref } from 'vue'
// import CoctailDbService from '@/services/CoctailDb'
// import DrinkItDb from '@/services/DrinkItDb'

// @ is an alias to /src

export default {
	name: 'Home',
	components: {
		Drink,
		Search,
	},
	setup() {
		const drinkDB = ref(db)
		const searchString = ref('')

		const proceedSearch = () => {
			if (searchString.value == '') {
				drinkDB.value = db
				return
			}
			const filtered = drinkDB.value.filter((item) => {
				console.log(item)

				if (
					item.strDrink
						.toLowerCase()
						.includes(searchString.value.toLowerCase())
				) {
					return true
				} else {
					return false
				}
			})
			drinkDB.value = filtered
		}
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

		return {
			drinkDB,
			searchString,
			proceedSearch,
		}
	},
}
</script>
