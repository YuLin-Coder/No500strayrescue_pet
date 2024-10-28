$(document).ready(function() {
    var chartDom = document.getElementById('leftDown');
    var myChart = echarts.init(chartDom);
    var option;
    $.ajax({
        type: "post",
        async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url: "/selectAnimalStaticsByCate",    //请求发送到dataActiont处
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
                        text: '动物按分类统计',
                        // subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '70%',
                            data: box,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
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