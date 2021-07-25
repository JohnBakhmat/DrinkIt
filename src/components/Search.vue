<template>
	<form
		@submit.prevent="$emit('search')"
		class="
			fixed
			bg-white
			rounded-t-2xl rounded-b-4xl
			w-10/12
			h-12
			bottom-4
			mx-auto
			inset-x-0
			border-2 border-purple-900
			shadow-custom
			flex flex-row
			justify-end
		"
	>
		<input
			name="search"
			class="
				font-mont
				self-center
				w-10/12
				text-md text-center
				md:text-2xl
				lg:text-2xl lg:tracking-widest
				focus:outline-none
				font-bold
			"
			placeholder="Start typing to start searching..."
			type="search"
			v-bind="$attrs"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<button
			type="submit"
			class="self-center w-1/12 mr-3 lg:mr-0 text-2xl text-purple-700"
		>
			<i class="fas fa-search" />
		</button>
	</form>
</template>

<script>
export default {
	name: 'Search',
	emits: ['search'],
	props: {
		modelValue: {
			type: [String, Number],
			default: '',
		},
	},
}
</script>

<style></style>
