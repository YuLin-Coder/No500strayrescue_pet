window.onload = function () {
    var util = layui.util
        ,laydate = layui.laydate
        ,$ = layui.$
        ,layer = layui.layer;
    var resultTip = document.getElementById("resultTip").innerText
    if (resultTip!=null&&resultTip!=""){
        layer.msg(resultTip);
    }
}
function mailCode(){
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
        data : {"mail":""},
        success : function (data) {
            if (data!=""){
                $("#statusTip").css("color","#43a047");
                $("#statusTip").html("发送成功");
            }else{
                $("#statusTip").css("border-color","black");
                $("#statusTip").html("发送失败，原因未知");
            }
        }
    });

}
function isNull(){
    var code = document.getElementById("code").value;
    if (code == ""){
        $("#statusTip").css("color","red");
        $("#statusTip").html("验证码不能为空");
        return false
    }else{
        return true
    }
}
function setisNull() {
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var atel = document.getElementById("atel").value;
    var mail = document.getElementById("mail").value;
    if (password==""||name==""||mail==""||atel==""){
        alert("以下输入框均不能为空")
        return false;
    }else{
        return true;
    }
}
function replace(x) {
    x.value = x.value.trim()
}