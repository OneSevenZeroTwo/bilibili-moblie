<!--HTML-->
<template>
	<div>
		<div class="searchbar">
			<div class="searchin">
				<i class="searchlogo"></i>
				<input type="text" placeholder="搜索视频、番剧、UP主或AV号" v-model="searchc" @input="showsearch()">
				<i class="cancellogo" @click="clearsearch()"></i>
			</div>
			<a class="cancel" href="#">
				<p>取消</p>
			</a>

		</div>
		<div class="minasan">
			<p>
				大家都在搜
				<i :class="{'showmore':!isshowmore,'showless':isshowmore}" @click="showmore()"></i>
			</p>
			<div class="searchtabs" :style="{'height':isshowmore?'':'5.92533rem'}">
				<div v-for="tab in searchtabs">
					<p>{{tab}}</p>
				</div>
			</div>
		</div>
		<div class="history">
			<div class="his_title">
				<p>历史搜索</p>
			</div>
			<div class="his_content" v-for="history in searchhistory">
				<div class="icon">
					<img src="//s1.hdslb.com/bfs/static/mult/images/history.png">
				</div>
				<p>
					{{history}}
				</p>
			</div>
			<div class="his_clear" @click="clearhistory()">
				<p>清除历史记录</p>
			</div>
		</div>
		<div class="searchlist" v-show="isshowlist">
		 <!-- :href="'#/detail/'+li.aid" -->
			<a v-for="li in searchlist" @click="sethistory(li.title)">
				<!-- <p>{{li.title|hightlight}}</p> -->
				<!-- <p>{{highlight(li.title)}}</p> -->
				<p>{{li.title}}</p>
				<div class="type">
					<p>{{li.tname}}</p>
				</div>
			</a>
			<p @click="loadmore()" class="loadmore">{{isload}}</p>
		</div>
	</div>
</template>
<!--JS-->
<script>
	export default {
		data(){
			return {
				searchtabs:["王者荣耀","吃货木下","极限挑战","暴走大事件","全职高手","中国有嘻哈","大司马","国产","型月","fate","英灵","fgo","fate extra","fate zero","fate全系列"],
				searchhistory:[],
				isshowmore:false,
				isshowlist:false,
				searchc:'',
				searchlist:[],
				listpage:1,
				isload:'点击加载多',
			}
		},
		methods:{
			showmore(){
				this.isshowmore = !this.isshowmore;
			},
			//显示搜索列表,触发搜索
			showsearch(){
				// console.log(this.searchc);
				this.isshowlist = true;
				this.search();
			},
			//清除搜索列表,并初始化
			clearsearch(){
				this.isshowlist = false;
				this.searchc = '';
				this.page = 1;
				this.searchlist = [];
			},
			//搜索
			search(){
				console.log('搜索中');
				var self = this;
				var searchcon = self.searchc
				var page = self.listpage
				this.$ajax.get('http://localhost:12345/search',{
					params:{
						target:searchcon,
						page:page,
					}
				})
				.then((response) => {
					console.log('搜索成功');
					console.log(response.data);
					
					self.searchlist = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
			},
			//加载更多
			loadmore(){
			    this.listpage++;
			    this.search();
			},
			//清除历史
			clearhistory(){
				this.searchhistory = [];
			},
			//记录搜索历史
			sethistory(a){
				console.log(a)
				this.searchhistory.push(a)
			},
			highlight(input){
				var a = this.searchc;
				return input.split(a).join('<em style="color:red;">'+a+'</em>');
			}
		},
	}
</script>
<!--CSS-->
<style scoped lang="scss">
	.showmore{
		position: absolute;
	    right: 15px;
	    top: 15px;
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
		    right: 15px;
		    top: 15px;
		    bottom: 0;
		    margin: auto 0;
		    width: .74667rem;
		    height: .53333rem;
		    background: url(//s1.hdslb.com/bfs/static/mult/images/ui_2.png) no-repeat;
		    background-size: 15.36rem 46.72rem;
		    background-position: -5.29067rem -7.36rem;
		    transition: all .1s;
	}
	.searchbar{
	    position: fixed;
	    width: 93.33%;
	    top: 0;
	    left: 0;
	    height: 1.87733rem;
	    padding: 0 3.33%;
	    background-color: #fff;
	    z-index: 10;
	    .searchin{
	    	position: relative;
		    width: 88.29%;
		    height: 1.68rem;
		    margin-top: .29867rem;
		    float: left;
		    .searchlogo{
		    	position: absolute;
			    width: .93867rem;
			    height: .93867rem;
			    top: .37067rem;
			    left: .512rem;
			    background: url(//s1.hdslb.com/bfs/static/mult/images/search-pro.png) no-repeat;
			    background-size: 100% 100%;
		    }
		    .cancellogo{
	    	    position: absolute;
			    width: 1.28rem;
			    height: 1.28rem;
			    top: 4px;
			    right: 4px;
			    background: url(//s1.hdslb.com/bfs/static/mult/images/search-close.png) no-repeat;
			    background-size: .9733rem .9733rem;
			    background-position: 46.7% 46.7%
		    }
		    input{
		    	display: block;
			    width: 100%;
			    height: 100%;
			    padding-left: 1.70667rem;
			    padding-right: 3.37067rem;
			    box-sizing: border-box;
			    font-size: .55467rem;
			    border: .02133rem solid #e7e7e7;
			    border-radius: .17067rem;
			    background-color: #f4f4f4;
			    color: #505050;
		    }
	    }
	    .cancel{
    	    position: relative;
    	    display:block;
		    float: right;
		    width: 2.28rem;
		    margin-top: .84rem;
		    p{
	    	    text-align: right;
			    color: #fb7299;
			    font-size: .79733rem;
			    line-height: .79733rem;
		    }
	    }
	}
	.minasan{
		position: relative;
		margin-top: 2.89867rem;
		z-index: 0;
		margin-left: .53333rem;
		margin-right: .14933rem;
		p{
		    position: relative;
		    color: #999;
		    line-height: .79733rem;
		    font-size: .79733rem;
		    text-align: left;
		}
		.searchtabs{
		    position: relative;
		    width: 100%;
		    margin-top: .67067rem;
		    margin-bottom: .68267rem;
		    overflow: hidden;
		    transition: all 0.5s;
		    div{
				position: relative;
			    float: left;
			    padding: .20533rem .512rem;
			    margin-top: .512rem;
			    margin-right: .36267rem;
			    border: .04267rem solid #ccc;
			    border-radius: .68267rem;
			    p{	
			    	padding: .58267rem;
			    	font-size: .55467rem;
				    line-height: .55467rem;
				    color: #505050;
				    text-align: center;
			    }
		    }
		}
	}
	.history{
	    position: relative;
	    margin-top: 1.10933rem;
	    border-top: .42667rem solid #f4f4f4;
	    .his_title{
    	    position: relative;
    		margin-left: .53333rem;
    		p{
    			text-align: left;
			    color: #999;
			    font-size: .759733rem;
			    line-height: 2.96267rem;
    		}
	    }
	    .his_content{
	    	position: relative;
		    height: 2.87733rem;
		    margin-left: .53333rem;
		    border-bottom: .02133rem solid #ccc;
		    .icon{
		    	position: relative;
			    float: left;
			    width: 1.0267rem;
			    margin-top: .9733rem;
			    img{
		    	    display: block;
    				width: 100%;
			    }
		    }
		    p{
	    	    position: relative;
			    float: left;
		        width: 90%;
    			height: 2.87733rem;
			    overflow: hidden;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    margin-left: .684rem;
			    font-size: .79733rem;
			    line-height: 2.87733rem;
			    color: #505050;
			    text-align: left;
		    }
	    }
	    .his_clear{
	    	position: relative;
    		margin: auto;
	    	p{
	    		text-align: center;
			    color: #999;
			    font-size: 0.89733rem;
    			line-height: 2.96267rem;
	    	}
	    }
	}
	.searchlist{
		position:absolute;
		background-color:#FFF;
		z-index:9;
		width:100%;
		height:100%;
		top:0;
		margin-top: 2.27733rem;
		a{
			display: block;
		    position: relative;
		    width: 96.8%;
		    padding-left: 3.2%;
		    height: 2.37733rem;
		    border-bottom: .02133rem solid #ccc;
	        background-color: #f4f4f4;
		    p{
	    	    font-size: .59733rem;
			    line-height: 2.37733rem;
			    color: #212121;
			    text-align: left;
			    overflow: hidden;
			    width: 80%;
			    white-space: nowrap;
			    text-overflow: ellipsis;
		    }
		    .type{
		        position: relative;
				float: right;
				margin-right: .512rem;
				padding-left: .256rem;
				padding-right: .256rem;
			    height: 1.296rem;
    			top: -1.833rem;
				background-color: #ccc;
				border-radius: .17067rem;
				width: 40px;
			    p{
		    	    color: #fff;
				    font-size: .46933rem;
				    line-height: 1.296rem;
				    text-align: center;
			    }
		    }
		}
		.loadmore{
		    width: 90%;
		    height: 2.37733rem;
		    text-align: center;
		    line-height: 2.37733rem;
		    margin: auto;
		    border: 1px solid #ccc;
		    margin-top: 10px;
		}
	}
</style>