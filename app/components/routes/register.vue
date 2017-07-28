<template>
	<div>
		<header>
			<a class="logo"></a>
			<a class="logoText">注册</a>
		</header>
		<div class="form">
			<form name="form2" id="regUser" action="" method="post">
				<div class="input-wrp">
					<input @change="unameChange()" v-model="uname" type="text" name="uname" id="uname" autocomplete="off" placeholder="您的昵称, 例：哔哩哔哩">
				</div>
				<span v-show="unameYZ" class="noticeText" id="uname-msg">这个昵称已经有人用过了</span>

				<div class="input-wrp">
					<input v-model="password" type="password" name="userpwd" id="userpwd" autocomplete="off" placeholder="您的密码, 6-16个字符组成，区分大小写">
				</div>
				<span v-show="pswYZ" class="noticeText" id="pwd-msg">设个密码守护你吧！</span>

				<div class="input-wrp" style="background: #ffffff">
					<select name="country_code" id="country_code" style="width: 100%;height: 100%">

						<option value="1" code="86">中国大陆</option>

						<option value="5" code="852">香港特别行政区</option>

						<option value="2" code="853">澳门特别行政区</option>

						<option value="3" code="886">台湾地区</option>

						<option value="4" code="1">美国</option>

						<option value="6" code="32">比利时</option>

						<option value="7" code="61">澳大利亚</option>

						<option value="8" code="33">法国</option>

						<option value="9" code="1">加拿大</option>

						<option value="10" code="81">日本</option>

						<option value="11" code="65">新加坡</option>

						<option value="12" code="82">韩国</option>

						<option value="13" code="60">马来西亚</option>

						<option value="14" code="44">英国</option>

						<option value="15" code="39">意大利</option>

						<option value="16" code="49">德国</option>

						<option value="18" code="7">俄罗斯</option>

						<option value="19" code="64">新西兰</option>

					</select>
				</div>
				<input type="hidden" name="gourl" value="http://www.bilibili.com">
				<input type="hidden" name="dopost" value="regok">

				<div class="input-wrp">
					<input v-model="tel" type="text" name="tel" placeholder="您的手机号" autocomplete="off" id="new_phone">
				</div>
				<span v-show="telYZ" class="noticeText" id="tel-msg">亲，看起来不像手机号呢！</span>

				<div class="input-wrp captcha" style="border: 0;background: none">
					<input v-model="shortMsg" type="text" name="code" id="sms-code" placeholder="短信验证码" autocomplete="off" style="width: 60%;border: 1px solid #ddd;">
					<input type="button" id="getCaptch" value="获取短信验证码" style="width:38%">
				</div>
				<span v-show='shortMYZ' class="noticeText" id="vcode-msg">短信验证码不能为空</span>

				<p style="font-size: 0.9em;width: 100%;display: block;padding-top: 35px">继续注册，表明您已同意
					<a href="https://passport.bilibili.com/register/licence" target="_blank">《bilibili网会员注册协议》</a>
				</p>

				<div>
					<input @click="register()" class="button confirm" type="button" value="同意并注册">
				</div>
				<div>
					<a class="button" href="#/login">登录</a>
				</div>
			</form>
		</div>
		<div v-show="regSucc" class="weui-toast">
            <i class="weui-icon-success-no-circle weui-icon_toast"></i>
            <p class="weui-toast__content">注册成功</p>
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
		font-size: 1.1em;
	}
	
	a {
		outline: 0;
		color: #00a1d6;
		text-decoration: none;
	}
	
	.form {
		padding: 15px;
	}

	.form .input-wrp {
		border-radius: 6px;
		margin-bottom: 10px;
		background: #fff;
		width: 100%;
		border: 1px solid #ddd;
		height: 45px;
		line-height: 45px;
		overflow: hidden;
		box-sizing: border-box;
	}
	
	.noticeText {
	    float: left;
	    padding: 1px 0 8px 2px;
	    width: 100%;
	    color: #de698c;
	}

	.form .input-wrp input[type="password"], .form .input-wrp input[type="text"] {
	    border-radius: 6px;
	    width: 100%;
	    box-sizing: border-box;
	    left: 0;
	    top: 0;
	    bottom: 0;
	    padding: 10px;
	    border: 0;
	}
	
	#getCaptch {
	    height: 38px;
	    float: right;
	    width: 43%;
	    border-radius: 4px;
	    background-image: linear-gradient(to top, #f5f5f5, #fff);
	    border: 1px solid #aaa;
	    margin-top: 3px;
	}

	input[type="button"], 
	input[type="reset"], 
	input[type="submit"] {
	    -webkit-appearance: button;
	    cursor: pointer;
	}

	.form p {
	    padding: 5px 10px 15px 0;
	}

	.form .button.confirm {
	    background-color: #00a1d6;
	    color: #fff;
	}

	.form .button {
	    display: block;
	    border: 1px solid #00a1d6;
	    text-align: center;
	    box-sizing: border-box;
	    width: 100%;
	    border-radius: 32px;
	    padding: 12px;
	    margin-bottom: 10px;
	    color: #00a1d6;
	    background: #fff;
	}
</style>

<script>
	export default {
		data(){
			return {
				uname:'',
				password:'',
				tel:'',
				shortMsg:'',
				unameYZ:false,
				pswYZ:false,
				telYZ:false,
				shortMYZ:false,
				regSucc:false
			}
		},
		methods:{
			register:function(){
		 		var yz1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.password);
		 		var yz2 = /^1[34578]\d{9}$/.test(this.tel);
		 		var yz3 = this.shortMsg;
		 		
		 		if(yz1 && yz2 && yz3){
		 			this.pswYZ = false;
		 			this.telYZ = false;
		 			this.shortMYZ = false;
		 			console.log('验证成功');
		 		}else{
		 			yz1? this.pswYZ= false:this.pswYZ = true;
		 			yz2? this.telYZ = false:this.telYZ = true;
		 			yz3? this.shortMYZ = false:this.shortMYZ = true;
		 			console.log('验证失败');
		 			return false;
		 		}

		 		/*// 密码验证
			    if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.password))){
			    	this.pswYZ = true;
			    	console.log('密码错误');
			    	return false;
			    }else{
			    	this.pswYZ = false;
			    	console.log('密码正确')
			    } 
				// 手机号验证
				if(!(/^1[34578]\d{9}$/.test(this.tel))){ 
			        this.telYZ = true;  
			        return false; 
			    }else{
			    	this.telYZ = false;
			    } 
			    // 短信验证码
			    if(!this.shortMsg){
			    	this.shortMYZ = true;
			    	return false;
			    }else{
			    	this.shortMYZ = false;
			    }
				*/
			    this.ajax();
				/*this.$ajax.post('http://localhost:666/test',{
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
						console.log(data)
				})*/
				return false;
			},		
			ajax:function(){
				var self = this;
				// this.$ajax.post('http://localhost:666/register',{
				this.$ajax.post('http://10.3.137.214:666/register',{
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
						if(data.data=='no'){
							self.unameYZ = true;
						}else if(data.data=='ok'){
							self.regSucc = true;
							// 设置延时跳转

							setTimeout(function(){
								location.href = '#/index';
							},1000)
							
						}
						

				})
			},
			unameChange:function(){
				console.log(this.uname,this);
				// console.log(this.$ajax)
				/*this.$ajax.get('http://localhost:666/test').then(function(data){
					console.log(data)
				})*/

			}
		},
		beforeUpdate:function(){


		}
	}
</script>