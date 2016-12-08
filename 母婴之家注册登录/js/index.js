$(function(){
	var flag1=true;//true代表成功
	var flag2=true;
	var flag3=true;
	var flag4=true;
	//手机号码验证
	$('#main .wrapper .wrapper-left ul li.phone .phone-right input').blur(function(){
		var phoneVal=$('#main .wrapper .wrapper-left ul li.phone .phone-right input').val();
		var reg1=/^1[3|5|8]\d{9}$/;
		if(reg1.test(phoneVal)){
			$("#main .wrapper .wrapper-left ul li.phone .phone-right div").html("").css({
				background:'url("img/nike.png") no-repeat left'
			});
			if(flag1){
				return;
			}
		}else{
			$("#main .wrapper .wrapper-left ul li.phone .phone-right div").html("手机格式不对，请重新输入！")
			.css({
				color:"#c33",
				background:"none"
			});
			flag1=false
		}
	})
	//密码失焦验证
	$('#main .wrapper .wrapper-left ul li.set-number .set-number-right input').blur(function(){
		numberCode=$('#main .wrapper .wrapper-left ul li.set-number .set-number-right input').val();
		var reg2=/^\w{6,20}$/;
		if(numberCode==''){
			alert('密码不能为空');
		}
		if(reg2.test(numberCode)){
			$("#main .wrapper .wrapper-left ul li.set-number .set-number-right div").html("").css({
				background:'url("img/nike.png") no-repeat left'
			});
			if(flag2){
				return;
			}
		}else{
			$("#main .wrapper .wrapper-left ul li.set-number .set-number-right div").html("密码长度限制为6-20位字符！")
			.css({
				color:"#c33",
				background:"none"
			});
			flag2=false;
		}
	})
	//确认密码失焦验证
	$('#main .wrapper .wrapper-left ul li.identy-number .identy-number-right input').blur(function(){
		var identyCode=$('#main .wrapper .wrapper-left ul li.identy-number .identy-number-right input').val();
		if(identyCode == numberCode){
			$('#main .wrapper .wrapper-left ul li.identy-number .identy-number-right div').html('').css({
				background:'url("img/nike.png") no-repeat left'
			});
			if(flag3){
				return;
			}
		}else{
			$('#main .wrapper .wrapper-left ul li.identy-number .identy-number-right div').html('2次密码不一致，请重新输入！')
			.css({
				color:"#c33",
				background:"none"
			});
			flag3=false;
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
		$("#main .wrapper .wrapper-left ul li.code .code-right .code-right-top div").html(str);
	}
	
		//点击更换验证码
		$('#main .wrapper .wrapper-left ul li.code .code-right .code-right-top p span').click(function(){
			number4();
		});
		
		$('#main .wrapper .wrapper-left ul li.code .code-right .code-right-top input').blur(function(){
			var code=$('#main .wrapper .wrapper-left ul li.code .code-right .code-right-top input').val();
			if(code == str){
				$('#main .wrapper .wrapper-left ul li.code .code-right .code-right-bottom').html('').css({
					background:'url("img/nike.png") no-repeat left'
				});
				if(flag4){
					return;
				}
			}else{
				$('#main .wrapper .wrapper-left ul li.code .code-right .code-right-bottom').html('验证码错误，请重新输入！')
				.css({
				color:"#c33",
				background:"none"
				});
				flag4=false;
			}
		})
		
		$('#main .wrapper .wrapper-left .other .submit .login-to').click(function(){
			if($("#input-top").prop('checked') && flag1==true && flag2==true && flag3==true && flag4==true){
				alert('注册成功')
			}
			if(!$("#input-top").prop('checked') || flag1==false || flag2==false || flag3==false || flag4==false){
				alert('请填写信息完整')
			}
			
		})
})
