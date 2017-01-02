function solve(hash){
	hash='#'+hash;
	$(hash).show().siblings().hide();
	$(hash).parents('#container').siblings().hide();
}
var config = {
	'/:gyfname': function(id){
		console.log(id)
		solve(id)
	}
}
var t = new Router(config);
t.init('#ready');