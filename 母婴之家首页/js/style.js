$(function(){
	//全部商品分类移入移出效果；
	$('#nav .nav-guide').mouseenter(function(){
		$('.nav-guide-left').show()
	})
	$('#nav .nav-guide').mouseleave(function(){
		$('.nav-guide-left').hide()
	})
	//三级菜单
	
	var lis = $('#nav .nav-guide .nav-guide-left ul li');
	lis.on("mouseenter",function(){	
		$(this).find('.nav-guide-big').show();
		$(this).find('a').addClass('border-show');
	})
	lis.on("mouseleave",function(){
		$(this).find('a').removeClass('border-show');
		$(this).find('.nav-guide-big').hide();
	})
	
	setInterval(function(){
		$("#nav .nav-guide-right span").animate({
			top:-16
		},500,function(){
			$("#nav .nav-guide-right span").css({
				top:10
			})
		})
	},4000)
	
	//未来时间戳

	var time=Date.parse('2016/12/31 12:00:00');
	setInterval(showTime,500)
	function showTime(){
		var now_time=Date.now();
		var dif=time-now_time;
		var hour=parseInt(dif/1000/60/60%24);
		hour=addZero(hour);
		$('#purchase .purchase-top .parse-time .time .hour').html(hour);
		var minute=parseInt(dif/1000/60%60);
		minute=addZero(minute);
		$('#purchase .purchase-top .parse-time .time .minute').html(minute);
		var second=parseInt(dif/1000%60);
		second=addZero(second);
		$('#purchase .purchase-top .parse-time .time .second').html(second);
	}
	
	//处理小于10；
	function addZero(num){
		if(num<10){
			num="0"+num;
		}
		return num;
	}
	showTime();
	
	
	//模态框 马上疯抢；
	$('#purchase .purchase-middle .round-trip ul li').mouseenter(function(){
		$(this).find('.motai').stop(true).fadeTo(200,0.5);
		$(this).find('.slide').stop(true).animate({
			opacity:1,
			top:-5
		},200)
	})
	
	$('#purchase .purchase-middle .round-trip ul li').mouseleave(function(){
		$(this).find('.motai').stop(true).fadeOut(200);
		$(this).find('.slide').stop(true).animate({
			opacity:0,
			top:0
		},200)
	})
	
	//来回滚动
	
		
			
		
		 
		
		var timer2;
		function switchGo(){
			 k=0;
			timer2=setInterval(function(){
				k++;
				k%=2;
				$('#purchase .purchase-middle .round-trip').stop(true).animate({
					marginLeft:-1090*k
				},300);
				$('#purchase .purchase-top .arrow a').eq(k).addClass('kawayi').siblings().removeClass('kawayi');
					
			},2000)
		}
		switchGo();
		
		$('#purchase .purchase-top .arrow').hover(
			function(){
				clearInterval(timer2);	
			},
			function(){
				switchGo();
		})
		
		$('#purchase .purchase-top .arrow a').click(function(){
				k++;
				k%=2;
				$('#purchase .purchase-middle .round-trip').stop(true).animate({
					marginLeft:-1090*k
				},300);
				$('#purchase .purchase-top .arrow a').eq(k).addClass('kawayi').siblings().removeClass('kawayi');
					
		})
	
		$('#purchase .purchase-middle ul li').hover(
			function(){
				clearInterval(timer2);	
			},
			function(){
				switchGo();
		})
		//用户名移入移出
		$('#slide-right ul li.head-icon').hover(
			function(){
				$(this).find('.username').stop(true).show().animate({
					left:-288
				},300)
			},
			function(){
				$(this).find('.username').stop(true).hide().animate({
					left:-295
				},300)
			}	
		)
		$('#slide-right ul li.head-icon .username b').click(function(){
			$(this).parent().hide()
		})
		
		//star移入移出
		$('#slide-right ul li.li-star').hover(
			function(){
				$(this).find('.star').stop(true).show().animate({
					left:-288
				},300)
			},
			function(){
				$(this).find('.star').stop(true).hide().animate({
					left:-295
				},300)
			}	
		)
		$('#slide-right ul li.li-star .star b').click(function(){
			$(this).parent().hide()
		})
		
		//在线客服移入移出
		$('#slide-right ul li.li-service').hover(
			function(){
				$(this).find('.line-service').stop(true).show().animate({
					left:-80
				},300)
			},
			function(){
				$(this).find('.line-service').stop(true).hide().animate({
					left:-95
				},300)
			}	
		)
		//返回顶部
		$('#slide-right ul li.up-li').hover(
			function(){
				$(this).find('.up').stop(true).show().animate({
					left:-80
				},300)
			},
			function(){
				$(this).find('.up').stop(true).hide().animate({
					left:-95
				},300)
			}	
		)
		$('#slide-right ul li.up-li').click(function(){
			$('html,body').animate({
				scrollTop:0
			},500)
		})
		
		//滚轮滚动划出顶部盒子
		$(window).scroll(function(){
			var purchaseTop=$('#purchase').offset().top;
			var slideTop=$(window).scrollTop();
			if(slideTop>=purchaseTop){
				$('#slide-up').fadeIn(800)
			}else{
				$('#slide-up').fadeOut(800)
			}	
		})
		
		$('#slide-left .slide-left-down span').click(function(){
			$("#slide-left .slide-left-down").remove();
		})
		
		$('#slide-left .slide-left-up a.low-price').click(function(){
			var lowpriceTop=$('#line').offset().top-100;
			$("html,body").animate({
				scrollTop:lowpriceTop
			},500)
		})
		$('#slide-left .slide-left-up a.today-good').click(function(){
			var todaygoodTop=$('#today').offset().top-80;
			$("html,body").animate({
				scrollTop:todaygoodTop
			},500)
		})
})
