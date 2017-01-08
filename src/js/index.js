define(function(require){ 
	var index ={
		init: function(){
			this.bar();
		},
		bar:function(){
			var one       = $('.one');
			var maxWidth  = $('.two').width();
			var percent   = $('.percent');
			var thisWidth = 0;
			var times = setInterval(function(){
				thisWidth += 6;
				percent.text(thisWidth + '%');
				one.css('width', maxWidth*thisWidth/100);

				if (thisWidth >= 100) {
					clearInterval(times);
					percent.text('100%');
					one.css('width', maxWidth);
					window.location.href = './homepage.html';
				}
			}, 100);
		}
	}
	index.init();	
})	
