<template>
	<!--<div class="weui-panel weui-panel_access">
		<div @click="changeDirection()" class="weui-panel__hd">图文组合列表{{search}}</div>
		<div class="weui-panel__bd">
			<a :href="'#/detail/'+index" v-for="(n,index) in news" class="weui-media-box weui-media-box_appmsg">
				<xcontentheader :imgurl="n.author.avatar_url"></xcontentheader>
				<div class="weui-media-box__bd">
					<h4 class="weui-media-box__title">{{n.title}}</h4>
					<xcontent :message="n.content"></xcontent>
					<p class="weui-media-box__desc"><span>来自于：{{n.author.loginname}}</span> <span>发布于：{{n.create_at|time}}</span></p>
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
	</div>-->

	<div class="index__different__src-home-different-" data-reactid="192">
		<div class="index__title__src-home-different-" data-reactid="193">
			<div class="index__icon1__src-home-different-" data-reactid="194">
				<svg class="index__icon__src-home-different-" aria-hidden="true" data-reactid="195">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-zhibo" data-reactid="196"></use>
				</svg>
			</div>
			<p data-reactid="197">动画</p>
		</div>
		<a class="index__more__src-home-different-" href="//m.bilibili.com/channel/1.html" data-reactid="198">
			<div class="index__words__src-home-different-" data-reactid="199">
				<p data-reactid="200">查看更多</p>
			</div>
			<div class="index__arrow__src-home-different-" data-reactid="201">
				<svg class="index__icon__src-home-different-" aria-hidden="true" data-reactid="202">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-gengduo" data-reactid="203"></use>
				</svg>
			</div>
		</a>
		<div class="index__content__src-home-different-" data-reactid="204">
			<a class="index__item__src-commonComponent-Item-" href="//m.bilibili.com/video/av12561768.html" data-reactid="205">
				<div class="index__imgContainer__src-commonComponent-Item-" data-reactid="206"><img src="//s1.hdslb.com/bfs/static/mult/images/tv.png" class="index__tv__src-commonComponent-Item-" alt="" data-reactid="207"><img src="http://i1.hdslb.com/bfs/archive/49cb555175463a1ae1b6ba5f3aef084e02bee922.jpg@339w_212h.webp" alt="" class="index__normal__src-commonComponent-Item-" data-reactid="208">
					<div class="index__info__src-commonComponent-Item-" data-reactid="209">
						<div class="index__playIcon__src-commonComponent-Item-" data-reactid="210">
							<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="211">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-bofangshu" data-reactid="212"></use>
							</svg>
						</div>
						<div class="index__play__src-commonComponent-Item-" data-reactid="213">
							<p data-reactid="214">5.8万</p>
						</div>
						<div class="index__danmuIcon__src-commonComponent-Item-" data-reactid="215">
							<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="216">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-danmushu" data-reactid="217"></use>
							</svg>
						</div>
						<div class="index__view__src-commonComponent-Item-" data-reactid="218">
							<p data-reactid="219">1302</p>
						</div>
					</div>
				</div>
				<div class="index__title__src-commonComponent-Item-" data-reactid="220">
					<p data-reactid="221">盘点 成龙历险记中十大面具封印的日本木乃伊</p>
				</div>
			</a>
			<a class="index__item__src-commonComponent-Item-" href="//m.bilibili.com/video/av12564900.html" data-reactid="222">
				<div class="index__imgContainer__src-commonComponent-Item-" data-reactid="223"><//s1.hdslb.com/bfs/static/mult/images/tv.png" class="index__tv__src-commonComponent-Item-" alt="" data-reactid="224"><img src="http://i1.hdslb.com/bfs/archive/49cb555175463a1ae1b6ba5f3aef084e02bee922.jpg@339w_212h.webp" alt="" class="index__normal__src-commonComponent-Item-" data-reactid="225">
					<div class="index__info__src-commonComponent-Item-" data-reactid="226">
						<div class="index__playIcon__src-commonComponent-Item-" data-reactid="227">
							<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="228">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-bofangshu" data-reactid="229"></use>
							</svg>
						</div>
						<div class="index__play__src-commonComponent-Item-" data-reactid="230">
							<p data-reactid="231">4129</p>
						</div>
						<div class="index__danmuIcon__src-commonComponent-Item-" data-reactid="232">
							<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="233">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-danmushu" data-reactid="234"></use>
							</svg>
						</div>
						<div class="index__view__src-commonComponent-Item-" data-reactid="235">
							<p data-reactid="236">446</p>
						</div>
					</div>
				</div>
				<div class="index__title__src-commonComponent-Item-" data-reactid="237">
					<p data-reactid="238">【王者荣耀MMD】HOPE？DOPE！峡谷防弹团魅力全开</p>
				</div>
			</a>
			<a class="index__item__src-commonComponent-Item-" href="//m.bilibili.com/video/av12499535.html" data-reactid="239">
				<div class="index__imgContainer__src-commonComponent-Item-" data-reactid="240"><img src="//s1.hdslb.com/bfs/static/mult/images/tv.png" class="index__tv__src-commonComponent-Item-" alt="" data-reactid="241"><img src="http://i1.hdslb.com/bfs/archive/49cb555175463a1ae1b6ba5f3aef084e02bee922.jpg@339w_212h.webp" alt="" class="index__normal__src-commonComponent-Item-" data-reactid="242">
					<div class="index__info__src-commonComponent-Item-" data-reactid="243">
						<div class="index__playIcon__src-commonComponent-Item-" data-reactid="244">
							<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="245">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-bofangshu" data-reactid="246"></use>
							</svg>
						</div>
						<div class="index__play__src-commonComponent-Item-" data-reactid="247">
							<p data-reactid="248">9561</p>
						</div>
						<div class="index__danmuIcon__src-commonComponent-Item-" data-reactid="249">
							<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="250">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-danmushu" data-reactid="251"></use>
							</svg>
						</div>
						<div class="index__view__src-commonComponent-Item-" data-reactid="252">
							<p data-reactid="253">394</p>
						</div>
					</div>
				</div>
				<div class="index__title__src-commonComponent-Item-" data-reactid="254">
					<p data-reactid="255">挖掘你可能没看过的童话故事的蜡笔小新【第四弹】</p>
				</div>
			</a>
			<a class="index__item__src-commonComponent-Item-" href="//m.bilibili.com/video/av12531662.html" data-reactid="256">
				<div class="index__imgContainer__src-commonComponent-Item-" data-reactid="257"><img src="//s1.hdslb.com/bfs/static/mult/images/tv.png" class="index__tv__src-commonComponent-Item-" alt="" data-reactid="258"><img src="//i0.hdslb.com/bfs/archive/883043fc02dbd4fbf3b30c78b87c7e1378eefc52.png@339w_212h.webp" alt="" class="index__normal__src-commonComponent-Item-" data-reactid="259">
					<div class="index__info__src-commonComponent-Item-" data-reactid="260">
						<div class="index__playIcon__src-commonComponent-Item-" data-reactid="261">
							<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="262">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-bofangshu" data-reactid="263"></use>
							</svg>
						</div>
						<div class="index__play__src-commonComponent-Item-" data-reactid="264">
							<p data-reactid="265">23</p>
						</div>
						<div class="index__danmuIcon__src-commonComponent-Item-" data-reactid="266">
							<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="267">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-danmushu" data-reactid="268"></use>
							</svg>
						</div>
						<div class="index__view__src-commonComponent-Item-" data-reactid="269">
							<p data-reactid="270">0</p>
						</div>
					</div>
				</div>
				<div class="index__title__src-commonComponent-Item-" data-reactid="271">
					<p data-reactid="272">【文炼音MAD】轮到无赖派来给大家洗脑了</p>
				</div>
			</a>
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
					return this.$store.state.news
				}
			},
			methods: {
				loadMore() {
					this.$store.dispatch("setNews")
				},
				changeDirection() {
					this.$store.state.direction = "right"
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
<style scoped>
	/*.weui-panel__ft {
		margin-bottom: 50px;
	}
	
	.weui-loadmore {
		margin-bottom: 70px;
	}*/
</style>