<template>
	<div class="border template flex p-2 w-full">
		<DrinkImage
			class="w-2/5 self-center h-full object-cover"
			:src="drink.strDrinkThumb"
		/>
		<DrinkInfo class="w-3/5 self-center" :drink="drink" />
	</div>
</template>
<script>
import DrinkInfo from './DrinkInfo.vue'
import DrinkImage from './DrinkImage.vue'
export default {
	name: 'Drink',
	props: {
		drink: Object,
	},
	components: {
		DrinkInfo,
		DrinkImage,
	},
	methods: {},
	mounted() {},
	data() {
		return {}
	},
}
</script>
<style scoped>
.template {
	height: 273px;
	background: #ffffff;
	box-shadow: 0px 4px 0px 8px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
}
</style>
