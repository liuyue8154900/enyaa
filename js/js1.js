// JavaScript Document
$(window).load(function(){

	setTimeout(function(){
		 scrollTop = $(window).scrollTop();	
	},1);
	var _h = $('html').height()-$(window).innerHeight();
	

var t1=$('.container1-con1').css('top')
var t3=$('.container1-con3').css('top')
var t4=$('.container1-con4').css('top')
var scrollFunc = function (e) {
   scrollTop = -e.wheelDelta/2+scrollTop;
   if(scrollTop<=0||scrollTop>=_h){
		scrollTop =  parseInt($(window).scrollTop());
		
		
	}
	
	
	              if($(window).scrollTop()>($('.about').offset().top-$('.about').height()*1) && $(window).scrollTop()<($('.about').offset().top+$('.about').height()*1)){
				  var set2=$('.about').offset().top;
                  $('.container1-con1').stop().animate({top:parseInt(t1)+(scrollTop-set2)*0.1},1000,'swing');
				  
				  }else{
                      $('.container1-con1').stop().animate({top:parseInt(t1)},500,'swing');
					  
					  }
					  
					  if($(window).scrollTop()>($('.about').offset().top-$('.about').height()*1) && $(window).scrollTop()<($('.about').offset().top+$('.about').height()*1)){
				  var set2=$('.about').offset().top;
                  $('.container1-con4').stop().animate({top:parseInt(t4)+(scrollTop-set2)*0.1},1000,'swing');
				  
				  }else{
                      $('.container1-con4').stop().animate({top:parseInt(t4)},500,'swing');
					  
					  }  
	

              if($(window).scrollTop()>($('.block-item-rep-3').offset().top-$('.block-item-rep-3').height()*1) && $(window).scrollTop()<($('.block-item-rep-3').offset().top+$('.block-item-rep-3').height()*1)){
				  var set1=$('.block-item-rep-3').offset().top;
				  $('.container1-con3').stop().animate({top:parseInt(t3)+(scrollTop-set1)*0.1},500,'swing');
				  }else{
					  $('.container1-con3').stop().animate({top:parseInt(t3)},500,'swing');
					  }	
			
             		  		  	  		  
       	
        ScrollText(direct);
 }	 
   if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    window.onmousewheel = document.onmousewheel = scrollFunc; 
})





			$(function(){
				$('.pro_list li').hover(
						function(){
							$(this).find('.pro_covering').stop().animate({opacity:'0'});
						
							$(this).find('.pro_btn a').stop().animate({right:0})
						},function(){
							$(this).find('.pro_covering').stop().animate({opacity:'0.3'});
							
							$(this).find('.pro_btn a').stop().animate({right:-50})
						}
				)
			})

