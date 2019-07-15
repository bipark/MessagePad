<template>

  <div class="home_base">
    <div>{{ curTime | moment("YYYY년  MMMM Do dddd") }}</div>
  </div>

</template>

<script>
	export default {
		name: "index.vue",

    data() {
			return {
				curTime: new Date()
      }
    },

    created() {
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
