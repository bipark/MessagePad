<template>

  <div>
    <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>
  </div>

</template>

<script>
	export default {
		name: "index.vue"
	}
</script>

<style scoped>

</style>
