<template>
	
<div class="grid grid-cols-4 gap-4 ">
		<HomeTile v-for="route in $router.options.routes" :route="route"></HomeTile>
</div>	
	
</template>

<script setup lang="ts">
	
	import HomeTile from "../components/HomeTile.vue"
 
</script>

<style>
	

</style>