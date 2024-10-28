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
$(document).ready(function(){
    options = document.getElementsByClassName("addoption")
    $.ajax({
        type : "post",
        async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url : "/findDname",    //请求发送到dataActiont处
        data : {},
        dataType : "json",        //返回数据形式为json
        success : function(data) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (data) {
                for(var i=0;i<data.length;i++){
                    options[0].options.add(new Option(data[i].dname, data[i].dname));
                    options[1].options.add(new Option(data[i].dname, data[i].dname));
                    options[2].options.add(new Option(data[i].dname, data[i].dname));
                }
            }
        },
        error : function(errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
            myChart.hideLoading();
        }
    });//end ajax
});
// 添加事件
function add() {
    $("#insert").show();
    $("#update").hide();
    $("#deleteone").hide();
}
function set(sid,sno,sname,sjob,stel,dname){
    document.getElementById("set_sid").value=sid
    document.getElementById("set_sno").value=sno
    document.getElementById("set_sname").value=sname
    document.getElementById("set_sjob").value=sjob
    document.getElementById("set_stel").value=stel
    document.getElementById("set_dname").value=dname

    $("#insert").hide();
    $("#update").show();
    $("#deleteone").hide();
}

function del(id){
    document.getElementById("del_sno").value = id;
    document.getElementById("del_sno1").innerText = "确认删除学号为【"+id+"】的学生？";
    $("#insert").hide();
    $("#update").hide();
    $("#deleteone").show();
}

function closeall() {
    $("#insert").hide();
    $("#update").hide();
    $("#deleteone").hide();
}


function addisNull() {
    var sno = $("#sno1").val();
    var sname = $("#sname1").val();
    var sjob = $("#sjob1").val();
    var stel = $("#stel1").val();
    var dname = $("#dname1").val();
    if (sno==""||sname==""||sjob=="请选择"||stel==""||dname=="请选择"){
        if (sno==""){$("#sno1").css("border-color","red");}
        else{$("#sno1").css("border-color","green");}
        if (sname==""){$("#sname1").css("border-color","red");}
        else{$("#sname1").css("border-color","green");}
        if (sjob=="请选择"){$("#sjob1").css("border-color","red");}
        else{$("#sjob1").css("border-color","green");}
        if (stel==""){$("#stel1").css("border-color","red");}
        else{$("#stel1").css("border-color","green");}
        if (dname=="请选择"){$("#dname1").css("border-color","red");}
        else{$("#dname1").css("border-color","green");}
        return false;
    }else{
        return true;
    }
}
function setisNull() {
    var sname = $("#set_sname").val();
    var sjob = $("#set_sjob").val();
    var stel = $("#set_stel").val();
    var dname = $("#set_dname").val();
    if (sname==""||sjob=="请选择"||stel==""||dname=="请选择"){
        if (sname==""){$("#set_sname").css("border-color","red");}
        else{$("#set_sname").css("border-color","green");}
        if (sjob=="请选择"){$("#set_sjob").css("border-color","red");}
        else{$("#set_sjob").css("border-color","green");}
        if (stel==""){$("#set_stel").css("border-color","red");}
        else{$("#set_stel").css("border-color","green");}
        if (dname=="请选择"){$("#set_dname").css("border-color","red");}
        else{$("#set_dname").css("border-color","green");}
        return false;
    }else{
        return true;
    }
}
function replace(x) {
    x.value = x.value.trim()
}
