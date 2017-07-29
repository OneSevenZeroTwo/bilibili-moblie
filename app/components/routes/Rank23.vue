<template>
	<div>
		<xrheader></xrheader>
		<xnav></xnav>
		<xrank channel="23"></xrank>
	</div>
</template>
<script>
	
	import xrheader from "../xrheader.vue";
		import xnav from "../xnav.vue";
	import xrank from "../xrank.vue";
	export default {
		components: {
			xrheader,
			xnav,
			xrank
		}
	}
</script>