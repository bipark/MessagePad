<template>

  <div class="home_base">
    <div>{{ curTime | moment("dddd, MMMM Do YYYY") }}</div>
    <div>{{ curTime | moment.utc.format("HH:mm:ss") }}</div>
  </div>

</template>

<script>
	export default {
		name: "index.vue",

    data() {
			return {
				curTime: new Date()
      }
    }
	}
</script>

<style scoped>

  .home_base {
    color: white;
    font-size: 2em;
    font-weight: bold;
  }

</style>
