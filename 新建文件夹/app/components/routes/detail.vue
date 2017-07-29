<template>
	<div>
		<xheader></xheader>
		<xvideo></xvideo>
		<xdetail></xdetail>
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xvideo from "../xvideo.vue";
	import xdetail from "../xdetail.vue";

	export default {
		components: {
			xheader,
			xvideo,
			xdetail,
		}
	}
</script>