var home={
	pageCode:0,
	init:function(){
		$('#container').css('height',window.outerHeight-$('header').height()-$('footer').height());
		this.showBanner();
		this.showContent(),
		this.loadScroll()
	},
	//封装轮播自行滚动事件
	scroll:function(){
		this.mylunbo=new Swiper('.lunbo',{
			pagination:'.swiper-pagination',
			loop:true,
			autoplay:1500,
		})
	},
	//加载轮播图片
	showBanner:function(){
		var that=this;
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/getBanner.php",
			type:'get',
			data:{},
			dataType:'jsonp',
			success:function(e){
				var str='';
				$.each(e,function(i,vl){
					var imgs=JSON.parse(vl.goodsBenUrl)
					str+='<div class="swiper-slide"><img src="'+imgs[0]+'"></div>'
				})
				$('.swiper-wrapper').append(str);
				console.log(str)
				that.scroll();
			}
		})
	},
	//商品加载
	showContent:function(){
		var that=this;
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			type:'get',
			data:{
				pageCode:this.pageCode,
				linenumber:5
			},
			dataType:'jsonp',
			success:function(e){
				that.result=e
				var atr="";
				$.each(e,function(i,vl){
					atr+='<li class="list-li">'+
							'<div class="left">'+
								'<img src="'+vl.goodsListImg+'">'+
							'</div>'+
							'<div class="right">'+
								'<p>'+vl.goodsName+'</p>'+
								'<p class="price">￥：'+vl.price+'元</p>'+
								'<p>'+vl.discount+'<button gid="'+vl.goodsID+'" class="join">加入购物车</button></p>'+
							'</div>'+
						 '</li>'
				})
				$('.qian').before(atr);
				that.myscroll.refresh();
				if($('.qian')){
					$('.qian').hide()

				} 
				that.myscroll.refresh();
				that.pageCode++;
			}
		})
	},
	//加载滚动条
	loadScroll:function(){
		var flag=false;
		var that=this;
		this.myscroll=new iScroll('wrapper',{
			onScrollMove:function(){

				if(this.wrapperH-this.y>=this.scrollerH){
					flag=true;
				} else {
					flag=false;
				}
			},
			onScrollEnd:function(){
				if(flag){
					if(that.result == 0){
						$('.over').show();
						this.refresh();
						return;
					} else {
						$('.over').hide();
						this.refresh;
					}
					if($('.qian').css('display') == 'block'){
						return;
					}
					$('.qian').hide();
					this.refresh();
					that.showContent();
				}
			}
		})
		 
	}


}
home.init();