define(function(require){
	var template = require('template'); 
	var Public = {
		temp: function(tpl, obj, ele, append){
			if(!append){
				append = {};
			}
			$.ajax({
				type: 'GET',
				url: tpl,
				dataType: 'text',
				success: function(data){
					// console.log(data);
					var render = template.compile(data);
					var html = render(obj);

					if(append.appendChild){
						ele.append(html);
					}else{
						ele.html(html);
					}					
				},
				error: function(xhr){
					console.log(xhr);
				}
			});
		}
	}
	return Public;
});