<template>
	<div class="index__topArea__src-home-topArea-" data-reactid="2">
		<a class="index__logo__src-home-topArea-" href="#/index" data-reactid="3"><img src="../images/logo.png" data-reactid="4"></a>
		<a class="index__searchIcon__src-home-topArea-" href="//m.bilibili.com/search.html" data-reactid="5">
			<svg class="index__icon__src-home-topArea-" aria-hidden="true" data-reactid="6">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sousuo" data-reactid="7">
					<svg id="icon-sousuo" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M448 128c176 0 320 144 320 320 0 73.6-25.6 147.2-73.6 204.8l-19.2 22.4-22.4 19.2C595.2 742.4 521.6 768 448 768 272 768 128 624 128 448S272 128 448 128m0-64C236.8 64 64 236.8 64 448s172.8 384 384 384c92.8 0 179.2-35.2 246.4-89.6l211.2 208c6.4 6.4 12.8 9.6 22.4 9.6s16-3.2 22.4-9.6c12.8-16 12.8-35.2 0-48l-208-208c54.4-67.2 89.6-153.6 89.6-246.4 0-211.2-172.8-384-384-384z"></path></svg>
				</use>
			</svg>
		</a>
		<a class="index__mySpace__src-home-topArea-" href="//m.bilibili.com/space.html" data-reactid="8"></a>
		<a class="index__downloadBtn__src-home-topArea-" data-reactid="9">
			<p data-reactid="10">客户端</p>
		</a>
	</div>
</template>
<script>
	//	export default {
	//		computed: {
	//			title() {
	//				//暴力获取状态
	//				//this.$store.state.title
	//				return this.$store.getters.getCount
	//			}
	//		},
	//		directives: {
	//			scrollTop: {
	//				bind: function(el) {
	//					el.addEventListener("click", function() {
	//						console.log("置顶")
	//						var timer = setInterval(function() {
	//							document.body.scrollTop = document.body.scrollTop - 50;
	//							if(document.body.scrollTop == 0) {
	//								clearInterval(timer)
	//							}
	//						}, 1)
	//					})
	//				}
	//			}
	//		}
	//	}
</script>
<style scoped>

</style>


<!-- <template>
<mu-appbar>
	<mu-icon-button icon="tag_faces" slot="left" @click="toggle(true)"/>	
  	<mu-text-field icon="search" class="appbar-search-field"  slot="right"/>
  	<mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容" />
  	<mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
</mu-appbar>

<div>
    <mu-raised-button label="toggle drawer" @click="toggle()"/>
    <mu-raised-button label="undocked drawer" @click="toggle(true)"/>
    
</div>
</template> -->

<!-- <style lang="less">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
.mu-appbar{
	    background-color: #fb7299;
}
.mu-text-field-content{
	display:none;
}
.mu-text-field{
	width:100%;
}

</style> -->

// <script>
// export default {
//   data () {
//     return {
//       open: false,
//       docked: true
//     }
//   },
//   methods: {
//     toggle (flag) {
//       this.open = !this.open
//       this.docked = !flag
//     },

//   }
// }
// </script>