<template>
	<div>
		<xheader></xheader>
		<xdaohang></xdaohang>
		<xchalist></xchalist>
		<!-- <router-view></router-view> -->
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xdaohang from "../xdaohang.vue";
	import xchalist from "../xchalist.vue"
	
	export default{
		components:{
			xheader,
			xdaohang,
			xchalist
		}
	}
</script>