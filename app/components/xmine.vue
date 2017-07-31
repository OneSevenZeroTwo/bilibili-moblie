<template>
	<div class="wrapper">
		<div class="user-wrapper">
			<div class="user-avatar">
				<form id="uploadForm">
					<img :src="pic" alt="默认头像">
					<input id="file" @change='doUpload()' type="file" name="file">
				</form>
			</div>
			<div class="user-info">
				<p class="user-name">{{uname?uname:'游客'}}</p>
				<p class="user-coin">硬币：－</p>
			</div>
		</div>
		<div class="act-wrapper">
			<ul>
				<li v-show="userShow">
					<a class="act-item act-item-fav" href="#/mine/fav"><i class="bili-icon-fav"></i><span class="act-name">我的收藏</span><i class="bili-icon-arrow"></i></a>
				</li>
				<li v-show="userShow">
					<a class="act-item" href="#/mine/myPost"><i class="bili-icon-upload"></i><span class="act-name">我的投稿</span><i class="bili-icon-arrow"></i></a>
				</li>
				<li>
					<a class="act-item" href="#/mine/history"><i class="bili-icon-history-2"></i><span class="act-name">历史记录</span><i class="bili-icon-arrow"></i></a>
				</li>
			</ul>
			<p v-show="!userShow" class="act-tooltip">登陆后可以同步播放记录哦～</p>
		</div>
		<div class="account-wrapper">
			<div v-show="!userShow">
				<a href="#/login" class="account-login account-btn">登&nbsp;&nbsp;录</a>
				<a href="#/register" class="account-register account-btn">注&nbsp;&nbsp;册</a>
				<p class="reg-tooltip">据说用客户端注册可以减少答题哟～</p>
			</div>
			<a v-show="userShow" @click="logout()" class="account-btn">退出登录</a>
		</div>

	</div>
</template>
<style>
	#uploadForm {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	#uploadForm input {
		display: inline-block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0;
	}
</style>

<script>
	// import qq from '../images/qq.jpg';
	export default {
		data() {
			return {
				userShow: false,
				uname: '',
				headPic: true,
				pic: '//static.hdslb.com/mobile/img/default_avatar.png',
				// pic:'uploads/qq.jpg'
			}
		},
		methods: {
			logout() {
				var now = new Date();
				now.setDate(now.getDate() - 1);
				now = now.toUTCString();
				document.cookie = 'uname=null; expires=' + now;
				this.userShow = false;
				this.uname = '';
				this.pic = '//static.hdslb.com/mobile/img/default_avatar.png';
			},
			doUpload() {
				// console.log('上传文件');
				if(document.cookie) {
					this.ajax();
				} else {
					alert('请先登录')
				}

			},
			ajax: function() {
				var self = this;
				console.log('执行ajax请求');
				var fileNode = document.getElementById("file");
				var xmlhttp = new XMLHttpRequest();
				//设置回调，当请求的状态发生变化时，就会被调用  
				xmlhttp.onreadystatechange = function() {
					//上传成功，返回的文件名，设置到父节点的背景中  
					if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						// console.log(xmlhttp.responseText)
						self.pic = 'uploads/' + xmlhttp.responseText;
						self.$ajax.post('http://10.3.137.214:666/upload-touxiang', {
							uname: self.uname
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
							// console.log(data,'数据库存储成功')
						})
					}
				}
				//构造form数据 
				var data = new FormData();
				console.log(fileNode.files)
				data.append("logo", fileNode.files[0]);
				// console.log(data)
				//设置请求，true：表示异步  
				xmlhttp.open("post", 'http://10.3.137.214:666/upload-single', true);
				//不要缓存  
				//xmlhttp.setRequestHeader("If-Modified-Since", "0");  
				//提交请求  
				xmlhttp.send(data);
				//清除掉，否则下一次选择同样的文件就进入不到onchange函数中了  
				fileNode.value = null;

				/*this.$ajax.post('http://10.3.137.214:666/upload-single',{
						cache: false, //不必须
			            data: new FormData(document.querySelector('#uploadForm')),
			            processData: false,
			            contentType: false,
			            //此法参数这一块写的方式有问题
			            //不建议这么写，建议用原生方法
					},{

					'headers':{
						'Content-Type':'application/x-www-form-urlencoded'
					},

					transformRequest: function(obj) { 
						//处理传递参数的格式
		                var str = [];
		                for (var p in obj) {
		                    str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]))
		                }
		                return str.join('&')
	            	}
					}).then(function(data){
						console.log('请求完成');
						console.log(data);
						// self.pic = 'uploads/' + data.data;

				})*/
			},
			showHeadPic() {
				var self = this;
				this.$ajax.post('http://10.3.137.214:666/touxiang', {
					uname: this.uname
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
					// console.log(data.data,'----')
					console.log(data,'--------');
					if(data.data){
						self.pic = 'uploads/' + data.data;
					}
					
				})
			}
		},
		mounted: function() {
			// console.log(document.cookie);
			// 渲染用户信息
			if(document.cookie) {
				this.userShow = true;
				this.uname = document.cookie.slice(6);
				this.showHeadPic();
				console.log(this.uname);
			} else {
				this.userShow = false;
			}
			console.log('模板渲染mounted----')

		}

	}
</script>