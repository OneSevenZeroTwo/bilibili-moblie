<template>
	<div>
		<header>
			<a class="logo"></a>
			<a class="logoText">登录</a>
		</header>

		<div class="form">
			<ul>
				<li class="item username">
					<div class="input-wrp"><input type="text" v-model="uname" placeholder="你的手机号/邮箱" id="login-username" maxlength="50" autocomplete="off" class=""></div>
					<div v-show="unameYZ" class="text clearfix">
						<p class="tips">用户名错误</p>
					</div>
				</li>
				<li class="item password">
					<div class="input-wrp"><input type="password" value=""v-model="password" placeholder="密码" id="login-passwd" class=""></div>
					<div v-show="pswYZ" class="text clearfix">
						<p class="tips">密码错误</p>
						<a href="https://passport.bilibili.com/resetpwd" class="forget-password">忘记密码？</a>
					</div>
				</li>
				<li class="item vdcode">
					<!---->
					<div class="text clearfix" style="display: none;">
						<p class="tips"></p>
						<p class="tips"></p>
					</div>
				</li>
				<li class="sns-tips">
					<!---->
				</li>
				<li class="btn-box">
					<a @click="login()" class="btn btn-login">立即登录</a>
					<a href="#/register" class="btn btn-reg">注册</a>
				</li>
				<li class="sns">
					<div class="splitter"><span class="title">第三方合作网站登录</span></div>
					<a class="btn weibo"></a>
					<a class="btn qq"></a>
				</li>
			</ul>
		</div>
		<div v-show="logSucc" class="weui-toast">
            <i class="weui-icon-success-no-circle weui-icon_toast"></i>
            <p class="weui-toast__content">登录成功</p>
        </div>
	</div>

</template>
<style>
	html,
	body {
		background-color: #f5f5f5;
		color: #666;
		font-size: 1em;
	}
	
	header {
		height: 38px;
		line-height: 48px;
		border: 1px solid #ddd;
		background: #fff;
		padding: 14px 15px 12px;
	}
	
	.logo {
		display: block;
		width: 63px;
		height: 28.8px;
		float: left;
		margin-top: 3px;
		margin-right: 12px;
		background: url(https://static-s.bilibili.com/account/img/logo-mobile.png);
		background-size: 63px 28.8px;
	}
	
	.logoText {
		height: 42px;
		border-left: 2px solid #de698c;
		color: #de698c;
		font-weight: 700;
		padding: 17px 0 0 15px;
		font-size: 1.3em;
	}
	
	a {
		outline: 0;
		color: #00a1d6;
		text-decoration: none;
	}
	
	.form {
		padding: 15px;
	}
	
	.form .item .input-wrp {
		border-radius: 6px;
		margin-bottom: 10px;
		background: #fff;
		width: 100%;
		border: 1px solid #ddd;
		height: 45px;
		line-height: 45px;
		overflow: hidden;
		box-sizing: border-box;
		position: relative;
	}
	
	.form .item input {
		border-radius: 6px;
		width: 100%;
		box-sizing: border-box;
		font-size: 1em;
		left: 0;
		top: 0;
		bottom: 0;
		padding: 10px;
		border: 0;
	}
	
	input[type=text] {
		font-size: 12px;
		color: #222;
		border: 1px solid #ccd0d7;
	}
	
	.forget-password {
		float: right;
		padding: 0 0 8px 2px;
	}
	
	.form .sns-tips {
		height: 20px;
		padding: 0 0 20px 2px;
		color: #de698c;
	}
	
	.form .btn-box .btn.btn-login {
		background-color: #00a1d6;
		color: #fff;
	}
	
	.form .btn-box .btn {
		display: block;
		border: 1px solid #00a1d6;
		text-align: center;
		box-sizing: border-box;
		width: 100%;
		line-height: 1;
		border-radius: 32px;
		padding: 12px;
		margin-bottom: 10px;
		color: #00a1d6;
		background: #fff;
	}
	
	.form .sns {
		position: relative;
		text-align: center;
		margin-top: 20px;
		padding-top: 50px;
	}
	
	.form .sns .splitter {
		border-top: 1px solid #999;
		top: 15px;
		left: 0;
		right: 0;
		position: absolute;
	}
	
	.form .sns .splitter .title {
		color: #999;
		position: absolute;
		left: 50%;
		margin-left: -25%;
		top: -15px;
		height: 30px;
		width: 50%;
		text-align: center;
		line-height: 30px;
		background: #f5f5f5;
	}
	.form .tips{
		color: #de698c;
	}
	.weibo {
		background-image: url('../../images/weibo.jpg');
	}
	
	.qq {
		background-image: url('../../images/qq.jpg');
	}
	
	.form .sns .btn {
		display: inline-block;
		width: 50px;
		height: 50px;
		padding: 0 5px;
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: 50px 50px;
	}
</style>

<script>
	export default {
		data(){
			return{
				uname:'',
				password:'',
				unameYZ:false,
				pswYZ:false,
				logSucc:false
			}
		},
		methods:{
			login(){
				this.ajax();
			},
			ajax:function(){
				var self = this;
				this.$ajax.post('http://localhost:666/login',{
						uname:this.uname,
						password:this.password
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
						console.log(data.data);
						// console.log(self,this)
						if(data.data=='usernameno'){
							self.unameYZ = true;
						}else if(data.data=='passwordno'){
							self.pswYZ = true;
						}else if(data.data=='yes'){
							self.unameYZ = false;
							self.pswYZ = false;
							self.logSucc = true;
							// 设置延时跳转
							sessionStorage.setItem('uname',self.uname)
							setTimeout(function(){
								location.href = '#/index';
							},1000)
							
						}
						

				})
			}
		}
	}
</script>