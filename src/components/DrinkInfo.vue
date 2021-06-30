<template>
	<div class="px-2 h-full max-h-full">
		<p class="title">{{ drink.strDrink }}</p>
		<div>
			<p class="components-title">Components</p>
			<div
				class="components-list"
				v-for="(ingredient, index) in ingredients"
				:key="index"
			>
				<Ingredient
					:ingredient="ingredient.ingredient"
					:measurement="ingredient.measure"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Ingredient from './Ingredient.vue'
export default {
	components: { Ingredient },
	computed: {
		ingredients() {
			let array = [
				{
					ingredient: this.drink.strIngredient1,
					measure: this.drink.strMeasure1,
				},
				{
					ingredient: this.drink.strIngredient2,
					measure: this.drink.strMeasure2,
				},
				{
					ingredient: this.drink.strIngredient3,
					measure: this.drink.strMeasure3,
				},
				{
					ingredient: this.drink.strIngredient4,
					measure: this.drink.strMeasure4,
				},
				{
					ingredient: this.drink.strIngredient5,
					measure: this.drink.strMeasure5,
				},
				{
					ingredient: this.drink.strIngredient6,
					measure: this.drink.strMeasure6,
				},
				{
					ingredient: this.drink.strIngredient7,
					measure: this.drink.strMeasure7,
				},
				{
					ingredient: this.drink.strIngredient8,
					measure: this.drink.strMeasure8,
				},
				{
					ingredient: this.drink.strIngredient9,
					measure: this.drink.strMeasure9,
				},
				{
					ingredient: this.drink.strIngredient10,
					measure: this.drink.strMeasure10,
				},
				{
					ingredient: this.drink.strIngredient11,
					measure: this.drink.strMeasure11,
				},
				{
					ingredient: this.drink.strIngredient12,
					measure: this.drink.strMeasure12,
				},
				{
					ingredient: this.drink.strIngredient13,
					measure: this.drink.strMeasure13,
				},
				{
					ingredient: this.drink.strIngredient14,
					measure: this.drink.strMeasure14,
				},
				{
					ingredient: this.drink.strIngredient15,
					measure: this.drink.strMeasure15,
				},
			]
			return array.filter(
				(item) => item.ingredient !== '' && item.ingredient !== null
			)
		},
	},
	props: {
		drink: {
			type: Object,
		},
	},
}
</script>

<style scoped>
@font-face {
	font-family: 'Mont-Thin';
	src: url(../assets/fonts/Mont-Thin.eot) format('eot'),
		url(../assets/fonts/Mont-Thin.ttf) format('ttf'),
		url(../assets/fonts/Mont-Thin.woff) format('woff'),
		url(../assets/fonts/Mont-Thin.woff2) format('woff2');
}
@font-face {
	font-family: 'Mont';
	src: url(../assets/fonts/Mont-Regular.eot) format('eot'),
		url(../assets/fonts/Mont-Regular.ttf) format('ttf'),
		url(../assets/fonts/Mont-Regular.woff) format('woff'),
		url(../assets/fonts/Mont-Regular.woff2) format('woff2');
}
.title {
	font-family: 'Mont';
	font-style: normal;
	font-size: 20px;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.55);
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: rgba(159, 2, 255, 0.22);
}
.components-title {
	font-family: 'Mont';
	font-style: normal;
	font-size: 18px;
}
.components-list {
	font-family: 'Mont';
	font-style: normal;
	font-size: 12px;
	font-weight: 600;
}
</style>
