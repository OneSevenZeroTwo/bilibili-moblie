<!-- template中只能有一个根节点 -->
<template>
	<div>
		<!-- <xheader></xheader> -->
		<nav class="nav-bar">
                <div class="nav-wrp">
                    <a href="#/index" class="logo"></a>
                    <a class="cell" href="#/mine/history"><i class="nav-icon bili-icon-history"></i></a>
                    <a class="cell" href="#/search"><i class="nav-icon bili-icon-search"></i></a>
                </div>
        </nav>
		<!-- <xmine></xmine> -->
		
		<div class="wrapper">	
			<div style="margin-top: 42px;" class="flex-bar main">
				<ul class="flex-bar-in">
					<li class="nav-item nav-index">
						<a href="#/index" title="首页">首页</a>
					</li>
					<li class="nav-item nav-channel">
						<a href="#/channel" title="频道">频道</a>
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

			<router-view></router-view>

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
	import xheader from '../xheader.vue';
	// import xmine from '../xmine.vue';

	export default {
		components:{
			xheader,
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

	.nav-bar {
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    height: 2.5rem;
	    line-height: 2.5rem;
	    color: #fff;
	    background-color: #fff;
	    font-size: 14px;
	    z-index: 10010;
	    border-bottom: 1px solid #e7e7e7;
	    overflow: hidden;
	    padding-right: 0.5rem;

	}
	.nav-bar .nav-wrp {
	    position: relative;
	    height: 100%;
	    z-index: 100;
	    background-color: #fff;
	}
	.nav-bar .logo {
	    float: left;
	    margin-top: 6px;
	    display: block;
	    width: 63px;
	    height: 28px;
	    background-size: 63px 28px !important;
	    margin-left: 18px;
	}
	.logo {
	    background: url(../../images/logo.png) center no-repeat;
	}
	.nav-bar .cell {
	    float: right;
	    width: 44px;
	    height: 40px;
	    position: relative;
	    box-sizing: border-box;
	    margin-right: 5px;
	}
	/*-----------------------------*/
	.bili-icon-tv, .bili-icon-tech, .bili-icon-music, .bili-icon-movie, .bili-icon-live, .bili-icon-kichiku, .bili-icon-game, .bili-icon-fashion, .bili-icon-douga, .bili-icon-dance, .bili-icon-bangumi, .bili-icon-search, .bili-icon-history, .bili-icon-fav, .bili-icon-history-2, .bili-icon-filter-hover, .bili-icon-filter, .bili-icon-upload, .bili-icon-circle-del, .bili-icon-arrow, .bili-icon-del {
	    background-image: url(../../images/ui_3@2x.png);
	    background-size: 274px 228px;
	    display: block;
	}
	/*-----------------------------*/
	.nav-bar .cell .nav-icon {
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    margin-left: -11px;
	    margin-top: -11px;
	}
	.bili-icon-history {
	    background-position: -22px -206px;
	    width: 22px;
	    height: 22px;
	}
	.bili-icon-search {
	    background-position: 0 -206px;
	    width: 22px;
	    height: 22px;
	}

	footer p{
		line-height: 2;
	}
	.wrapper {
	    position: relative;
	    padding-top: 2px;
	    overflow-x: hidden;
	}
	
</style>
