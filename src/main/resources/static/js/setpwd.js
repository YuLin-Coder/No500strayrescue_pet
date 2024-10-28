function regCheck(){
    var password1 = document.getElementById("password1").value
    var password2 = document.getElementById("password2").value
    if (password1=="" || password2==""){
        alert("以下输入框均不能为空")
        return false
    }else if(password1 != password2){
        alert("两次输入的密码不同")
        return false
    } else{
        return true
    }
}
function onbluetip(){

    var password1 = $("#password1").val();
    var password2 = $("#password2").val();

    if (password1 != password2){
        $("#password1").css("border-color","red");
        $("#password2").css("border-color","red");
    }
}
function replace(x) {
    x.value = x.value.trim()
}