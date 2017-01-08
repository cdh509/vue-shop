define(function(require){
	function showlist(inde){
		var contentList = document.querySelectorAll('.content-list');
		var imgs        = document.querySelector('header a img')
		for (var i = contentList.length - 1; i >= 0; i--) {
			contentList[i].style.display = 'none';
		}
		contentList[inde].style.display = 'block';
		imgs.style.display='none';
	}
	var routes = {
        '/author': function () {
			showlist(1);
    	},
        '/autho': function() { 
        	showlist(2);
        },	        
        '/auth': function() { 
        	showlist(3);
        }
    };
	var router = Router(routes);
	router.init();
})