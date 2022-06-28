$(document).ready(function(){
	$('a.lightbox').divbox({caption: false, width: 2000, height: 1000});
	// $('a.iframe').divbox({ width: 200, height: 200 , caption: false});
	// $('a.ajax').divbox({ type: 'ajax', width: 200, height: 200 , caption: false,api:{
	// 	afterLoad: function(o){ 
			$(o).find('a.close').click(function(){
				o.closed();
				return false;
			});
			
			$(o).find('a.resize').click(function(){
				o.resize(200,50);
				return false;
			});
		}
);
// 	}});
// });
// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


 