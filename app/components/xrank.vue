<template>
	<div class="weui-panel weui-panel_access">
		<div class="weui-panel__bd">
			<!--<a :href="'#/detail/'+index" v-for="(n,index) in news" class="weui-media-box weui-media-box_appmsg">
				<xcontentheader :imgurl="n.pic|webp"></xcontentheader>
				<div class="weui-media-box__bd">
					<h4 class="weui-media-box__title">{{n.title}}</h4>
					<div class="index__author__src-ranking-board-item-"><img src="//s1.hdslb.com/bfs/static/mult/images/ico_up.png" alt="">
						<p>{{n.author}}</p>
						<div class="index__clear__src-ranking-board-item-"></div>
					</div>
					<div class="index__subInfo__src-ranking-board-item-">
						<div class="index__playAmount__src-ranking-board-item-"><img src="//s1.hdslb.com/bfs/static/mult/images/ico_play.png" alt="">
							<p>{{n.play}}</p>
							<div class="index__clear__src-ranking-board-item-"></div>
						</div>
						<div class="index__danmuAmount__src-ranking-board-item-"><img src="//s1.hdslb.com/bfs/static/mult/images/ico_danmu.png" alt="">
							<p>{{n.video_review}}</p>
							<div class="index__clear__src-ranking-board-item-"></div>
						</div>
						<div class="index__clear__src-ranking-board-item-"></div>
					</div>

				</div>
			</a>-->
			<a class="index__item__src-ranking-board-item-":href="'#/detail/'+index" v-for="(n,index) in news">
				<div class="index__leftMark__src-ranking-board-item-" v-if="index<3">
					<xcontent :Imgurl="Img[index]"></xcontent>
				</div>
				<div class="index__leftMark__src-ranking-board-item-" v-else>
					<p>{{index}}</p>
				</div>
				<xcontentheader :imgurl="n.pic|webp"></xcontentheader>
				<div class="index__desc__src-ranking-board-item-">
					<div class="index__title__src-ranking-board-item-">
						<p>{{n.title}}</p>
					</div>
					<div class="index__author__src-ranking-board-item-"><img src="//s1.hdslb.com/bfs/static/mult/images/ico_up.png" alt="">
						<p>{{n.author}}</p>
					</div>
					<div class="index__subInfo__src-ranking-board-item-">
						<div class="index__playAmount__src-ranking-board-item-"><img src="//s1.hdslb.com/bfs/static/mult/images/ico_play.png" alt="">
							<p>{{n.play}}</p>						
						</div>
						<div class="index__danmuAmount__src-ranking-board-item-"><img src="//s1.hdslb.com/bfs/static/mult/images/ico_danmu.png" alt="">
							<p>{{n.video_review}}</p>
						</div>				
					</div>
				</div>		
			</a>
		</div>
		<div class="weui-panel__ft" v-show="isLoadMore">
			<a href="javascript:void(0);" @click="loadMore()" class="weui-cell weui-cell_access weui-cell_link">
				<div class="weui-cell__bd">查看更多</div>
				<span class="weui-cell__ft"></span>
			</a>
		</div>
		<div class="weui-loadmore" v-show="isLoadMore">
			<i class="weui-loading"></i>
			<span class="weui-loadmore__tips">正在加载</span>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				//news: null,
				isLoadMore: true
			}
		},
		computed: {
			search() {
				return this.$store.state.count
			},
			news() {
				return this.$store.state.Ranks
			},
			Img(){
				return this.$store.state.Img
			}
		},
		methods: {
			loadMore() {
				console.log(this)
				this.$store.dispatch("setRank")
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
			},
			webp(input) {
				return input + '@234w_146h.webp'
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
	.weui-panel__ft {
		margin-bottom: 50px;
	}
	
	.weui-loadmore {
		margin-bottom: 70px;
	}
	.weui-panel__bd{
		    position: relative;
    width: 100%;
    padding-bottom: .42667rem;
    background-color: #f4f4f4;
    overflow: hidden;
	}
	.index__item__src-ranking-board-item-{
		    display: block;
    text-decoration: none;
    position: relative;
    width: 100%;
    margin-top: .768rem;
    opacity: 1;
	}
	.index__leftMark__src-ranking-board-item-{
		    position: relative;
    float: left;
    width: 2.176rem;
    height: 3.11467rem;
    background-color: #f4f4f4;
	}
	.index__leftMark__src-ranking-board-item- img{
		    display: block;
    width: .81067rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
	}
	.index__leftMark__src-ranking-board-item- p{
		    text-align: center;
    font-size: .59733rem;
    color: #999;
    line-height: 3.11467rem;
	}
	.index__imageContainer__src-ranking-board-item-{
		    position: relative;
    float: left;
    width: 4.992rem;
    height: 3.11467rem;
    overflow: hidden;
    border-radius: .17067rem;
    background-color: #e7e7e7;
    background-image: url(//s1.hdslb.com/bfs/static/mult/images/tv.png);
    background-position: .93867rem 0;
    background-size: 3.11467rem 3.11467rem;
    background-repeat: no-repeat;
	}
	.index__imageContainer__src-ranking-board-item- img{
		    display: block;
    width: 100%;
	}
	.index__desc__src-ranking-board-item-{
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
	.index__title__src-ranking-board-item-{
		    position: relative;
    width: 100%;
	}
	.index__title__src-ranking-board-item- p{
		    text-align: left;
    font-size: .59733rem;
    color: #212121;
    line-height: .8rem;
    word-break: break-all;
	}
	.index__author__src-ranking-board-item-{
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
	.index__author__src-ranking-board-item- p{
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
</style>