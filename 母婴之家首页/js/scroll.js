function Happy(banner,active,interval){
	this.main=banner;
	this.active=active;
	this.scrollItem=this.main.find('.scroll-items');
	this.imgs=this.scrollItem.find('img');
	this.circles=this.main.find('li');
	this.now=0;
	this.index=0;
	this.timer=null;
	this.interval=interval
}
Happy.prototype={
	constructor:Happy,
	
	init:function(){
		this.autoPlay();
		this.mouseIn();
		this.mouseLeave();
		this.click();
		this.imgSwitch();
	},
	//自动滚播
	autoPlay:function(){
		var that=this;
	    this.timer=setInterval(function(){
			that.index++;
			that.imgSwitch();	
	},that.interval)
	},
	//移入
	mouseIn:function(){
		var that=this;
		this.main.mouseenter(function(){
			clearInterval(that.timer)
		})
	},
	//移出
	mouseLeave:function(){
		var that=this;
		this.main.mouseleave(function(){
			that.autoPlay();
		})
	},
	//点击小圆圈
	click:function(){
		var that=this;
		this.circles.click(function(){
			that.index=$(this).index()
			that.imgSwitch();
		})
	},
	//图片切换，小圆圈跟随
	imgSwitch:function(){
		this.index%=this.imgs.length;
		this.scrollItem.stop(true).animate({
			marginLeft:-1090*this.index
		},400);
		this.circles.eq(this.index).addClass(this.active).siblings().removeClass(this.active);
		
		
	}
	
}

