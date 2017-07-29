<!-- <template>
<div>
	

<mu-tabs :value="activeTab" @change="handleTabChange">
  <mu-tab value="tab1"  title="全部" href=""/>
  <mu-tab value="tab2"  title="番剧" href="#/index/test"/>
  <mu-tab value="tab3" title="分类" />
  <mu-tab value="tab4" icon="expand_more"/>
  <mu-icon-button icon="expand_more" slot="right"/>
</mu-tabs>
	<div v-if="activeTab === 'tab1'">
    
  </div>
  <div v-if="activeTab === 'tab2'">
    
  </div>
  <div v-if="activeTab === 'tab3'">
     
  </div>
 </div> 
</template>

<script>

export default {
	
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      window.alert('tab active')
    }
  }
}
</script>
<style>

</style> -->

<template>
	<div class="index__partBox__src-home-zone-" data-reactid="52">
		<div  class="index__pagesContainer__src-home-zone-" data-reactid="53">
			<div  class="index__scrollContainer__src-home-zone-" id="scrollZone" data-reactid="54">
				<a  class="index__curTab__src-home-zone-tab-" href="#/index" data-reactid="55">
					<p data-reactid="56">首页</p>
				</a>
				<a :href="'#/channel?='+index" v-for="(n,index) in chan" class="index__tab__src-home-zone-tab- "  data-reactid="57" @click="test(n)">
					<p v-for="(obj,index) in n" v-if="index==0" data-reactid="58">{{obj.tname}}</p>
				</a>
				
				<div data-reactid="87"></div>
			</div>
		</div>
	<!-- <div class="index__switchContainer__src-home-zone-" data-reactid="88">
		<svg class="index__icon__src-home-zone-" aria-hidden="true" data-reactid="89">
			<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-xialaxiao" data-reactid="90">
				<path d="M515.2 649.6L169.6 304c-12.8-12.8-32-12.8-44.8 0s-12.8 35.2 0 48l368 364.8c12.8 12.8 32 12.8 44.8 0l361.6-361.6c12.8-12.8 12.8-35.2 0-48s-32-12.8-44.8 0L515.2 649.6z"></path>
			</use>
		</svg>
	</div> -->
	</div>
</template>
<style>
	.index__partBox__src-home-zone- .index__pagesContainer__src-home-zone- {
    
    width: 95%;
    
}
.index__partBox__src-home-zone-{
	top:1rem;
}
.index__tab__src-home-zone-tab- p{
	width: inherit;
}
</style>
<script>
export default {
		data() {
				return {
					//news: null,
					isLoadMore: true
				}
			},
			computed: {
				// search() {
				// 	return this.$store.state.count
				// },
				chan() {
					return this.$store.state.chan
				},
				index(){
					return this.$store.state.index
				}
			},
			methods: {
				loadMore() {
					this.$store.dispatch("setchannel")
				},
				// changeDirection() {
				// 	this.$store.state.direction = "right"
				// }
				test(e){
				// console.log(11111)
				// console.log(e)
				this.$store.state.index=e
				
				}
			},
			mounted() {
				this.loadMore();
				console.log(this.$http)

			},
			filters: {
				time(input) {
					console.log(input)
					return input
				}
			},
			components: {
				xcontentheader: {
					props: ["imgurl"],
					template: `
				<div class="weui-media-box__hd">
					<img @click="showGallery(imgurl)" class="weui-media-box__thumb" :src="imgurl" alt="">
				</div>
			`,
					methods: {
						showGallery(imgurl) {
							console.log(this.$store.state);
							this.$store.state.imgUrl = imgurl;
							this.$store.state.isShowGallery = true;
						}
					}
				},
				xcontent: {
					props: ["message"],
					template: `
				<p class="weui-media-box__desc" v-html="newMessage"></p>
			`,
					computed: {
						newMessage() {
							return this.message
						}
					}
				}
			}
	}
</script>