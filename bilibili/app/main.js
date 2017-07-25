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
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(Vuex);
//通过 Vue.use()明确地安装路由功能
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper)
//挂载axios在Vue构造器下
Vue.prototype.$ajax = axios;
//拥入weui样式库
import "weui"
//引入组件
import home from "./components/routes/home.vue";
import Rank from "./components/routes/Rank.vue";

var router = new VueRouter({
	routes: [ {
		path: '/Rank',
		component: Rank
	}]
	// （缩写）相当于 routes: routes
});

//新建一个状态管理
var store = new Vuex.Store({
	//定义一个状态
	//所有组件的状态，也就是数据源
	state: {
		Ranks:[],
		imgUrl: null,
		isShowGallery: false,
		direction: "left",
//		page:1
	},

	//分发状态
	mutations: {
		setRank(state) {
			console.log(Vue)
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
		},
	//action就是触发mutations
		actions: {
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