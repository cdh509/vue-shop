Vue.component('common-list', {
	props: ['common'],
	template: '<li><div class="content-wares"><a href="javascript:;"><img :src="common.listlink"></a></div><p>{{common.listprice}}<span class="throughline">{{common.listpriceTh}}</spanp></li>'
});
var list = new Vue({
	el:"#list",
	mounted: function(){
		var	self=this;
		self.commonListDatas();
	},
	methods:{
		commonListDatas:function(){
			var	self=this;
			this.$http.get('js/datas/baibeiCommonListDatas.json').then(function(response){
			    if (response.body.start === 1 && response.body.datas.length) {
		    		self.commonList = response.body.datas;
		    		console.log(self.commonList);
			    }
			}, function(response){
			});
		}	
	},
    data: {   
	   	commonList:{}
    }
})