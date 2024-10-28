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
// 添加事件
function add() {
    $("#insert").show();
    $("#update").hide();
    $("#deleteone").hide();
}

function set(did,dname,address){
    document.getElementById("set_did").value=did
    document.getElementById("set_dname").value=dname
    document.getElementById("set_address").value=address
    $("#insert").hide();
    $("#update").show();
    $("#deleteone").hide();
}

function del(id){
    document.getElementById("del_did").value = id;
    document.getElementById("del_did1").innerText = "确认删除编号为【"+id+"】的部门？";
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
    var did = $("#did1").val();
    var dname = $("#dname1").val();
    var address = $("#address1").val();
    if (did==""||dname==""||address=="请选择"){
        if (did==""){$("#did1").css("border-color","red");}
        else{$("#did1").css("border-color","green");}
        if (dname==""){$("#dname1").css("border-color","red");}
        else{$("#dname1").css("border-color","green");}
        if (address=="请选择"){$("#address1").css("border-color","red");}
        else{$("#address1").css("border-color","green");}
        return false;
    }else{
        return true;
    }
}
function setisNull() {
    var dname = $("#set_dname").val();
    var address = $("#set_address").val();
    if (dname==""||address=="请选择"){
        if (dname==""){$("#set_dname").css("border-color","red");}
        else{$("#set_dname").css("border-color","green");}
        if (address=="请选择"){$("#set_address").css("border-color","red");}
        else{$("#set_address").css("border-color","green");}
        return false;
    }else{
        return true;
    }
}
function replace(x) {
    x.value = x.value.trim()
}

