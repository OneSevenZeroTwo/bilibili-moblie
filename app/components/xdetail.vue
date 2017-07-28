<!--HTML-->
<template>
	<div>
		<div class="detail_select">
			<ul>
				<li>
					<a>
						<img src="//s1.hdslb.com/bfs/static/mult/images/share.png">
						分享
					</a>
				</li>
				<li>
					<a>
						<img src="//s1.hdslb.com/bfs/static/mult/images/collect.png">
						收藏
					</a>
				</li>
				<li>
					<a>
						<img src="//s1.hdslb.com/bfs/static/mult/images/download.png">
						缓存
					</a>
				</li>
			</ul>
		</div>
		<div class="detail_desc">
			<h1>{{title}}</h1>
			<div class="view">
				<p>
					播放量：<span>{{view|showview}}</span>&nbsp&nbsp&nbsp弹幕量：<span>{{danmaku|showview}}</span>
					<i :class="{'showmore':isshowdesc,'showless':!isshowdesc}" @click="showdesc()"></i>
				</p>
			</div>
			<div class="descwarp" :class="{'showdesc':isshowdesc}">
				<p class="desc">{{desc}}</p>
				<div class="src">
					<a href="#">
						主页
					</a>
					<a>
						动画
					</a>
					<a>
						{{tname}}
					</a>
					<span>av{{aid}}</span>
				</div>
			</div>
		</div>
		<div class="author">
			<a href="" class="author_face">
				<img src="">
				<!-- <img :src="author_face"> -->
			</a>
			<a href="" class="author_name">{{author}}</a>
			<span>{{pubdate|showtime}}前投递</span>
			<a href="" class="attention">关注</a>
		</div>
		<div class="partbox">
			<div class="partTop">选集(&nbsp12&nbsp) <i class="showmore"></i></div>
			<div class="partcontent">

				<swiper :options="swiperOption" ref="mySwiper">
					<!-- slides -->
					<swiper-slide v-for="i in partc">
						<a class="partc">
							<p>选集{{i}}</p>
						</a>
					</swiper-slide>
					<!-- Optional controls -->
				</swiper>
				
			</div>
		</div>
		<div class="relatedtag">
			<h3>相关标签</h3>
			<a href="" v-for="tag in tags">{{tag}}</a>
		</div>
		<div class="relatedvideo">
			<h3>相关视频</h3>
			<div class="relatedid">
				<div class="videolist">
					<a v-for="li in visiblelist" :href="'#/detail/'+li.aid" @click="jump(li.aid,li.title,li.owner.name,li.stat.view,li.stat.danmaku)">
						<span class="list_pic">
							<!-- <img :src="li.pic"> -->
							<img src="">
						</span>
						<div class="list_content">
							<span class="list_title">{{li.title}}</span>
							<span class="list_author">up主:{{li.owner.name}}</span>
							<div class="list_view">
								<span>播放：{{li.stat.view|showview}}</span>
								<span>弹幕：{{li.stat.danmaku|showview}}</span>
							</div>
						</div>
					</a>
				</div>
				<div class="loadmore" @click="loadmore()">
					{{isload}}
				</div>
			</div>
		</div>
		<div class="review">
			<h3>评论(&nbsp582&nbsp)</h3>
			<div class="review_content">
				<div class="review_list" v-for="rv in reviews">
					<a class="rv_pic">
						<!-- <img :src="rv.rv_pic"> -->
						<img src="">
					</a>
					<a class="rv_name">{{rv.rv_name}}</a>
					<span class="rv_time">{{rv.rv_time}}</span>
					<p class="rv_content">{{rv.rv_content}}</p>
				</div>
			</div>
			<span class="review_download">下载bilibili客户端，查看全部评论</span>
		</div>
		<div class="detail_footer">
			<div class="footer_select">
				<a>
					<i style="width: .59733rem;height: .53333rem;background-position: -8.14933rem -.512rem;"></i>
					<span>电脑版</span>
				</a>
				<a>
					<i style="width: .42667rem;height: .64rem;background-position: -8.23467rem -2.368rem;"></i>
					<span>客户端</span>
				</a>
				<a @click="toTop()">
					<i style="width: .53333rem;height: .55467rem;background-position: -8.192rem -4.33067rem;"></i>
					<span>返回顶部</span>
				</a>
			</div>
			<p>沪ICP备13002172号-3 bilibili.com © 2009-2017</p>
		</div>
	</div>
</template>
<!--JS-->
<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		updated() {
			console.log('更新');
			if (this.isjump) {
				this.page = 0;
				this.showMsg();
				this.isjump = false;
				document.body.scrollTop = 0;
				console.log('渲染成功');
			}
		},
		mounted() {
			console.log('初始')
			var swiper = new Swiper('.swiper-container',{
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			});
			//detail/1
			// console.log(this.$route.params)
			//detail/?id=1
			// console.log(this.$route.query)
			this.aid = this.$route.params.aid;
			this.showMsg()
		},
		data(){
			return {
				swiperOption: {
					width:90,
				},
				isshowdesc:true,
				aid:'',
				title:"【fate】全英灵从者资料合集·17年夏",
				view:"61234",
				danmaku:"4052",
				desc:"终于完成了~~~花费时间实在太长~~视频一共分为12P。欧洲6组，亚洲4组，最后加上美洲非洲，月球。别问我为何分P那么多，实在是因为内存需求太大了！这已经是极限分P了（哭~）最后，视频内容如果错误不大，修正就放在下次更新吧，下次更新——会是什么时候呢？",
				tname:"综合",
				author:"光之主",
				pubdate:"1500853582",
				author_face:"//i1.hdslb.com/bfs/face/b2963d6a16c785d80b57adef8c046aae4f927dfb.jpg",
				partc:['a','b','c','d','e','f','g','h','i','j','k','l','m'],
				tags:["型月","fate","英灵","fate grand order","fgo","fate extra","fate zero","fate全系列","fate prototype"],
				//加载
				list:[],
				visiblelist:[],
				page:0,
				isload:'刚刚看到这里，点击加载更多~',
				isjump:false,
				//评论
				reviews:[{
					rv_pic:"//i1.hdslb.com/bfs/face/8d24da56f5c69f910f7484e91a04c9aff4eaedf4.jpg@80w_80h.webp",
					rv_name:"山之翁王哈桑",
					rv_time:"2天前",
					rv_content:"我在贴吧里疯狂打广告贴，看看有少人会被我安利来，妈的累死我来(･∀･)",
				},{
					rv_pic:"//i2.hdslb.com/bfs/face/f5545018f891e543ba712ed3e234f02c663bc0b7.jpg@80w_80h.webp",
					rv_name:"捷德皇家骑士",
					rv_time:"2天前",
					rv_content:"我还是说上几句.冠位候补不等于实力，梅林估计也只有逃跑技术还有幻术天下第一，旧剑和呆毛实力爱歌说都差不多，维纳斯尼禄的对星宝具，大碧池表示即使有对星宝具也无法摧毁星球，大王只是月球大王在地球上分身的残骸，圣剑使并没有杀死地球巨神而是继续游荡了几千年.盖提亚大光轮就是贯穿星球或者洗地，",
				},{
					rv_pic:"//i2.hdslb.com/bfs/face/52a7735ae53e064e00f30128ceb98b612ef88df1.jpg@80w_80h.webp",
					rv_name:"菲尔葛森-里奥",
					rv_time:"3天前",
					rv_content:"终于等到你，还好没放弃！(´；ω；`)",
				},{
					rv_pic:"//i2.hdslb.com/bfs/face/825c29a2da9e78fe8fd3f57c65b5d5b1e98daefd.jpg@80w_80h.webp",
					rv_name:"灵山",
					rv_time:"3天前",
					rv_content:"分P有些多，大致做个导航方便查找，有特例会用括号列出欧洲1：圆桌相关欧洲2：凯尔特，英法史实、文学相关欧洲3：凯尔特，欧洲文学、航海相关欧洲4：基督教，罗马相关（结尾大帝，中间大王）欧洲5：欧洲学者，以及东欧、北欧史实传说相关（结尾海叔，中间哥伦布）欧洲6：希腊相关亚洲1：日本相关亚洲2：日本，中国相关接下来亚洲的顺序大概是从印度到西亚（？）",
				},{
					rv_pic:"//i0.hdslb.com/bfs/face/5dedbbf713c397c2477cedfe43c3d1549dc4111b.jpg@80w_80h.webp",
					rv_name:"六界萌哥",
					rv_time:"2天前",
					rv_content:"不吹毛求疵，UP这个视频起码是花了大心血的，虽然有小问题但是还是很不错的特别是对于我月这种已经彻底DSSQ的东西，与其让所有人肆意脑补，不如看点设定来的实在这里是闪厨，奉劝一句所有衡量实力的：1.闪是英灵中数一数二的存在，不是最强2.吹斯卡哈的，斯卡哈一形态只有top class，最多算同级甚至会不如3.真正写和你闪持平的只有大帝赫拉克勒斯小恩等少数几人，其他的都是类比出来的，不要老是脑补迦尔纳碰闪闪怎么样，有脑洞你自己写不就好了4.楼层论是贴吧的，一楼天花板就是按照你闪来的，别轮过头了",
				},]
			}
		},

		methods:{
			showdesc(){
				this.isshowdesc = !this.isshowdesc;
			},
			loadmore(){
				this.page++;
				var p = this.page;
				
				this.visiblelist = this.list.filter(function(item,idx){
					return idx<(5*p);
				})

				if (this.visiblelist.length == this.list.length) {
					this.isload = '没有更多了-去客户端看看？'
				}
			},
			toTop(){
				var timer = setInterval(function(){
					var top = document.body.scrollTop
					document.body.scrollTop = top-top/3;
					if (document.body.scrollTop<=50) {
						document.body.scrollTop = 0
						clearInterval(timer)
					}
				},50)
			},
			//页面渲染
			showMsg(){
				// this.aid = this.$route.params.aid;
				//相关视频
				var xml = new XMLHttpRequest();
				xml.open('GET',"https://comment.bilibili.com/recommendnew,"+this.aid,true);
				xml.send();
				xml.onreadystatechange = function(){
					if (xml.readyState == 4&&(xml.status==200||xml.status==304)) {
						var data = JSON.parse(xml.responseText).data
						// console.log(data)
						this.list = data;
						this.loadmore();
					}
				}.bind(this);

				try{

					this.$ajax.get('http://localhost:12345/detail', {
						params: {
					      aid:this.aid
					    }
					})
					.then((response) => {
						console.log('使用数据库的数据');
						var data = response.data[0];
						// console.log(data.ctime);
						//如果数据库中存在就更换数据，否则用回默认
						if(data){
							this.title = data.title;
							this.desc = data.descri;
							this.view = JSON.parse(data.stat).view;
							this.danmaku = JSON.parse(data.stat).danmaku;
							this.tname = data.tname;
							this.author = JSON.parse(data.owner).name;
							this.author_face = JSON.parse(data.owner).face;
							//计算投递时间 改为过滤器计算
							// var pd = data.pubdate;
							// var nd = new Date().getTime()/1000;
							// var sd = nd-pd
							// var oneDay = 60*60*24;
						 	// this.pubdate = Math.floor(sd/oneDay);
							this.pubdate = data.pbudate;
						}
					})
					.catch((error) => {
						console.log(error);
					});

				}catch(err){
					console.log(err)
				}	

			},

			jump(aid,title,name,view,danmaku){
				console.log('jump');
				this.isjump = true;
				this.aid = aid;
				this.title = title;
				this.author = name;
				this.view = view;
				this.danmaku = danmaku;
			},
		},

		filters:{
			//浏览或弹幕数超过1w则四舍五入
			//计算弹幕数和浏览数
			showview(input){
				if (input>10000) {
					return (input/10000).toFixed(1)+'万'
				}
				return input
			},
			//计算投递日期
			showtime(input){
				var pd = input
				var nd = new Date().getTime()/1000;
				var sd = nd-pd
				var oneDay = 60*60*24;
				var days = Math.floor(sd/oneDay);
				if (days>30&&days<365) {
					var day = Math.floor(days/30)+'月';
					return day
				}else if(days>365) {
					var day = Math.floor(days/365)+'年';
					return day
				}else if(days<1) {
					var hour = Math.floor(sd/60*60)+'小时';
					return hour
				}else if(days>1&&days<30) {
					return days+'天'
				}
			}
		}
	}
</script>
<!--CSS-->
<style scoped lang="scss">
	$size: 20px;
	
	.showmore{
		position: absolute;
	    right: 0;
	    top: 0;
	    bottom: 0;
	    margin: auto 0;
	    width: .74667rem;
	    height: .53333rem;
	    background: url(//s1.hdslb.com/bfs/static/mult/images/ui_2.png) no-repeat;
	    background-size: 15.36rem 46.72rem;
	    background-position: -5.29067rem -6.10133rem;
	    transition: all .1s;
	}
	.showless{
		    position: absolute;
		    right: 0;
		    top: 0;
		    bottom: 0;
		    margin: auto 0;
		    width: .74667rem;
		    height: .53333rem;
		    background: url(//s1.hdslb.com/bfs/static/mult/images/ui_2.png) no-repeat;
		    background-size: 15.36rem 46.72rem;
		    background-position: -5.29067rem -7.36rem;
		    transition: all .1s;
	}
	.detail_select{
		width:100%;
		ul {
			display:flex;
			padding-left:20px;
			border-bottom:1px solid #ccc;
			li{
				display:block;
				height:50px;
				width:33%;
				a{
					font-size:15px;
					color: #999;
					display:block;
					width:100%;
					height:100%;
					text-align:center;
					line-height: 50px;
					position:relative;
					img{
						display:block;
						width:20px;
						height:20px;
						position: absolute;
					    top: 16px;
					    left: 16px;
					}
				}
			}
		}
	}
	.detail_desc{
		padding: .832rem .512rem 0;
	    border-bottom: .02133rem solid #ccc;
	    background: #f3f3f3;
	    h1{
	    	margin: 0 0 .49067rem;
		    line-height: 1.024rem;
		    font-size: .64rem;
		    font-weight: 500;
		    color: #212121;
	    }
	    .view{
    	    position: relative;
		    margin-bottom: .66933rem;
		    color: #757575;
		    p{
		    	display: inline-block;
			    height: .53333rem;
			    vertical-align: middle;
			    line-height: .53333rem;
			    font-size: .512rem;
			    span{}
		    }
	    }
	    .descwarp{
    	    // height: .85333rem;
    	    // height: 5.85333rem;
		    margin-bottom: 1.024rem;
		    overflow: hidden;
		    .desc{
	    	    line-height: .85333rem;
			    color: #757575;
			    font-size: .512rem;
		    }
		    .src{
	    	    margin-top: .768rem;
			    font-size: .512rem;
			    color: #999;
			    a{
			    	float: left;
				    color: #fb7299;
				    font-size: .512rem;
				    margin-right: .21333rem;
			    }
			    a::after{
			    	display: inline-block;
				    margin-left: .21333rem;
				    font-size: .512rem;
				    content: ">";
				    color: #ccc;
			    }
		    }
	    }
	    .showdesc{
	    	transition: all .5s;
	    	height:.85333rem;
	    }
	}
    .author{
	    position: relative;
	    padding: .68267rem 0 .68267rem 2.64533rem;
	    min-height: 1.70667rem;
	    border-bottom: .02133rem solid #ccc;
	    background-color: #f3f3f3;
	    .author_face{
    	    position: absolute;
		    left: .512rem;
		    width: 1.70667rem;
		    height: 1.70667rem;
		    border-radius: .85333rem;
		    border: .02133rem solid #ccc;
		    overflow: hidden;
		    img{
		    	width:100%;
		    	height:100%;
		    }
	    }
	    .author_name{
	    	display: block;
		    min-width: 4.69333rem;
		    margin-top: .17067rem;
		    line-height: .59733rem;
		    font-size: .59733rem;
		    color: #212121;
	    }
	    span{
	    	margin-top: .384rem;
		    display: block;
		    line-height: .512rem;
		    font-size: .512rem;
		    color: #999;
	    }
	    .attention{
			position: absolute;
		    margin: auto 0;
		    top: 0;
		    bottom: 0;
		    right: .512rem;
		    width: 3.072rem;
		    height: 1.28rem;
		    border-radius: .17067rem;
		    text-align: center;
		    font-size: .55467rem;
		    line-height: 1.28rem;
		    color: #fb7299;
		    border: .04267rem solid #fb7299;
		    background-color: #fff;
	    }
    }
	.partbox{
	    position: relative;
	    background-color: #f3f3f3;
	    width: 93.4%;
	    padding: .68267rem 3.2% 0;
	    border-bottom: .02133rem solid #ccc;
	    overflow: hidden;
	    .partTop{
	    	position: relative;
			width: 100%;
			margin-bottom: .896rem;
			span{
			    font-size: .64rem;
			    line-height: .64rem;
			    color: #212121;
			    text-align: left;
			}
	    }
	    .partcontent{
	    	position: relative;
		    width: 100%;
		    overflow: hidden;
		    margin-bottom: .896rem;
	    	.partc{
		    	display:block;
		    	width:25%;
		    	height:50px;
		    	position:relative;
		    	float: left;
			    width: 5.09867rem;
			    height: 2.73067rem;
			    border: .04267rem solid #fb7299;
			    border-radius: .42667rem;
			    margin-right: .42667rem;
			    background-color: #fff;
			    p{
			    	position: absolute;
				    top: 50%;
				    left: 50%;
				    width: 4.26667rem;
				    transform: translate(-50%,-50%);
				    -webkit-transform: translate(-50%,-50%);
				    color: #fb7299;
				    font-size: .512rem;
				    line-height: .768rem;
				    text-align: center;
			    }
		    }
			    
	    }
	}
	.relatedtag{
	    padding: 1.024rem 0 .384rem .512rem;
	    border-bottom: .02133rem solid #ccc;
	    color: #212121;
	    background-color: #f3f3f3;
	    overflow:hidden;
	    h3{
	    	margin-bottom: .85333rem;
		    font-weight: 400;
		    font-size: .64rem;
	    }
	    a{
    	    float: left;
		    display: block;
		    margin: 0;
		    padding: 0;
		    text-decoration: none;
		    margin-bottom: .512rem;
		    margin-right: .42667rem;
		    padding: .40533rem .68267rem;
		    font-size: .55467rem;
		    border: .02133rem solid #ccc;
		    border-radius: .68267rem;
		    color: #505050;
		    background-color: #fff;
		    text-align: center;
	    }
	}
	.relatedvideo{
	    padding: 1.024rem 0 0;
    	background-color: #f3f3f3;
    	h3{
		    padding-left: .512rem;
		    margin-bottom: .42667rem;
		    font-size: .64rem;
		    font-weight: 400;
    	}
    	.relatedid{
    		.videolist{
			    padding: 0 .512rem;
			    a{
			    	display: block;
				    position: relative;
				    padding: .42667rem 0 .42667rem 5.504rem;
				    height: 3.61467rem;
				    overflow: hidden;
				    border-top: .02133rem solid #ccc;
				    .list_pic{
				    	position: absolute;
					    top: .42667rem;
					    left: 0;
					    width: 4.992rem;
					    height: 3.11467rem;
					    border-radius: .128rem;
					    overflow: hidden;
					    img{
					    	width:100%;
					    	height:100%;
					    }
				    }
				    .list_content{
				    	.list_title{
			    		    display: block;
						    margin-bottom: 9px;
						    max-height: 1.536rem;
						    line-height: .968rem;
						    font-size: .59733rem;
						    color: #212121;
				    	}
				    	.list_author{
				    		display: block;
						    margin-bottom: 6px;
						    line-height: .68267rem;
						    font-size: .512rem;
						    color: #757575	
				    	}
				    	.list_view{
				    		line-height: .68267rem;
						    font-size: .512rem;
						    color: #757575;
						    span{
						    	float: left;
    							width: 50%;
						    }
				    	}
				    }
			    }
    		}
    		.loadmore{
			    margin-top: .512rem;
			    width: 100%;
			    line-height: 1.728rem;
			    font-size: .55467rem;
			    color: #fb7299;
			    background-color: #e7e7e7;
			    text-align: center;
    		}
    	}
	}
	.review{
		padding-top: 1.024rem;
    	background-color: #f3f3f3;
    	h3{
    		margin-bottom: .08533rem;
		    margin-left: .512rem;
		    font-size: .64rem;
		    font-weight: 400;
    	}
    	.review_content{
    		padding: 0 .512rem;
			.review_list{
			    position: relative;
			    padding: .768rem 0 .66133rem 2.13333rem;
			    min-height: 1.70667rem;
			    border-top: .02133rem solid #ccc;
			    overflow: hidden;
			    .rv_pic{
			    	position: absolute;
				    width: 1.70667rem;
				    height: 1.70667rem;
				    top: .768rem;
				    left: 0;
				    border-radius: 50%;
				    overflow: hidden;
				    img{
				    	width:100%;
				    	height:100%;
				    }
			    }
			    .rv_name{
			    	display: block;
				    max-width: 60%;
				    margin-bottom: .512rem;
				    color: #757575;
				    font-size: .55467rem;
			    }
			    .rv_time{
			    	position: absolute;
				    top: .81067rem;
				    right: 0;
				    font-size: .46933rem;
				    color: #999;
			    }
			    .rv_content{
			    	color: #212121;
				    line-height: .81067rem;
				    font-size: .59733rem;
			    }
			}
			.review_list:first-child{
				border-top:none;
			}
    	}
    	.review_download{
		    display: block;
		    margin: .128rem .512rem 0;
		    height: 1.536rem;
		    line-height: 1.536rem;
		    font-size: .55467rem;
		    color: #fff;
		    background-color: #fb7299;
		    border-radius: .128rem;
		    text-align: center;
    	}
	}
	.detail_footer{
		padding: 1.344rem 0 1.17333rem;
 		background: #f3f3f3;
		.footer_select{
			overflow:hidden;
			a{
				float: left;
			    height: .88267rem;
			    border-right: .02133rem solid #ccc;
			    box-sizing: border-box;
			    width: 33%;
			    text-align: center;	
			    i{
			    	display: inline-block;
				    margin-right: .42667rem;
				    vertical-align: middle;
				    background: url(//s1.hdslb.com/bfs/static/mult/images/ui_2.png) no-repeat;
				    background-size: 15.36rem 46.72rem;
				    overflow: hidden;
			    }
			    span{
			    	font-size: .512rem;
				    line-height: .68267rem;
				    vertical-align: middle;
			    }
			}
			a:last-child{
			    border-right: none;
			}
		}
 		p{
 			margin-top: 1.19467rem;
		    font-size: .512rem;
		    text-align: center;
		    color: #999;
 		}
	}
</style>