<template>
	<div>
		<xheader></xheader>
		<xdaohang></xdaohang>
		<xswiper></xswiper>
		<xindexrk></xindexrk>
		<xlist></xlist>
		<xfoot></xfoot>
		<xfan></xfan>	
		<!--<xsilde></xsilde>-->
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xswiper from "../xswiper.vue";
	import xdaohang from "../xdaohang.vue";
	import xindexrk from "../xindexrk.vue";
	import xlist from "../xlist.vue";
	import xfoot from "../xfoot.vue";
	import xfan from "../xfan.vue"
//	import xsilde from "../xsilde.vue";
	export default {
		components: {
			xheader,
			xdaohang,
			xindexrk,
			xswiper,
			xlist,
			xfoot,
			xfan
//			xsilde
		}
	}
</script>