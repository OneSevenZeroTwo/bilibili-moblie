<template>
	<div class="channel video-list">
		<ul class="channel-in section" id="video-list" name="fav_video">

			<li v-show="isEmpty" class="list no-more">
				<div class="b-loading">没有更多内容</div>
			</li>
			<li v-show="showMore" class="list">
				<a v-show="!noMore" class="list-item load-more">请给我更多!</a>
				<a v-show="noMore" class="list-item disabled load-more">没有更多信息了!</a>
			</li>
		</ul>
	</div>
</template>
<style>
	/* .channel.video-list .channel-in li.list .load-more {
		width: 100%;
		margin: 0;
		font-size: 0.85rem;
		border: 1px solid #ddd;
		background: transparent;
		color: #de698c;
	}
	
	.list.no-more .b-loading {
		color: #de698c;
	} */
</style>
<script>
	export default {
		data() {
			return {
				isEmpty: true,
				noMore: true,
				showMore: true,
				arr: []
			}
		},
		methods: {
			showFav() {
				var self = this;
				var uname = document.cookie.slice(6);
				console.log(uname, '91----');
				this.$ajax.post('http://10.3.137.214:666/collectlist', {
					uname: uname
				}, {
					'headers': {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					transformRequest: function(obj) {
						//处理传递参数的格式
						var str = [];
						for(var p in obj) {
							str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
						}
						return str.join('&')
					}
				}).then(function(data) {
					console.log(data.data, 818188118);
					if(data.data == 'nonono') {
						// 不存在收藏
						console.log('不存在收藏')
						self.isEmpty = true;
						self.noMore = false;
						self.showMore = false;
					} else {
						self.isEmpty = false;
						self.noMore = true;
						self.showMore = true;
					}
				})
			}
		},
		mounted() {
			// this.showFav();
			console.log('运行成功-------------')
		}
	}
</script>