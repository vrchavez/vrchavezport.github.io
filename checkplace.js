$(document).ready(function() {
			
	checkplace();
			
	$(window).resize(checkplace);
})	
function checkplace() {	
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 300) &&($(window).scrollTop() < 810)) {
			$('#abou').css({"border" : "solid 2px #141823"});
			$('#abou').css({"background-color": "#141823"});
			$('#abou').css({"color": "#f8f8f8"});			
			$('#abou').mouseover(function(){
			    $('#abou').css({"border": "solid 2px #141823"});
			    $('#abou').css({"background-color": "#141823"});
				$('#abou').css({"color": "#f8f8f8"});
			});
			$('#abou').mouseout(function(){
			    $('#abou').css({"border": "solid 2px #141823"});
			    $('#abou').css({"background-color": "#141823"});
				$('#abou').css({"color": "#f8f8f8"});
			});
		} else if(($(window).scrollTop() < 300) ||($(window).scrollTop() > 810)){
			$('#abou').css({"border" : "solid 2px #f8f8f8"});
			$('#abou').css({"background-color": "transparent"});
			$('#abou').css({"color": "#141823"});
			$('#abou').mouseover(function(){
			    $('#abou').css({"border": "solid 2px #141823"});
			    $('#abou').css({"background-color": "#141823"});
				$('#abou').css({"color": "#f8f8f8"});
			});
			$('#abou').mouseout(function(){
			    $('#abou').css({"border": "solid 2px #f8f8f8"});
			    $('#abou').css({"background-color": "transparent"});
				$('#abou').css({"color": "#141823"});
			});
		}
	});
			
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 825) &&($(window).scrollTop() < 1478)) {
			$('#ski').css({"border" : "solid 2px #141823"});
			$('#ski').css({"background-color": "#141823"});
			$('#ski').css({"color": "#f8f8f8"});
			$('#ski').mouseover(function(){
			    $('#ski').css({"border": "solid 2px #141823"});
				$('#ski').css({"background-color": "#141823"});
				$('#ski').css({"color": "#f8f8f8"});
			});
			$('#ski').mouseout(function(){
			    $('#ski').css({"border": "solid 2px #141823"});
				$('#ski').css({"background-color": "#141823"});
				$('#ski').css({"color": "#f8f8f8"});
			});
		} else {
			$('#ski').css({"border" : "solid 2px #f8f8f8"});
			$('#ski').css({"background-color": "transparent"});
			$('#ski').css({"color": "#141823"});
			$('#ski').mouseover(function(){
			    $('#ski').css({"border": "solid 2px #141823"});
				$('#ski').css({"background-color": "#141823"});
				$('#ski').css({"color": "#f8f8f8"});
			});
			$('#ski').mouseout(function(){
			    $('#ski').css({"border": "solid 2px #f8f8f8"});
				$('#ski').css({"background-color": "transparent"});
				$('#ski').css({"color": "#141823"});
			});
		}
	});
			
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 1480) &&($(window).scrollTop() < 2800)) {
			$('#wor').css({"border" : "solid 2px #141823"});
			$('#wor').css({"background-color": "#141823"});
			$('#wor').css({"color": "#f8f8f8"});
			$('#wor').mouseover(function(){
			    $('#wor').css({"border": "solid 2px #141823"});
				$('#wor').css({"background-color": "#141823"});
				$('#wor').css({"color": "#f8f8f8"});
			});
			$('#wor').mouseout(function(){
			    $('#wor').css({"border": "solid 2px #141823"});
				$('#wor').css({"background-color": "#141823"});
				$('#wor').css({"color": "#f8f8f8"});
			});
		} else {
			$('#wor').css({"border" : "solid 2px #f8f8f8"});
			$('#wor').css({"background-color": "transparent"});
			$('#wor').css({"color": "#141823"});
			$('#wor').mouseover(function(){
			    $('#wor').css({"border": "solid 2px #141823"});
				$('#wor').css({"background-color": "#141823"});
				$('#wor').css({"color": "#f8f8f8"});				
			});
			$('#wor').mouseout(function(){
			    $('#wor').css({"border": "solid 2px #f8f8f8"});
				$('#wor').css({"background-color": "transparent"});
				$('#wor').css({"color": "#141823"});
			});
		}
	});
			
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 2770) &&($(window).scrollTop() < 3200)) {
			$('#schoo').css({"border" : "solid 2px #141823"});
			$('#schoo').css({"background-color": "#141823"});
			$('#schoo').css({"color": "#f8f8f8"});
			$('#schoo').mouseover(function(){
			    $('#schoo').css({"border": "solid 2px #141823"});
				$('#schoo').css({"background-color": "#141823"});
				$('#schoo').css({"color": "#f8f8f8"});
			});
			$('#schoo').mouseout(function(){
			    $('#schoo').css({"border": "solid 2px #141823"});
				$('#schoo').css({"background-color": "#141823"});
				$('#schoo').css({"color": "#f8f8f8"});
			});
		} else {
			$('#schoo').css({"border" : "solid 2px #f8f8f8"});
			$('#schoo').css({"background-color": "transparent"});
			$('#schoo').css({"color": "#141823"});
			$('#schoo').mouseover(function(){
			    $('#schoo').css({"border": "solid 2px #141823"});
				$('#schoo').css({"background-color": "#141823"});
				$('#schoo').css({"color": "#f8f8f8"});
			});
			$('#schoo').mouseout(function(){
			    $('#schoo').css({"border": "solid 2px #f8f8f8"});
				$('#schoo').css({"background-color": "transparent"});
				$('#schoo').css({"color": "#141823"});
			});
		}
	});
			
	$(window).bind('scroll', function() {
		if($(window).scrollTop() > 3300) {
			$('#conta').css({"border" : "solid 2px #141823"});
			$('#conta').css({"background-color": "#141823"});
			$('#conta').css({"color": "#f8f8f8"});
			$('#conta').mouseenter(function(){
			    $('#conta').css({"border": "solid 2px #141823"});
				$('#conta').css({"background-color": "#141823"});
				$('#conta').css({"color": "#f8f8f8"});
			});
			$('#conta').mouseleave(function(){
			    $('#conta').css({"border": "solid 2px #141823"});
				$('#conta').css({"background-color": "#141823"});
				$('#conta').css({"color": "#f8f8f8"});
			});
		} else if($(window).scrollTop() < 3300) {
			$('#conta').css({"border" : "solid 2px #f8f8f8"});
			$('#conta').css({"background-color": "transparent"});
			$('#conta').css({"color": "#141823"});
			$('#conta').mouseover(function(){
			    $('#conta').css({"border": "solid 2px #141823"});
				$('#conta').css({"background-color": "#141823"});
				$('#conta').css({"color": "#f8f8f8"});
			});
			$('#conta').mouseout(function(){
			    $('#conta').css({"border": "solid 2px #f8f8f8"});
				$('#conta').css({"background-color": "transparent"});
				$('#conta').css({"color": "#141823"});
			});
		}
	});
}
