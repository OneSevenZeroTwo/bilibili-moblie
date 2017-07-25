<template>
	<div>
		<xheader></xheader>
		<xswiper></xswiper>
		<xrank></xrank>
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
		import xswiper from "../xswiper.vue";
	import xrank from "../xrank.vue";
	export default {
		components: {
			xheader,
			xswiper,
			xrank
		}
	}
</script>