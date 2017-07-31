<!-- template中只能有一个根节点 -->
<template>
	<div>
		<xheader></xheader>
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
<div class="channel-wrapper clearfix">
    <ul>
        <li>
            <a href="//live.bilibili.com" class="channel-item">
                <div class="channel-icon bili-icon-live">
                </div>
                <p class="channel-name">直播</p>
            </a>
        </li>
        <li>
            <a href="/subchannel.html#tid=13" class="channel-item">
                <div class="channel-icon bili-icon-bangumi channel-c13">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">番剧</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=168" class="channel-item">
                <div class="channel-icon bili-icon-guoman channel-c167">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">国创</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=1" class="channel-item">
                <div class="channel-icon bili-icon-douga channel-c1">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">动画</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=3" class="channel-item">
                <div class="channel-icon bili-icon-music channel-c3">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">音乐</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=129" class="channel-item">
                <div class="channel-icon bili-icon-dance channel-c129">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">舞蹈</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=4" class="channel-item">
                <div class="#/channel?=4">
                <span class="channel-icon bili-icon-game channel-c4">99+</span></div>
                <p class="channel-name">游戏</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=36">
                <div class="channel-icon bili-icon-tech channel-c36">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">科技</p>
            </a>
        </li>

        <li>
            <a href="#/channel?=160" class="channel-item">
                <div class="channel-icon bili-icon-life channel-c160">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">生活</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=119" class="channel-item">
                <div class="channel-icon bili-icon-kichiku channel-c119">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">鬼畜</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=5" class="channel-item">
                <div class="channel-icon bili-icon-ent channel-c5">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">娱乐</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=23" class="channel-item">
                <div class="channel-icon bili-icon-movie channel-c23">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">电影</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=11" class="channel-item">
                <div class="channel-icon bili-icon-tv channel-c11">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">电视剧</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=155" class="channel-item">
                <div class="channel-icon bili-icon-fashion channel-c155">
                <span class="channel-num">99+</span></div>
                <p class="channel-name">时尚</p>
            </a>
        </li>
        <li>
            <a href="#/channel?=165" class="channel-item">
                <div class="channel-icon bili-icon-advertise channel-c165">
                <span class="channel-num">83</span></div>
                <p class="channel-name">广告</p>
            </a>
        </li>
    </ul>
</div>
			<footer>
				<p class="clearfix">
					<a id="change_to_computer" href="javascript:void(0)" class="bottom-btn"><i class="icons icons-computer"></i><span>电脑版</span></a>
					<a id="link_to_app" href="bilibili://" class="bottom-btn" target="_self"><i class="icons icons-app"></i>客户端</a>
					<a id="back_to_top" href="javascript:void(0)" class="bottom-btn"><i class="icons icons-top"></i>返回顶部</a>
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
		data() {
                return {
                    //news: null,
                    isLoadMore: true
                }
            },
			 computed: {
				
				chan(){
					return this.$store.state.chan
				}
				
			},
		components:{
			xheader,
			// xmine,
		}
	}
</script>
<style scoped lang="css">
	@import 'https://static.hdslb.com/mobile/css/normalize.css';
	@import 'https://static.hdslb.com/mobile/css/mobile.css';
	body,html{
	    overflow: auto;
	    min-height: 100%;
	    background-color: #f4f4f4;
	    font: 1rem/1.5 'Microsoft YaHei', 'Droid Sans Fallback', SimHei, Arial, Helvetica, tahoma, sans-serif;
	}
	footer p{
		line-height: 2;
	}
	.wrapper {
	    position: relative;
	    padding-top: 2px;
	    overflow-x: hidden;
	    padding-top: 40px;
	}
	
</style>
