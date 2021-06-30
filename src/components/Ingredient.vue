<template>
	<div class="flex border border-opacity-40 border-l-0 border-r-0">
		<div class="w-3/5 text-right px-1 self-center">{{ ingredient }}</div>
		<div class="w-2/5 text-left px-1 self-center measure">
			{{ measure }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Ingredient',
	props: {
		ingredient: {
			type: String,
			default: 'Cum',
		},
		measurement: {
			type: String,
			default: '3 glass',
		},
	},
	computed: {
		measure() {
			let temp = this.measurement == null ? '\u2014' : this.measurement
			return temp
		},
	},
}
</script>

<style>
.measure {
	font-style: normal;
	font-size: 12px;
	color: rgba(0, 0, 0, 0.55);
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: rgba(159, 2, 255, 0.22);
}
</style>
