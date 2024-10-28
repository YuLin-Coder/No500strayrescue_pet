$(document).ready(function() {
    var chartDom = document.getElementById('leftTop');
    var myChart = echarts.init(chartDom);
    var option;

    var names=[];    //横坐标数组（实际用来盛放X轴坐标值）
    var values=[];    //纵坐标数组（实际用来盛放Y坐标值）
    $.ajax({
        type: "post",
        async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url: "/selectAnimalStatics",    //请求发送到dataActiont处
        dataType: "json",        //返回数据形式为json
        success: function (data) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    names.push(data[i].names);
                    values.push(data[i].counts);
                }
                var dataAxis = names;
                var data = values;
                var yMax = 500;
                var dataShadow = [];

                for (var i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }

                option = {
                    title: {
                        text: '每天新增动物数量',
                        // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                    },
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#ffffff'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: {
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside'
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            showBackground: true,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#83bff6'},
                                        {offset: 0.5, color: '#188df0'},
                                        {offset: 1, color: '#188df0'}
                                    ]
                                )
                            },
                            emphasis: {
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: data
                        }
                    ]
                };

                // Enable data zoom when user click bar.
                var zoomSize = 6;
                myChart.on('click', function (params) {
                    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                    myChart.dispatchAction({
                        type: 'dataZoom',
                        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                    });
                });

                option && myChart.setOption(option);
            }else{
                alert("数据加载异常")
            }
        }
    })
});