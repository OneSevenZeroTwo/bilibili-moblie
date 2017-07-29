<template>
	<div class="weui-panel weui-panel_access" v-if="isloading">
		<div class="weui-panel__bd">
			<a class="index__item__src-ranking-board-item-" v-for="(n,index) in news" :href="'#/detail/'+n.aid">
				<div class="index__leftMark__src-ranking-board-item-" v-if="index<3">
					<xcontent :Imgurl="Img[index]"></xcontent>
				</div>
				<div class="index__leftMark__src-ranking-board-item-" v-else>
					<p>{{index+1}}</p>
				</div>
				<xcontentheader :imgurl="images[parseInt(Math.random()*29) + 1]"></xcontentheader>
				<div class="index__desc__src-ranking-board-item-">
					<div class="index__title__src-ranking-board-item-">
						<p>{{n.title}}</p>
					</div>
					<div class="index__author__src-ranking-board-item-"><img src="http://s1.hdslb.com/bfs/static/mult/images/ico_up.png" alt="">
						<p>{{n.author}}</p>
					</div>
					<div class="index__subInfo__src-ranking-board-item-">
						<div class="index__playAmount__src-ranking-board-item-"><img src="http://s1.hdslb.com/bfs/static/mult/images/ico_play.png" alt="">
							<p>{{n.play|num}}</p>
						</div>
						<div class="index__danmuAmount__src-ranking-board-item-"><img src="http://s1.hdslb.com/bfs/static/mult/images/ico_danmu.png" alt="">
							<p>{{n.video_review}}</p>
						</div>
					</div>
				</div>
			</a>
			<div @click="goTop()" class="index__toTop__src-ranking-board-" data-reactid="45" style="display: block;"><img src="http://s1.hdslb.com/bfs/static/mult/images/toTop1.png" alt="" data-reactid="46"></div>
		</div>
		<span @click="loadMore()" class="index__downLoadBtn__src-ranking-board-">点击查看更多</span>
	</div>
	<div v-else>
		<img src="../images/loading.gif" alt=""  style="width: 50%; padding-top: 20%;padding-left: 25%;"/>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				//news: null,
				isLoadMore: true,
			}
		},
		computed: {
			search() {
				return this.$store.state.count
			},
			news() {
				return this.$store.state.Ranks.slice(0,this.$store.state.list)
			},
			isloading() {
				return this.$store.state.isloading
			},
			Img() {
				return this.$store.state.Img
			},
			images() {
//				console.log(this.$route.path.slice(6))
				return this.$store.state.images
			},
			
		},
		methods: {
			setrans() {
				console.log(this)
				this.$store.state.rout=this.$route.path.slice(6),
				this.$store.state.isloading=false,
				this.$store.state.Ranks=[]
				this.$store.dispatch("setRank")
			},
			loadMore() {
				this.$store.state.list=this.$store.state.list+20
			},
			goTop(){
				var timer = setInterval(function() {
					document.body.scrollTop = document.body.scrollTop - 50;
					if(document.body.scrollTop == 0) {
						clearInterval(timer)
					}
				}, 1)
			},
		},
		mounted() {
			console.log(this.$http.jsonp,this.$route.path.slice(6))
			this.setrans();
//			this.$http.jsonp("http://api.bilibili.com/x/web-interface/ranking?day=3&jsonp=jsonp", {
//				params: {
//					rid:this.$store.state.rout,
//				}
//			}).then((data) => {
//				this.$store.state.Ranks = this.$store.state.Ranks.concat(data.data.data.list),
////				state.images=state.images.concat(data.data.data.list.pic)
//				console.log(this.$store.state.Ranks)
//			}, (err) => {
//
//			})

		},
		filters: {
			time(input) {
				console.log(input)
				return input
			},
			webp(input) {
				return input + '@234w_146h.webp'
			},
			num(input){
					if(input<10000){
						return input;
					}else if(input>10000){
						var n= Math.round((input/10000) * 100) / 100+"万";
						return n
					}
			}
		},
		components: {
			xcontentheader: {
				props: ["imgurl"],
				template: `
				<div class="index__imageContainer__src-ranking-board-item-">
					<img style="display: block;width: 100%;" @click="showGallery(imgurl)" :src="imgurl" alt="">
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
				props: ["Imgurl"],
				template: `
					<img  :src="Imgurl" alt="">
			`,
				methods: {
					showGallery(imgurl) {
						console.log(this.$store.state);
						this.$store.state.imgUrl = imgurl;
						this.$store.state.isShowGallery = true;
					}
				}
			}
		}
	}
</script>
<style scoped>
	.index__downLoadBtn__src-ranking-board-{
		    display: block;
    margin: .896rem .512rem 0;
    height: 1.536rem;
    line-height: 1.536rem;
    font-size: .55467rem;
    color: #fff;
    background-color: #fb7299;
    border-radius: .128rem;
    text-align: center;
	}
	.weui-panel__ft {
		margin-bottom: 50px;
	}
	
	.weui-loadmore {
		margin-bottom: 70px;
	}
	
	.weui-panel__bd {
		position: relative;
		width: 100%;
		padding-bottom: .42667rem;
		background-color: #f4f4f4;
		overflow: hidden;
	}
	
	.index__item__src-ranking-board-item- {
		display: block;
		text-decoration: none;
		position: relative;
		width: 100%;
		margin-top: 1.3rem;
		opacity: 1;
	}
	
	.index__leftMark__src-ranking-board-item- {
		position: relative;
		float: left;
		width: 2.176rem;
		height: 3.11467rem;
		background-color: #f4f4f4;
	}
	
	.index__leftMark__src-ranking-board-item- img {
		display: block;
		width: .81067rem;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
	}
	
	.index__leftMark__src-ranking-board-item- p {
		text-align: center;
		font-size: .59733rem;
		color: #999;
		line-height: 3.11467rem;
	}
	
	.index__imageContainer__src-ranking-board-item- {
		position: relative;
		float: left;
		width: 4.992rem;
		height: 3.11467rem;
		margin-top: 7px;
		overflow: hidden;
		border-radius: .17067rem;
		background-color: #e7e7e7;
		background-image: url(//s1.hdslb.com/bfs/static/mult/images/tv.png);
		background-position: .93867rem 0;
		background-size: 3.11467rem 3.11467rem;
		background-repeat: no-repeat;
	}
	.index__desc__src-ranking-board-item- {
		position: relative;
		margin-left: 7.68rem;
		margin-right: .512rem;
	}
	
	.index__author__src-ranking-board-item- {
		position: relative;
		width: 100%;
		height: 1.19467rem;
		margin-top: .08533rem;
	}
	
	.index__title__src-ranking-board-item- {
		position: relative;
		width: 100%;
	}
	
	.index__title__src-ranking-board-item- p {
		text-align: left;
		font-size: .59733rem;
		color: #212121;
		line-height: 1.0rem;
		word-break: break-all;
		max-height: 2.0rem;
		overflow: hidden;
	}
	
	.index__author__src-ranking-board-item- {
		position: relative;
		width: 100%;
		height: 1.19467rem;
		margin-top: .08533rem;
	}
	
	.index__author__src-ranking-board-item- img {
		position: relative;
		display: block;
		margin-top: .59733rem;
		width: .59733rem;
		float: left;
	}
	
	.index__author__src-ranking-board-item- p {
		margin-left: .85333rem;
		text-align: left;
		font-size: .512rem;
		color: #999;
		line-height: 1.19467rem;
	}
	
	.index__subInfo__src-ranking-board-item- {
		position: relative;
		width: 100%;
	}
	
	.index__playAmount__src-ranking-board-item- {
		position: relative;
		float: left;
	}
	
	.index__subInfo__src-ranking-board-item- img {
		display: inline-block;
		vertical-align: middle;
		width: .59733rem;
		float: left;
	}
	
	.index__subInfo__src-ranking-board-item- p {
		margin-left: .85333rem;
		text-align: left;
		font-size: .512rem;
		color: #999;
		line-height: .512rem;
	}
	
	.index__danmuAmount__src-ranking-board-item- {
		position: relative;
		margin-left: 3.84rem;
	}
	
	.index__danmuAmount__src-ranking-board-item- {
		display: inline-block;
		vertical-align: middle;
		width: .59733rem;
		float: left;
	}
	.index__toTop__src-ranking-board-{
		    position: fixed;
    bottom: 2.13333rem;
    right: .896rem;
    width: 1.70667rem;
    display: block;
	}
	.index__toTop__src-ranking-board- img{
		    display: block;
    width: 100%;
	}
	.index__subInfo__src-ranking-board-item-{
		padding-top: 4px;
	}
</style>