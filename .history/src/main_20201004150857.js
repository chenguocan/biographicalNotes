// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
var option = option = {

    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',

            data: [
                { value: 100, name: '编程基础' },
                { value: 200, name: 'Vue全家桶' },
                { value: 100, name: '自学能力' },
                { value: 50, name: '沟通能力' },
                { value: 100, name: '项目开发' },
                { value: 100, name: '错误处理' }
            ],
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

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);