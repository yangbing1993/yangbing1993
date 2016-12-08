$(function(){
	var Cart={
		cart:{},
		pay:{},
		mainCon:$('.main-content'),
		init:function(){
			this.readCookie();
			var that=this;
			for(var key in this.cart){
				
				(function(k){
					var ul=$('<ul class="goods-item clearfix"></ul>')
					ul.load('goodsInfo.html?key='+Math.random(),function(){
						//获取商品
						var kid=that.cart[k]['kid'];
						var gid=that.cart[k]['gid'];
						var id=that.cart[k]['id'];
						ul.attr({
							"data-gid":gid,
							"data-id":id,
							"data-kid":kid,
							"data-goods":k
						})
						that.mainCon.append(ul);
						ul.find('.goods-number input').val(that.cart[k].amount);
						var total=that.cart[k].amount*parseInt($(".goods-price").html());
						ul.find('.goods-count').html(total.toFixed(2));
					})
				})(key)
			}
			this.increase();
			this.decrease();
			this.input();
			this.remove();
			
		},
		//点击增加数量，计算价钱；
		increase:function(){
			var that=this;
			this.mainCon.on('click','.add',function(){
				var amount=parseInt($(this).prev().val());
				if(amount >=999){
					return;
				}
				amount++;
				$(this).prev().val(amount);
				var allMoney=amount*parseInt($(".goods-price").html()).toFixed(2);
				$('.goods-count').html(allMoney);
				that.handCookie($(this).prev());
				that.handPay();
			})
		},
		//点击减少数量，计算价钱
		decrease:function(){
			var that=this;
			this.mainCon.on('click','.decrease',function(){
				var amount=$(this).next().val();
				if(amount <=1){
					return;
				}
				amount--;
				$(this).next().val(amount);
				var allMoney=amount*parseInt($(".goods-price").html());
				$('.goods-count').html(allMoney.toFixed(2));
				that.handCookie($(this).next());
				that.handPay();
			})
		},
		//改变input,计算价钱
		input:function(){
			var that=this;
			this.mainCon.on("input",'input',function(){
				var amount=$(this).val();
				amount=parseInt(amount);
				if(amount >= 999){
					amount=999;
				}
				if(isNaN(amount) || amount == 0){
					$(this).val(1)
				}else{
					$(this).val(amount);
				}
				var allMoney=amount*parseInt($(".goods-price").html());
				$('.goods-count').html(allMoney.toFixed(2));
				that.handCookie($(this));
				that.handPay();
			})
		},
		//数量回写cookie input
		handCookie:function(input){
			this.readCookie();
			
			var goodsItem=input.parents('.goods-item');
			
			var price=parseFloat(goodsItem.find('.goods-price').html());
			
			var totalMoney=goodsItem.find('.goods-count');
			this.cart[10032002].amount=parseInt(input.val());
			totalMoney.html( (price*this.cart[10032002].amount).toFixed(2));
			this.setCookie();
		},
		//商品删除
		remove:function(){
			var that=this;
			this.mainCon.on('click','.goods-action',function(){
				if(confirm('确定删除宝贝吗？')){
					$(this).parents('.goods-item').remove();
					delete that.cart[10032002];
					$('.tocash-number b').html(0);
					$('.goods-count').html(0);
					that.setCookie();
				}
			})
		},
		//处理总价和总数
		handPay:function(){
			var numberAll=$('.tocash-number b');
			var moneyAll=$('.tocash-money');
			numberAll.html($('.goods-number input').val());
			moneyAll.html(parseInt($('.goods-count').html()).toFixed(2))
		},
		
		
		
		//读取cookie
		readCookie:function(){
			this.cart=$.cookie('beg_cart') || '{}';
			//解析
			this.cart=JSON.parse(this.cart);
		},
		//设置cookie
		setCookie:function(){
			$.cookie('beg_cart',JSON.stringify(this.cart),{expire:365,path:'/'});
		}
	}
	Cart.init();	
})
