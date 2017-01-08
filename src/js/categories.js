Vue.component('nav-list', {
	props: ['nav'],
	template: '<li><a :href="nav.listtype">{{nav.listlink}}</a></li>'
});
Vue.component('mid-list', {
	props: ['mid'],
	template: '<li><a href="javascript:;"><img :src="mid.listlink"></a><p>{{mid.listtype}}</p></li>'
})
Vue.component('recommend-list', {
	props: ['recommend'],
	template: '<li><a href="javascript:;"><img :src="recommend.listlink"></a><p>{{recommend.listtype}}</p></li>'
})
Vue.component('woman-list', {
	props: ['woman'],
	template: '<li><a href="javascript:;"><img :src="woman.listlink"></a><p>{{woman.listtype}}</p></li>'
})
Vue.component('man-list', {
	props: ['man'],
	template: '<li><a href="javascript:;"><img :src="man.listlink"></a><p>{{man.listtype}}</p></li>'
})
var a = new Vue({
	el: '.body',
	mounted: function(){
		var	self=this;
		self.navListDatas();
		self.midListDatas();
		self.recommendListDatas();
		self.girlListDatas();
		self.manListDatas();
	},
	methods:{
		navListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/categoriesNavListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.navList = response.body.datas;
			    }
			}, function(response){
			});
		},
		midListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/categoriesMidListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.midList = response.body.datas;
			    }
			}, function(response){
			});
		},
		recommendListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/categoriesRecommendListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.recommendList = response.body.datas;
			    }
			}, function(response){
			});
		},
		girlListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/categoriesGirlListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.girlList = response.body.datas;
			    }
			}, function(response){
			});
		},
		manListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/categoriesManListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.manList = response.body.datas;
			    }
			}, function(response){
			});
		}	
	},
	data: {
		//导航
		navList:{}, 
		//中秋快乐
		midList:{}, 
		//为你推荐
		recommendList:{},
		//女装
		girlList:{}, 
		//男装
		manList:{}  
    }
})