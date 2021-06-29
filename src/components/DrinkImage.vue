<template>
	<img :src="src" />
</template>

<script>
export default {
	name: 'DrinkImage',
	props: {
		src: {
			type: String,
			default: 'https://picsum.photos/200/300',
		},
	},
}
</script>

<style>
img {
	border-radius: 10px 5px 5px 10px;
}
</style>
