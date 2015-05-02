$(window).ready(function(){

	function getRandomColor() {
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#'
    	for (var i = 0; i < 6; i++ ) {
        	color += (Math.floor(Math.random() * 10));
    	}
    	return color;
	}
	function change(k){
		 setInterval(function (g) {
		k.css("background-color", getRandomColor());
		},Math.floor(Math.random() * 1000));
	}
	var a = $("#pixelgrid").width() / 4;
	var b = $("#pixelgrid").height() / 4 ;
	
	console.log(a  +" "+b +" "+a+b);
	var blah = $("<div id='derp'></div>");
	for(i = a*b;i > 0;i--){
	blah.append("<div class='pixel'></div>")
	}
	$("#pixelgrid").append(blah);

	var blahTwo = $("<div class='derpTwo'></div>");
	for(i = 300*300/(30*30);i > 0;i--){
	blahTwo.append("<div class='pixelTwo'></div>")
	}
	$(".cube > div").append(blahTwo);

	$(".pixel").each(function(){
		var g = $(this);
		window.setTimeout( change(g) , 1000);
		
		
	});
	//$(".pixelTwo").each(function(){
	//	var g = $(this);
	//	window.setTimeout( change(g) , 1000);
		
		
	//});

	// change($("#msg"));
	

	var timeline = new TimelineLite({immediateRender:true});
	
	$(window).on("click",function(){
		
			$(".pixelTwo").each(function(){
				var k = $(this);
				var top = k.position().top;
				var left = k.position().left;
				var right = k.position().right;
				console.log(left)
				
					TweenLite.to(k,5,{top:top*1.8,x:left*1.8},1);
				
				
			});
		
		timeline.play();
	});
});