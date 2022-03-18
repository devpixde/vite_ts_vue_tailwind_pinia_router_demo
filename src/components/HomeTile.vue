<template>	
	<div class="HomeTile p-4" @click="$router.push( { path:route.path })">
		<div class="font-bold">
			{{route.name}}
		</div>
		<div class="font-italic mt-2">
			{{route.description}}
		</div>

	</div>

</template>
<script setup lang="ts">

	import { useRouter, useRoute, RouteConfig } from 'vue-router'

	const props = defineProps<{		
		route:RouteConfig
	}>() 

	function navigate(){

		
	}

	
</script>

<style scoped>
	.HomeTile{
		user-select: none;
		background-color: lightpink;
		border : 1px solid blue;
		margin: 10px;
		cursor: pointer;
		min-height: 100px;

	}
	.HomeTile:hover{
		background-color: lightcoral;
		color: white;
	}

</style>
