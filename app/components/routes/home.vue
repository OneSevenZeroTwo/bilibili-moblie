<template>
	<div>
		<xheader></xheader>
		<xdaohang></xdaohang>
		<xswiper></xswiper>
		
		<xlist></xlist>
		<!--<xsilde></xsilde>-->
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xswiper from "../xswiper.vue";
	import xdaohang from "../xdaohang.vue";
	import xlist from "../xlist.vue";
//	import xsilde from "../xsilde.vue";
	export default {
		components: {
			xheader,
			xdaohang,
			xswiper,
			xlist
//			xsilde
		}
	}
</script>