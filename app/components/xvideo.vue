<template>
	<div id="main" class="main">
	</div>
</template>
<script>
	import '../video_1b67226.js';
	export default {
		mounted() {
			console.log($('#main'));
			var $video=(function(){
				//var config:{}
				var video={
					el:'',
					src:[],
					btncolor:"#999",
					btnbgcolor:"transparent",
					bgprocolor:"#19aee4",
					isloopplay:true,
					autoplay:false,
					currsrc:{src:"",index:0},
					allstate:{
						isplay:false,
						backgo:false,
						forward:true,
						isfull:false,
					},
					controlsstate:{
			            playbtn:true,//播放和暂停按钮显示，false不显示
			            toggbtn:true,//下一个和上一个视频切换按钮显示，false不显示
			            processbtn:true,//播放进度条显示，false不显示
			            fullbtn:true//全屏按钮显示
			        },
					init:function(model){//初始化
						var that=this;
						if(model.el){
							that.el=model.el;
							that.src=model.src;
							that.currsrc.src=this.src[0];
							that.currsrc.index=0;
							that.isloopplay=model.loopplay;
							if(model.btncolor){
								that.btncolor=model.btncolor
							}
							if(model.btncolor){
								that.btnbgcolor=model.btnbgcolor;
							}
							if(model.bgprocolor){
								that.btnbgcolor=model.btnbgcolor;
							}
							if(model.controlsstate){
								that.controlsstate=model.controlsstate
							}
							if(model.autoplay){
								that.autoplay=model.autoplay
							}
							that.create();
						}
					},
					create:function(){//创建
						var videocon="<div style='position:relative;width:100%;height:100%;display:-webkit-flex;flex-direction: row;-webkit-flex-direction: row;justify-content: space-between;-webkit-justify-content: space-between;align-items:center;-webkit-align-items:center;' id='videocom'>\
							<style>#videocom video::-webkit-media-controls-enclosure {display: none !important;} #videocom video::media-controls-enclosure {display: none !important;}</style>\
							<video src='"+this.currsrc.src+"' style='width:100%;height:auto;' controls='controls' id='videoele'>您的浏览器不支持video</video>\
							<style>\
								#upid{display:block;width:1rem;height:1rem;}#upid i{position:relative;display:block;width:16px;height:16px;} #upid i::before{position:absolute;content:' ';border-top: solid 7px transparent;border-bottom: solid 7px transparent;border-right: solid 7px "+this.btncolor+";}#upid i::after{position:absolute;content:' ';left:7px;border-top: solid 7px transparent;border-bottom: solid 7px transparent;border-right: solid 7px "+this.btncolor+";}\
								#downid{display:block;width:1rem;height:1rem;}#downid i{position:relative;display:block;width:16px;height:16px;} #downid i::before{position:absolute;content:' ';border-top: solid 7px transparent;border-bottom: solid 7px transparent;border-left: solid 7px "+this.btncolor+";}#downid i::after{position:absolute;content:' ';left:7px;border-top: solid 7px transparent;border-bottom: solid 7px transparent;border-left: solid 7px "+this.btncolor+";}\
								#playid{display:block;width:1.2rem;height:1.2rem;border:2px solid "+this.btncolor+";border-radius:100%;line-height:1rem;text-align:center;} #playid::before{position:relative;content:' ';display:inline-block;vertical-align:middle;border-top: solid 7px transparent;border-bottom: solid 7px transparent;border-left: solid 7px "+this.btncolor+";}\
								#pauseid{display:block;width:1.2rem;height:1.2rem;border:1px solid "+this.btncolor+";border-radius:100%;text-align:center;line-height:1.2rem;} #pauseid::before{display:inline-block;position:relative;content:' ';width:.25rem;height:.8rem;border-left: solid 2px "+this.btncolor+";border-right: solid 2px "+this.btncolor+";}\
							#controlid a{margin:0 .2rem;}\
							</style>\
							<div id='controlid' style='display:-webkit-flex;flex-direction: row;-webkit-flex-direction: row;justify-content: space-between;-webkit-justify-content: space-between;align-items:center;-webkit-align-items:center;position:absolute;left:0;bottom:.3rem;;width:100%;height:1.5rem;z-index:2;background-color:"+this.btnbgcolor+";'>\
								<a id='playid'></a>\
								<a id='pauseid'><i></i></a>\
								<a id='upid'><i></i></a>\
								<a id='downid'><i></i></a>\
								<div style='width:3rem;height:.2rem;background-color:"+this.btncolor+";position:relative;' id='process'>\
									<p style='margin:0;padding:0;position:absolute;width:0rem;height:.2rem;background-color:"+this.bgprocolor+";top:0;' id='processshow'></p>\
									<a style='position:absolute;width:.6rem;height:.6rem;left:-.36rem;margin:0;top:-.2rem;background-color:"+this.bgprocolor+";border-radius:100%;' id='procid'></a>\
								</div>\
								<div id='isfullscreen'>\
									<style>#isfullscreen a{display:inline-block;width:20px;height:20px;} #enterfullscreen i{position:relative;display:inline-block; width:9px; height:2px;background-color:"+this.btncolor+";top:0px;left:0;} #enterfullscreen i::before{position:absolute;display:block;content:' ';width: 6px;height: 6px;border-top: solid 2px "+this.btncolor+";border-right: solid 2px "+this.btncolor+";-webkit-transform: rotate(-135deg);transform: rotate(-135deg);left: 2px;top: -4px;}#enterfullscreen i:first-child{top:-10px;-webkit-transform: rotate(45deg);transform: rotate(45deg);}#enterfullscreen i:last-child{-webkit-transform: rotate(-135deg);transform: rotate(-135deg);top:-2px;}</style>\
									<style>#exitfullscreen a{display:inline-block;width:20px;height:20px;} #exitfullscreen i{position:relative;display:inline-block; width:9px; height:2px;background-color:"+this.btncolor+";top:0px;left:0;} #exitfullscreen i::before{position:absolute;display:block;content:' ';width: 6px;height: 6px;border-top: solid 2px "+this.btncolor+";border-right: solid 2px "+this.btncolor+";-webkit-transform: rotate(-135deg);transform: rotate(-135deg);left: 2px;top: -3.5px;}#exitfullscreen i:first-child{top:-10px;-webkit-transform: rotate(-1355deg);transform: rotate(-135deg);}#exitfullscreen i:last-child{-webkit-transform: rotate(45deg);transform: rotate(45deg);top:-2px;}</style>\
									<a id='enterfullscreen'><i></i><i></i></a>\
									<a id='exitfullscreen'><i></i><i></i></a>\
								</div>\
							</div>\
						</div>";
						if(this.el){
							this.selele(this.el).innerHTML=videocon;
							var that=this;
							that.selele(this.el).innerHTML=videocon;
							if(that.autoplay){
								that.play();
								that.isshowhide();
							}
							that.isphone()//检测机型
							that.controlstabstate();
							that.selele("videoele").onclick=function(){
								if(that.selele("videoele").ended||that.selele("videoele").paused){
									that.play();
								}else{
									that.pause();
								}
								that.isshowhide();
							}
							//点击播放
							that.selele("playid").onclick=function(){
								that.play();
								that.isshowhide();
							}
							//点击暂停
							that.selele("pauseid").onclick=function(){
								that.pause();
								that.isshowhide();
							}
							//拖动视频进度条
							that.selele("procid").ontouchmove=function(e){
								that.moveprocess(e);
							}
							that.selele("process").ontouchstart=function(e){
								that.moveprocess(e);
							}
							//全屏控制
							that.selele("enterfullscreen").onclick=function(){
								that.fullscreenplay();
								that.isshowhide();
							}
							//退出全屏
							that.selele("exitfullscreen").onclick=function(){
								that.exitscreenplay();
								that.isshowhide();
							}

							// var timecur=setInterval(function(){
							// 	if(that.selele("videoele").played.length>0&&!that.selele("videoele").ended&&!that.selele("videoele").paused){
							// 		that.currenttime();
							// 	}else{
							// 		that.allstate.isplay=false;
							// 		that.isshowhide();
							// 	}
							// 	if(that.selele("videoele").ended&&that.isloopplay){
							// 		if(that.currsrc.index==that.src.length-1){
							// 			that.currsrc.index=0;
										
							// 		}else{
							// 			that.currsrc.index++;
										
							// 		}
							// 		that.change(that.currsrc.index);
							// 		that.isshowhide();
							// 	}
							// },1000)
							
							that.togglesrc();
							that.isshowhide();
						}else{
							console.log("请选择元素！！");
						}
					},
					//控制条状态设置
					controlstabstate:function(){
						var that=this;
					    if(!that.controlsstate.playbtn){
					    	that.selele("playid").style.display="none";
							that.selele("pauseid").style.display="none";
					    }
					    if(!that.controlsstate.toggbtn){
					    	that.selele("upid").style.display="none";
							that.selele("downid").style.display="none";
					    }
					    if(!that.controlsstate.processbtn){
					    	that.selele("process").style.display="none";
					    }
					    console.log(that.controlsstate.fullbtn);
					    if(!that.controlsstate.fullbtn){
					    	that.selele("exitfullscreen").style.display="none";
							that.selele("enterfullscreen").style.display="none";
					    }
					},
					//元素选择
					selele:function(obj){
						if(!document.getElementById(obj)){
							return;
						}else{
							return document.getElementById(obj);
						}
					},
					//机型判断处理
					isphone:function(){
						var that=this;
						//判断是否是android
						if(/android/i.test(navigator.userAgent.toLowerCase()) == true) {
							that.selele("controlid").style.display= "none";
						}
					},
					//拖动进度条
					moveprocess:function(e){
						var that=this;
						var left = that.selele("process").getBoundingClientRect().left;
						var l=e.touches[0].clientX - left - that.selele("procid").clientWidth / 2;
						if(l <= -that.selele("procid").clientWidth / 2 || l >= that.selele("process").clientWidth - that.selele("procid").clientWidth / 2) {
							return;
						}else{
							that.selele("procid").style.left=e.touches[0].clientX-left-that.selele("procid").clientWidth / 2+"px";
							that.selele("processshow").style.width=e.touches[0].clientX-left+"px";
						}
						this.process();
					},
					currenttime:function(){
						var that=this;
						var ttime = that.selele("videoele").duration;
						var currentTime=that.selele("videoele").currentTime;
						var processw = that.selele("process").clientWidth;
						var w = that.selele("procid").clientWidth / 2;
						that.selele("procid").style.left=processw*currentTime/ttime-w+"px";
						that.selele("processshow").style.width=processw*currentTime/ttime+"px";
					},
					process:function(){
						var that=this;
						var w = that.selele("procid").clientWidth / 2;
						var left = that.selele("process").getBoundingClientRect().left;
						var l = that.selele("procid").getBoundingClientRect().left-left+w;
						var processw = that.selele("process").clientWidth;
						var ttime = that.selele("videoele").duration;
						that.selele("videoele").currentTime=ttime*l/processw;
					},
					
					//切换视频源
					togglesrc:function(){
						var that=this;
						that.selele("upid").onclick=function(){
							if(that.currsrc.index>0){
								that.currsrc.index--;
							}else{
								that.currsrc.index=0;
							}
							that.change(that.currsrc.index);
							that.isshowhide();
						}
						that.selele("downid").onclick=function(){
							if(that.currsrc.index<that.src.length){
								that.currsrc.index++;
							}else{
								that.currsrc.index=that.src.length-1;
							}
							that.change(that.currsrc.index);
							that.isshowhide();
						}
					},
					change:function(val){//切换视频源
						var that=this;
						console.log(that.autoplay);
						that.currsrc.src=that.src[val];
						that.selele('videoele').src=that.currsrc.src;
						document.getElementById('videoele').onloadedmetadata = function() {
							//that.play();
							if(that.autoplay){
								that.play();
								that.isshowhide();
							}else{
								that.isshowhide();
							}
						}
						//if(that.autoplay){
						//	that.play();
						//	that.isshowhide();
						//}
						//that.isshowhide();
					},
					reset:function(){//重置

					},
					//检测是否影藏和显示
					isshowhide:function(){
						var that=this;
						if(that.controlsstate.playbtn){
							if(that.allstate.isplay){
								that.selele("playid").style.display="none";
								that.selele("pauseid").style.display="inline-block";
							}else{
								that.selele("playid").style.display="inline-block";
								that.selele("pauseid").style.display="none";
							}
						}
						
						if(that.controlsstate.toggbtn){
							if(that.currsrc.index>0){
								that.selele("upid").style.display="inline-block";
							}else{
								that.selele("upid").style.display="none";
							}
							if(that.currsrc.index<this.src.length-1){
								that.selele("downid").style.display="inline-block";
							}else{
								that.selele("downid").style.display="none";
							}
						}

						if(that.controlsstate.fullbtn){
							if(that.allstate.isfull){
								that.selele("exitfullscreen").style.display="inline-block";
								that.selele("enterfullscreen").style.display="none";
							}else{
								that.selele("exitfullscreen").style.display="none";
								that.selele("enterfullscreen").style.display="inline-block";
							}
						}

					},
					
					play:function(){//播放
						var that=this;
						that.allstate.isplay=true;
						that.selele('videoele').play();
						that.selele('videoele').onloadedmetadata = function() {
							that.selele('videoele').play();
						}
					},
					pause:function(){//暂停
						var that=this;
						that.selele('videoele').pause();
					},
					//循环播放
					loopplay:function(){

					},
					fullscreenplay:function(){
						var that=this;
						that.allstate.isfull=true;
						that.selele("videocom").style.position="fixed";
						that.selele("videocom").style.zIndex=99999;
					},
					exitscreenplay:function(){
						var that=this;
						that.allstate.isfull=false;
						that.selele("videocom").style.position="relative";
						that.selele("videocom").style.zIndex=1;
					}
				}
				console.log(video);
				return video;
			})()

			// this.getvideourl();

			$video.init({
				el: "main", //创建的父元素id
				btncolor: "#c9c9c9", //控制按钮的颜色
				bgcolor: "", //控制条的背景颜色
				bgprocolor: "", //进度条显示进度颜色
				autoplay: false, //开启自动播放，false不能自动播放
				loopplay: true, //true自动循环播放，false不自动循环播放
				controlsstate: {
					playbtn: true, //播放和暂停按钮显示，false不显示
					toggbtn: true, //下一个和上一个视频切换按钮显示，false不显示
					processbtn: true, //播放进度条显示，false不显示
					fullbtn: true //全屏按钮显示
				},
				//视频源地址支持mp4
				src: ["mp4/123.mp4"]

			});
		},

		data(){
			return {
				aid:'',
			}
		},

		methods:{
			// getvideourl(){
			// 	this.aid = this.$route.params.aid;

			// 	this.$ajax.get('https://api.bilibili.com/playurl?callback=callbackfunction&aid='+this.aid+'&page=1&platform=html5&quality=1&vtype=mp4&type=jsonp&token=57afb2f9edb46ea81f144d864e37d1e5')
			// 	.then((response) => {
			// 		console.log(response.data)
					
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	});
			// }
		}
	}
</script>
<style scoped>
	#main{
		z-index:10;
		width: 100%;
		height: 200px;
	    border-bottom: 1px solid #ccc;
		background-color:#000;
		padding-top:40px;
	}

</style>