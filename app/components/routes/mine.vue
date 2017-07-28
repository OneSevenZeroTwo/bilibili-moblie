<!-- template中只能有一个根节点 -->
<template>
	<div>
		<xheader></xheader>
		<xmine></xmine>
	</div>
</template>
<script>
	import xheader from '../xheader.vue';
	import xmine from '../xmine.vue';

	export default {
		components:{
			xheader,
			xmine
		}
	}
</script>
<style scoped>
	body,html{
	    overflow: auto;
	    min-height: 100%;
	    background-color: #f4f4f4;
	    font: 1rem/1.5 'Microsoft YaHei', 'Droid Sans Fallback', SimHei, Arial, Helvetica, tahoma, sans-serif;
	}
	
</style>
