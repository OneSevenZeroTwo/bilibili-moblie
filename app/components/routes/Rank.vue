<template>
	<div>
		<xheader></xheader>
		<xdaohang></xdaohang>
		<xrank></xrank>
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
		import xdaohang from "../xdaohang.vue";
	import xrank from "../xrank.vue";
	export default {
		components: {
			xheader,
			xdaohang,
			xrank
		}
	}
</script>