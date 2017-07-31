<!-- template中只能有一个根节点 -->
<template>
	<div>
		<!-- <xheader></xheader> -->
		<nav class="nav-bar">
                <div class="nav-wrp">
                    <a href="#/index" class="logo"></a>
                    <a class="cell" href="#/mine/history"><i class="nav-icon bili-icon-history"></i></a>
                    <a class="cell" href=""><i class="nav-icon bili-icon-search"></i></a>
                </div>
        </nav>
		<!-- <xmine></xmine> -->
		
		<div class="wrapper">	
			<div class="flex-bar main">
				<ul class="flex-bar-in">
					<li class="nav-item nav-index">
						<a href="#/index" title="首页">首页</a>
					</li>
					<li class="nav-item nav-channel">
						<a href="#/chanel" title="频道">频道</a>
					</li>
					<li class="nav-item nav-live">
						<a href="//live.bilibili.com/h5/" title="直播">直播</a>
					</li>
					<li class="nav-item nav-rank">
						<a href="#/Rank" title="排行">排行</a>
					</li>
					<li class="nav-item nav-space on">
						<a href="#/mine/user" title="我的">我的</a>
					</li>
				</ul>
			</div>

			<div>
				<swiper></swiper>
				<list></list>
			</div>

			<footer>
				<p class="clearfix">
					<a id="change_to_computer" href="javascript:void(0)" class="bottom-btn"><i class="icons icons-computer"></i><span>电脑版</span></a>
					<a id="link_to_app" href="bilibili://" class="bottom-btn" target="_self"><i class="icons icons-app"></i>客户端</a>
					<a @click="toTop()" id="back_to_top" class="bottom-btn"><i class="icons icons-top"></i>返回顶部</a>
				</p>
				<p>哔哩哔哩 沪ICP备13002172号-3</p>
				<p>信息网络传播视听节目许可证：<span>0910417</span></p>
			</footer>
		</div>
	</div>
</template>
<script>
	import swiper from "../swiper.vue";
	import list from "../list.vue";
	import xheader from '../xheader.vue';
	// import xmine from '../xmine.vue';

	export default {
		components:{
			xheader,
			swiper,
			list
			// xmine,
		},
		methods:{
			toTop(){
				var timer = setInterval(function() {
					document.body.scrollTop = document.body.scrollTop - 200;
					if(document.body.scrollTop == 0) {
						clearInterval(timer)
					}
				}, 100)
			}
		}
	}
</script>
<style scoped>
	@import 'https://static.hdslb.com/mobile/css/normalize.css';
	@import 'https://static.hdslb.com/mobile/css/mobile.css';
	body,html{
	    overflow: auto;
	    min-height: 100%;
	    background-color: #f4f4f4;
	    font: 1rem/1.5 'Microsoft YaHei', 'Droid Sans Fallback', SimHei, Arial, Helvetica, tahoma, sans-serif;
	}

footer p{
	    margin: .4rem 0;
}
</style>
