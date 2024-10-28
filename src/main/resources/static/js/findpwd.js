function regCheck(){

    var username = document.getElementById("username").value
    var mail = document.getElementById("mail").value
    var code = document.getElementById("code").value
    if (username=="" || mail=="" || code == ""){
        alert("以下输入框均不能为空")
        return false
    }else{
        return true
    }
}
function ajax1() {
    $.post({
        url : "/ajaxUsername",
        data : {"username":$("#username").val()},
        success : function (data) {
            if (data == "0"){
                $("#statusTip").css("color","red");
                $("#username").css("border-color","red");
                $("#statusTip").html("用户名不存在");
            }
        }
    });
}
function mailCode(){
    var mail = $("#mail").val();
    if (mail==null || mail == ""){
        $("#mail").css("border-color","red");
        $("#statusTip").css("color","red");
        $("#statusTip").html("邮箱不能为空");
        return false
    }
    $("#mail").css("border-color","green");
    $("#statusTip").html("");
    // 自动计时
    var btn = document.getElementById("getCode");
    var time = 30;//定义时间变量。用于倒计时用
    var timer = null;//定义一个定时器；
    timer = setInterval(function(){///开启定时器。函数内执行
        btn.disabled = true;
        btn.innerText = time+"秒后重新发送";    //点击发生后，按钮的文本内容变成之前定义好的时间值。
        time--;//时间值自减
        if(time ==0){     //判断,当时间值小于等于0的时候
            btn.innerText='重新发送验证码'; //其文本内容变成……点击重新发送……
            btn.disabled = false;
            clearInterval(timer); //清除定时器
        }
    },1000)
    $.ajax({
        url : "/ajaxMailCode",
        // url : "${pageContext.request.contextPath}/ajaxUsername",
        data : {"mail":$("#mail").val()},
        success : function (data) {
            if (data!=""){
                $("#statusTip").css("color","#43a047");
                $("#statusTip").html("发送成功");
            }else{
                $("#statusTip").html("发送失败，原因未知");
            }
        }
    });
}
function replace(x) {
    x.value = x.value.trim()
}