$(document).ready(function() {
    var chartDom = document.getElementById('rightTop');
    var myChart = echarts.init(chartDom);
    var option;
    var names=[];    //横坐标数组（实际用来盛放X轴坐标值）
    var values=[];    //纵坐标数组（实际用来盛放Y坐标值）
    $.ajax({
        type: "post",
        async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url: "/selectDonatesStatics",    //请求发送到dataActiont处
        data: {},
        dataType: "json",        //返回数据形式为json
        success: function (data) {
            if (data){
                for (var i=0;i<data.length;i++){
                    names.push(data[i].names);
                    values.push(data[i].counts);
                }
                option = {
                    title: {
                        text: '动物捐赠金额统计',
                        // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: names
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: values,
                        type: 'line',
                        areaStyle: {}
                    }]
                };
                option && myChart.setOption(option);
            }else{
                alert("数据加载异常")
            }
        }
    })

});