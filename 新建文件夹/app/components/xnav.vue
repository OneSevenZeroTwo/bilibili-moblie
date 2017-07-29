<template>
	<div class="index__partBox__src-home-zone-" data-reactid="52">
		<div class="index__pagesContainer__src-home-zone-" data-reactid="53">
			<div  class="index__scrollContainer__src-home-zone-" id="scrollZone" data-reactid="54">
				<a href="javascript:void(0)" class="index__tab__src-home-zone-tab- " v-for="(n,index) in navs"  :href="'#/Rank/'+n.rid">
					<p>{{n.nav}}</p>
				</a>
				<div data-reactid="87"></div>
			</div>
		</div>
		<div class="index__switchContainer__src-home-zone-" data-reactid="88">
			<svg class="index__icon__src-home-zone-" aria-hidden="true" data-reactid="89">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-xialaxiao" data-reactid="90"></use>
			</svg>
		</div>
	</div>
</template>
<script>
	export default {
		computed: {
			qwerqwre() {
				return this.$store.state.qwerqwre
			},		
		},
		methods:{
	        winReload(e){
	        	console.log(e.target)
	          window.location.reload();
	        },
	   	},
	   	computed:{
	   		navs(){
	   			return this.$store.state.nav
	   		}
	   	}
		   
	}
</script>
<style scoped>
	.index__partBox__src-home-zone- {
    position: inherit;
    }
    
</style>