//引入vue框架
import Vue from "vue";
//引入路由
import VueRouter from 'vue-router';
//引入vuex状态管理
import Vuex from 'vuex';
import VueResource from 'vue-resource';
//axios的ajax封装库
import axios from "axios";
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';


Vue.use(MuseUI)
Vue.use(Vuex);
//通过 Vue.use()明确地安装路由功能
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper)
//挂载axios在Vue构造器下
Vue.prototype.$ajax = axios;
//拥入weui样式库
import "weui"

//引入样式-------------------

import './css/reset.css';
import './css/home.css';
import './css/partition.css';
// import './js/referrer-killer.js';

//-------------------
//引入组件
import home from "./components/routes/home.vue";
import detail from "./components/routes/detail.vue";
import Rank from "./components/routes/Rank.vue";
import test from "./components/routes/test.vue";
import search from "./components/routes/search.vue";
import classify from "./components/routes/classify.vue";
import channel from "./components/routes/channel.vue";
import channel1 from "./components/routes/channel1.vue";
import Rank0 from "./components/routes/Rank0.vue";
import Rank1 from "./components/routes/Rank1.vue";
import Rank11 from "./components/routes/Rank11.vue";
import Rank119 from "./components/routes/Rank119.vue";
import Rank129 from "./components/routes/Rank129.vue";
import Rank155 from "./components/routes/Rank155.vue";
import Rank160 from "./components/routes/Rank160.vue";
import Rank167 from "./components/routes/Rank167.vue";
import Rank23 from "./components/routes/Rank23.vue";
import Rank3 from "./components/routes/Rank3.vue";
import Rank33 from "./components/routes/Rank33.vue";
import Rank36 from "./components/routes/Rank36.vue";
import Rank4 from "./components/routes/Rank4.vue";
import Rank81 from "./components/routes/Rank81.vue";
import mine from "./components/routes/mine.vue";
import login from "./components/routes/login.vue";
import register from "./components/routes/register.vue";
import xmine from "./components/xmine.vue";
import xfav from "./components/xfav.vue";
import xmyPost from "./components/xmyPost.vue";
import xhistory from "./components/xhistory.vue";

var router = new VueRouter({
	routes: [{
			path: '/index',
			component:home
		},{
			path: '/Rank',
			component: Rank
		},
		{
		path: '/Rank',
		component: Rank
		},{
			path: '/detail/:aid',
			component: detail
		},{
			path: '/search',
			component: search
		},{
			path: '/index/classify',
			component: classify
		},{
			path: '/channel',
			component: channel,
			children:[{
				path: 'channel1',
				component: channel1
			}]
		},{
			path: '/index/test',
			component: test
		},,{
			path: '/Rank/0',
			component: Rank0,
		},{
			path: '/Rank/1',
			component: Rank1,
		},{
			path: '/Rank/11',
			component: Rank11,
		},{
			path: '/Rank/119',
			component: Rank119,
		},{
			path: '/Rank/129',
			component: Rank129,
		},{
			path: '/Rank/155',
			component: Rank155,
		},{
			path: '/Rank/160',
			component: Rank160,
		},{
			path: '/Rank/167',
			component: Rank167,
		},{
			path: '/Rank/23',
			component: Rank23,
		},{
			path: '/Rank/3',
			component: Rank3,
		},{
			path: '/Rank/33',
			component: Rank33,
		},{
			path: '/Rank/36',
			component: Rank36,
		},{
			path: '/Rank/4',
			component: Rank4,
		},{
			path: '/Rank/81',
			component: Rank81,
		},{
			path: '/',
			redirect: '/index'
		},{
			path: '/Rank',
			redirect: '/Rank/0'
			path:'/mine',
			component:mine,
			children:[{
				path:'user',
				component:xmine
			},{
				path:'fav',
				component:xfav
			},{
				path:'myPost',
				component:xmyPost
			},{
				path:'history',
				component:xhistory
			}]
		},{
			path:'/login',
			component:login
		},,{
			path:'/register',
			component:register
		}]
		// （缩写）相当于 routes: routes
});

//新建一个状态管理
var store = new Vuex.Store({
	//定义一个状态
	//所有组件的状态，也就是数据源
	state: {
		count: 1,
		title: "标题",
		Ranks:[],
		search: "",
		news: [],
		imgUrl: null,
		isShowGallery: false,
		direction: "left",
		classify:[],
		limit:4,
		chan:[],
		index:"",
		rout:"",
		isloading:true,
		list:20,
		nav:[{nav:"全站",rid:0},{nav:"动画",rid:1},{nav:"番剧",rid:33},{nav:"国创",rid:167},{nav:"电影",rid:23},
		{nav:"电视剧",rid:11},{nav:"音乐",rid:3},{nav:"舞蹈",rid:129},{nav:"游戏",rid:4},{nav:"科技",rid:36},
		{nav:"生活",rid:160},{nav:"鬼畜",rid:119},{nav:"时尚",rid:155},{nav:"娱乐",rid:81}],
		Img: ["http://s1.hdslb.com/bfs/static/mult/images/rank1.png", "http://s1.hdslb.com/bfs/static/mult/images/rank2.png", "http://s1.hdslb.com/bfs/static/mult/images/rank3.png"],
		images:["../app/images/1.png",
				"../app/images/2.png",
				"../app/images/3.png",
				"../app/images/4.png",
				"../app/images/5.png",
				"../app/images/6.png",
				"../app/images/7.png",
				"../app/images/8.png",
				"../app/images/9.png",
				"../app/images/10.png",
				"../app/images/11.png",
				"../app/images/12.png",
				"../app/images/13.png",
				"../app/images/14.png",
				"../app/images/15.png",
				"../app/images/16.png",
				"../app/images/17.png",
				"../app/images/18.png",
				"../app/images/19.png",
				"../app/images/20.png",
				"../app/images/21.png",
				"../app/images/22.png",
				"../app/images/23.png",
				"../app/images/24.png",
				"../app/images/25.png",
				"../app/images/26.png",
				"../app/images/27.png",
				"../app/images/28.png",
				"../app/images/29.png",
				"../app/images/30.png",]

		Img: ["//s1.hdslb.com/bfs/static/mult/images/rank1.png", "//s1.hdslb.com/bfs/static/mult/images/rank2.png", "//s1.hdslb.com/bfs/static/mult/images/rank3.png"]
	},
	getters: {
		getCount(state) {
			//处理数据
			return state.count + "ed"
		}
	},
	//分发状态
	mutations: {
		setCount(state, data) {
			state.count = data

		},
		settitle(state, data) {
			state.title = data
		},
		setRank(state) {
			console.log(Vue)
			Vue.http.jsonp("http://api.bilibili.com/x/web-interface/ranking?day=3&jsonp=jsonp", {
				params: {
					rid:state.rout,
				}
			}).then((data) => {
				console.log(state.Ranks)
				state.isloading=true,
				state.Ranks = state.Ranks.concat(data.data.data.list),
				state.images=state.images.concat(data.data.data.list.pic)
			Vue.http.jsonp("http://api.bilibili.com/x/web-interface/ranking?rid=0&day=3&jsonp=jsonp", {
//				params: {
//					page: state.page++,
//					limit: 10
//				}
			}).then((data) => {
				console.log(state.Ranks)
				state.Ranks = state.Ranks.concat(data.data.data.list)
				console.log(state.Ranks)
			}, (err) => {

			})
		},
		setNews(state) {
			Vue.http.jsonp('http://api.bilibili.com/x/web-interface/dynamic/index?jsonp=jsonp',{
				
			})
			.then((response) => {
				console.log(response.data.data)
				state.news = response.data.data
			})
			.catch((error) => {
				console.log(error);
			});
		},
		setchannel(state){
			Vue.http.jsonp('http://api.bilibili.com/x/web-interface/dynamic/index?jsonp=jsonp',{
				// params: {
				// 	page: state.page++,
				// 	limit: 4
				// }
			})
			.then((data1) => {
				console.log(data1.data.data)
				state.chan = data1.data.data
			})
			.catch((error) => {
				console.log(error);
			});
		}
	},
	//action就是触发mutations
	actions: {
		setChange(context, data) {
			context.commit('setCount', data)
			context.commit('settitle', data)
		},
		setNews(context, data) {
			context.commit('setNews')
		},
		setRank(context, data) {
			context.commit('setRank')
		},
		setchannel(context, data) {
			context.commit('setchannel')
		}

			setRank(context, data) {
				context.commit('setRank')
			}
	}
})

new Vue({
	el: "#demo",
	template: `
		<router-view></router-view>
	`,
	router,
	store,
})