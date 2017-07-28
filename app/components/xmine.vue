<template>

	<div class="wrapper">
		<!--[CDATA[YII-BLOCK-BODY-BEGIN]]-->
		<div class="flex-bar main">
			<ul class="flex-bar-in">
				<li class="nav-item nav-index">
					<a href="//m.bilibili.com/index.html" title="首页">首页</a>
				</li>
				<li class="nav-item nav-channel">
					<a href="//m.bilibili.com/channel.html" title="频道">频道</a>
				</li>
				<li class="nav-item nav-live">
					<a href="//live.bilibili.com/h5/" title="直播">直播</a>
				</li>
				<li class="nav-item nav-rank">
					<a href="//m.bilibili.com/ranking.html" title="排行">排行</a>
				</li>
				<li class="nav-item nav-space on">
					<a href="//m.bilibili.com/space.html" title="我的">我的</a>
				</li>
			</ul>
		</div>
		<div class="user-wrapper">
			<div class="user-avatar"><img src="//static.hdslb.com/mobile/img/default_avatar.png" alt="默认头像"></div>
			<div class="user-info">
				<p class="user-name">游客</p>
				<p class="user-coin">硬币：－</p>
			</div>
		</div>
		<div class="act-wrapper">
			<ul>
				<li>
					<a class="act-item" href="/history.html"><i class="bili-icon-history-2"></i><span class="act-name">历史记录</span><i class="bili-icon-arrow"></i></a>
				</li>
			</ul>
			<p class="act-tooltip">登陆后可以同步播放记录哦～</p>
		</div>
		<div class="account-wrapper">
			<a href="https://account.bilibili.com/login" class="account-login account-btn">登&nbsp;&nbsp;录</a>
			<a href="https://account.bilibili.com/register/phone" class="account-register account-btn">注&nbsp;&nbsp;册</a>
			<p class="reg-tooltip">据说用客户端注册可以减少答题哟～</p>
		</div>
		<!--[CDATA[YII-BLOCK-BODY-END]]-->
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
</template>
<!-- <link rel="stylesheet" href="https://static.hdslb.com/mobile/css/normalize.css"> -->
<style scoped lang="css">
	@import 'https://static.hdslb.com/mobile/css/normalize.css';
	@import 'https://static.hdslb.com/mobile/css/mobile.css';
	body,html{
		background:#f4f4f4;
	}
	footer p{
		line-height: 2;
	}
</style>
