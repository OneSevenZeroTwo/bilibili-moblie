<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide v-for="i in imgs" :key="i.id"><img :src="i.src" /></swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
	
</template>
<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		data() {
			return {
				imgs: [{
					id: 1,
					src: require("../images/1.jpg")
				}, {
					id: 2,
					src: require("../images/2.jpg")
				},{
					id: 3,
					src: require("../images/5.jpg")
				},{
					id: 4,
					src: require("../images/4.jpg")
				}],
				swiperOption: {
					autoplay: 3000
				}
			}
		}
	}
</script>
<style scoped>
	img {
		width: 100%;
		height: 100%;
	}
	.swiper-container {
    
    padding-top: 68px;
}
</style>