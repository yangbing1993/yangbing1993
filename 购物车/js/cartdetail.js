$(function(){
	//放大镜
	
	var glass={
		leftTop:$('.main-left-top'),
		filter:$('.filter'),
		largeWrap:$('.large-image'),
		largeImg:$('.large-image img'),
		init:function(){
			this.mouseMove();
			this.hover();
		},
		//鼠标移动事件
		mouseMove:function(){
			var that=this;
			this.leftTop.mousemove(function(e){
				e=e || window.event;
				var left=e.pageX-35;
				var top=e.pageY-196;
				//处理边界
				left = left < 87.5 ? 87.5 : (left > 262.5) ? 262.5 :left;
				top = top < 87.5 ? 87.5 : (top > 262.5) ? 262.5 : top;
				//让鼠标位于滤镜中心位置
				that.filter.css({
					left:left-87.5,
					top:top-87.5
				});
				//大图片的位置
				that.largeImg.css({
					left:-2*(left-87.5),
					top:-2*(top-87.5)
				})
			})
		},
		hover:function(){
			var that=this;
			this.leftTop.mouseenter(function(){
				that.filter.show();
				that.largeWrap.show();
			})
			this.leftTop.mouseleave(function(){
				that.filter.hide();
				that.largeWrap.hide();
			})	
		}	
	}
	glass.init();
	
	//未来时间戳
	var time=Date.parse('2016/12/31 12:00:00');
	setInterval(showTime,500)
	function showTime(){
		var now_time=Date.now();
		var dif=time-now_time;
		var day=parseInt(dif/1000/60/60/24);
		day=addZero(day);
		var hour=parseInt(dif/1000/60/60%24);
		hour=addZero(hour);
		var minute=parseInt(dif/1000/60%60);
		minute=addZero(minute);
		var second=parseInt(dif/1000%60);
		second=addZero(second);
		$("#main .main-middle .count-time .jishi").html(day+'天'+hour+'小时'+minute+'分钟'+second+'秒')
	}
	//处理小于10；
	function addZero(num){
		if(num<10){
			num="0"+num;
		}
		return num;
	}
	showTime();
	
	
	//样式选择
	var goodsSelect={
		init:function(){
			this.main=$('.goods-detail');
			this.sizeOn=$('#main .main-middle .summary .size');
			this.colorOn=$('#main .main-middle .summary .color');
			this.inputNumber=$('#buy .buy-number .count');
			this.spanNumber=$('#buy .goods-store span');
			this.sizeSelect();
			this.colorSelect();
			this.addNumber();
			this.reduceNumber();
			this.oninput();
			this.addCarts();
		},
		//尺寸选择
		sizeSelect:function(){
			$('#main .main-middle .summary .size a').click(function(){
				
				$(this).addClass('select').siblings().removeClass('select')
			})
			
		},
		//颜色选择
		colorSelect:function(){
			$("#main .main-middle .summary .color a").click(function(){
				$(this).addClass('border').siblings().removeClass('border')
			})
		},
		//点击增加数量
		addNumber:function(){
			var that=this;
			$("#buy .buy-number .up").click(function(){
				var amount=parseInt(that.inputNumber.val());
				amount++;
				if(amount>=999){
					amount=999
				}
				that.inputNumber.val(amount);
				that.spanNumber.html(999-amount);
			})
		},
		//点击减少数量
		reduceNumber:function(){
			var that=this;
			$("#buy .buy-number .down").click(function(){
				var amount=parseInt(that.inputNumber.val());
				amount--;
				if(amount<=1){
					amount=1
				}
				that.inputNumber.val(amount);
				that.spanNumber.html(999-amount);
			})
		},
		//实时监控
		oninput:function(){
			this.inputNumber.on("input propertychange",function(){
				var amount=$(this).val();
				if(amount <= 1){
					amount=1
				}else if(amount > 999){
					amount=999
				}
				
				var reg=/^\d+$/;
				if(!reg.test(amount)){
					amount=1
				}
				$(this).val(amount);
				$('#buy .goods-store span').html(999-amount);
			})
		},
		//cookie
		addCarts:function(){
			var that=this;
			$("#buy .shopping-cart a").click(function(){
				var kid=that.main.data('kid');
				var id=that.sizeOn.find('.select').data('id');
				var gid=that.colorOn.find('.border').data('gid');
				var amount=parseInt( that.inputNumber.val() );
				//定义确定产品
				var goods=""+id+gid;
				console.log(goods);
				var cart=$.cookie('beg_cart') || '{}';
				cart=JSON.parse(cart);
				
				if(!cart[goods]){
					cart[goods]={
						"kid":kid,
						"id":id,
						"gid":gid,
						"amount":amount
					};
				}else{
					cart[goods].amount+=amount;
				};
				
				$.cookie('beg_cart',JSON.stringify(cart),{expires:365,path:'/'});
				alert('添加成功');
				console.log(JSON.parse($.cookie('beg_cart')));
			})
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
			
	}
	goodsSelect.init();
	
	
	
	
	
	
	
	
	
	
	
	
	
})
