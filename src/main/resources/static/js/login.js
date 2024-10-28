
function loadTopWindow() {
    if (window.top != null && window.top.document.URL != document.URL){
        window.top.location = document.URL;
    }
}


function regCheck(){
    var username = document.getElementById("username").value
    var pwd = document.getElementById("pwd").value
    if (username=="" || password==""){
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