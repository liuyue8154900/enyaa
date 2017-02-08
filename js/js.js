// JavaScript Document
// JavaScript Document

	

   

	$(window).load(function()
	{
		var w = $(window).width();
	$(".title_line").css("width",w)
	$(".title_line1").css("left",-w)
	$(".title_line2").css("right",-w)
	

	 $('.map_sfmc ul li,.map_dian').click(function(){
                                    $('.map_mdxx').fadeIn()
                                })
                                $('.map_close').click(function(){
                                    $('.map_mdxx').fadeOut()
                                })
	
		});

$(document).ready(function(){
	
	 var show = false
	 $(".banner_video").click(function(){
		 if(show==false){
			 $(".banner_video_sp").fadeIn();
		 
			 show=true;
			 }else{
				  $(".banner_video_sp").fadeOut();
				  show=false;
				
				 }
        })
	$(".banner_video").click(
		 function(event){event.stopPropagation();}
		)
	
	


	var h = $(window).height();
	$(".banner").css("height",h);

	var h2 = $(".ban_newslist_left").height();
	$(".ban_newslist_right").css("height",h2);




	$(".prev,.next").hover(function(){
		$(this).stop(true,false).fadeTo("show",0.9);
	},function(){
		$(this).stop(true,false).fadeTo("show",0.4);
	});
	
	$(".banner-box").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"fold",
		interTime:3500,
		delayTime:500,
		autoPlay:true,
		autoPage:true, 
		trigger:"click" 
	});
	
	
	
	    

$(window).resize(function()
	{
       var h1 = $(window).height();
	$(".banner").css("height",h1);
	
	
	var h2 = $(".ban_newslist_left").height();
	$(".ban_newslist_right").css("height",h2);
	
	
 		
 	})  





});







$(window).scroll(function(){
	
	
					  
	if($(window).scrollTop()>500){		
	$(".banner ul").stop(true).css({
		"display": "none",
		},1000);
	
	
       }else{
		  
		$(".banner ul").stop(true).css({
		"display": "block",
		},1000);
	
		
		   }
		  
	   
     });	













$(document).ready(function (){

    $('.banleft01').hover(function() {
				$("body").find('.banlist01').stop().animate({"right":"0"},500);
				
			},
			
			$('.banlist01').mouseleave(function() {
				$("body").find('.banlist01').stop().animate({"right":"-91.5%"},1000);
				
			}));
			
			
			$('.banleft02').hover(function() {
				$("body").find('.banlist02').stop().animate({"right":"0"},500);
				
			},
			
			$('.banlist02').mouseleave(function() {
				$("body").find('.banlist02').stop().animate({"right":"-91.5%"},1000);
				
			}));		

			
			
			
	})	


$(window).scroll(function(){
if($(window).scrollTop()>($(".index_about").offset().top-800)){
$(".indexabouttop").eq(0).delay(100).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
$(".indexabouttop").eq(1).delay(200).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
$(".indexabouttop").eq(2).delay(200).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
}



if($(window).scrollTop()>($(".index_culture").offset().top-800)){
$(".cultop").eq(0).delay(200).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
$(".cultop").eq(1).delay(400).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
$(".cultop").eq(2).delay(600).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
$(".cultop").eq(3).delay(800).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
}


if($(window).scrollTop()>($(".index_pro").offset().top-800)){
$(".cptop").eq(0).delay(200).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
$(".cptop").eq(1).delay(400).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
$(".cptop").eq(2).delay(600).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
$(".cptop").eq(3).delay(800).animate({"top":"0px","opacity":"1"},1500,'easeOutExpo');
}



if($(window).scrollTop()>($(".map_md").offset().top-800)){
$(".map_md01").animate({"left":"0px","opacity":"1"},1500,'easeOutExpo');
$(".map_md02").animate({"right":"0px","opacity":"1"},1500,'easeOutExpo');
}








})






