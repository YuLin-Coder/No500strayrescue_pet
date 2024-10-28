$(document).ready(function() {
    var chartDom = document.getElementById('rightDown');
    var myChart = echarts.init(chartDom);
    var option;
    $.ajax({
        type: "post",
        async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url: "/selectNowProductsStatics",    //请求发送到dataActiont处
        data: {},
        dataType: "json",        //返回数据形式为json
        success: function (data) {
            if (data){
                var box = []
                for(var i=0;i<data.length;i++){
                    var onedata = {"value":"","name":""};
                    onedata.name = data[i].names
                    onedata.value = data[i].counts
                    box.push(onedata);
                }
                option = {
                    title: {
                        text: '当季度生鲜发出数量统计',
                        // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    series: [
                        {
                            name: '生鲜数量',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '40',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: box
                        }
                    ]
                };
                option && myChart.setOption(option);
            }else{
                alert("数据加载异常")
            }
        }
    })
});