<template>
	<div>
		<xheader></xheader>
		<xnav></xnav>
		<xrank channel="1"></xrank>
	</div>
</template>
<script>
	
	import xheader from "../xheader.vue";
		import xnav from "../xnav.vue";
	import xrank from "../xrank.vue";
	export default {
		components: {
			xheader,
			xnav,
			xrank
		}
	}
</script>