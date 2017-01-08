//轮播图
Vue.component('roll-list', {
	props: ['roll'],
	template: '<li><img :src="roll"></li>'
});
//content-sliding
Vue.component('content-sliding', {
	props: ['sliding'],
	template: '<li></li>'
});
//导航
Vue.component('search-list', {
	props: ['search'],
	template: '<li><div class="content" :class="[search.pnt]"><a href="search.link"></a></div><p>{{search.search}}</p></li>'
});
//cpmBig
Vue.component('cpmbig', {
	props: ['cpmbig'],
	template: '<ul><slot></slot></ul>'
});
//content-benefit
Vue.component('content-benefit', {
	props: ['benefit'],
	template: '<li><img :src="benefit"></li>'
});
//content-necessary
Vue.component('necessary-list', {
	props: ['necessary'],
	template: '<li><p>{{necessary.P1}}</p><p>{{necessary.P2}}</p><div class=".content-picture"><img :src="necessary.pnt"></div></li>'
});
//footer
Vue.component('footer-list', {
	props: ['footer'],
	template: '<li><div class="foot" :class=[footer.pnt]></div><p>{{footer.search}}</p></li>'
});
var vm = new Vue({
	el:".box",
	mounted: function(){
		var	self=this;			
		var time=setInterval(function(){
			self.isShow++;
			if (self.isShow===4) {
				self.isShow=0;
			};
		},1000);
		self.rollListDatas();
		self.searchListDatas();
		self.cpmbigListDatas();
		self.necessaryListDatas();
		self.footerListDatas();
	},
	methods:{
		rollListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/homepageRollListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.rollList = response.body.datas;
			    }
			}, function(response){
			});
		},
		searchListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/homepageSearchListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.searchList = response.body.datas;
			    }
			}, function(response){
			});
		},
		cpmbigListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/homepageCpmbigListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.cpmbigList = response.body.datas;
			    }
			}, function(response){
			});
		},
		necessaryListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/homepageNecessaryListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.necessaryList = response.body.datas;
			    }
			}, function(response){
			});
		},
		footerListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/homepageFooterListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.footerList = response.body.datas;
			    }
			}, function(response){
			});
		}	
	},
	data: {   			    	
		isShow:0,
		//轮播图
	   	rollList:{},
		//导航
	   	searchList:{},
		//cpmbig
	   	cpmbigList:{},
		//content-necessary
		necessaryList:{},
		//footer
	   	footerList:{}
	}
});		