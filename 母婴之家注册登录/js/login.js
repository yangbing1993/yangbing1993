$(function(){
	var flag1=true;//true代表成功
	var flag2=true;
	var flag3=true;
	//验证账户名
	$('#main .wrapper .wrapper-right ul li.countname .countname-right input').blur(function(){
		var countnameVal=$('#main .wrapper .wrapper-right ul li.countname .countname-right input').val();
		var reg1=13866668888;
		if(countnameVal == reg1){
			$('#main .wrapper .wrapper-right ul li.countname .countname-right div').html('').css({
				background:'url("img/nike.png") no-repeat left'
			});
			if(flag1){
				return;
			}
		}else{
			$('#main .wrapper .wrapper-right ul li.countname .countname-right div').html('账户名不正确！').css({
				color:"#c33",
				background:"none"
			});
			flag1=false
		}
	})
	//密码验证
	$('#main .wrapper .wrapper-right ul li.password .password-right input').blur(function(){
		var passwordVal=$('#main .wrapper .wrapper-right ul li.password .password-right input').val();
		var reg2="1993112yb";
		if(passwordVal == reg2){
			$('#main .wrapper .wrapper-right ul li.password .password-right div').html('').css({
				background:'url("img/nike.png") no-repeat left'
			});
			if(flag2){
				return;
			}
		}else{
			$('#main .wrapper .wrapper-right ul li.password .password-right div').html('密码不正确').css({
				color:"#c33",
				background:"none"
			});
			flag=false;
		}
	})
	
	//验证码
	var arr=[1,2,3,4,5,6,7,8,9,0];
	for(var i=65;i<91;i++){
		arr.push(String.fromCharCode(i));
	}
	for(var k=97;k<123;k++){
		arr.push(String.fromCharCode(k));
	}
	number4();
	function number4(){
		arr.sort(function(a,b){
			return Math.random()-0.5
		});
		str="";
		for(var j=0;j<4;j++){
		 	str+= arr.pop();
		}
		$("#main .wrapper .wrapper-right ul li.code .code-right .code-right-top div").html(str);
	}
	
		//点击更换验证码
		$('#main .wrapper .wrapper-right ul li.code .code-right .code-right-top p span').click(function(){
			number4();
		});
		
		$('#main .wrapper .wrapper-right ul li.code .code-right .code-right-top input').blur(function(){
			var code=$('#main .wrapper .wrapper-right ul li.code .code-right .code-right-top input').val();
			if(code == str){
				$('#main .wrapper .wrapper-right ul li.code .code-right .code-right-bottom').html('').css({
					background:'url("img/nike.png") no-repeat left'
				});
				if(flag3){
					return;
				}
			}else{
				$('#main .wrapper .wrapper-right ul li.code .code-right .code-right-bottom').html('验证码错误，请重新输入！')
				.css({
				color:"#c33",
				background:"none"
				});
				flag3=false;
			}
		})
		
		$('#main .wrapper .wrapper-right .other .submit .login-to').click(function(){
			if($("#input-top").prop('checked') && flag1==true && flag2==true && flag3==true){
				alert('登录成功')
			}
			if(!$("#input-top").prop('checked') || flag1==false || flag2==false || flag3==false){
				alert('请填写信息完整')
			}
			
		})
	
	
	
	
})
