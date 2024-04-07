// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "宝乐",
          "小精灵",
          "童飞",
          "爱贝儿",
          "豆豆熊",
          "五彩梦",

        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [174096081.86, 17027420.79, 23460925.46 , 185700687.42 , 18989707.49, 89531860.44],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "实时", data: [174096081.86, 17027420.79, 23460925.46 , 185700687.42 , 18989707.49, 89531860.44] }
  ];

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

/// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));
  

  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // legend: {
    //   // 距离容器10%
    //   right: "10%",
    //   // 修饰图例文字的颜色
    //   textStyle: {
    //     color: "#4c9bfd"
    //   }
    //   // 如果series 里面设置了name，此时图例组件的data可以省略
    //   // data: ["邮件营销", "联盟广告"]
    // },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "销售总额",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: [8325000,14635000,19369157,17646742,19577980,79058142,49499000],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  var dataAll = [
    { year: "宝乐", data: [8325000,14635000,19369157,17646742,19577980,79058142,49499000,77953212] },
    { year: "小精灵", data: [8340384,5800000,11900000,14080350,25165000,26373360 ,36990000,67660000] },
    { year: "童飞", data: [13692266,9892860,25909555,37152730,51900840,51071788,67745501,54244533] },
    { year: "爱贝儿", data: [4182500,7870000,16476810,5010285,53556150,48055880,77220000,137460000] },
    { year: "豆豆熊", data: [8704717,9953000,10647467,14769264,49382944,44316972,61555746,56964232] },
    { year: "五彩梦", data: [10540000,5160000,18881423,37846658,53163818,70895841,74083516,131897771] },
  ];

  $(".line h6 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 饼形图定制
// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["宝乐", "小精灵", "童飞", "爱贝儿", "豆豆熊","五彩梦","邦尼","恒通","思远","华晨","旭日","仁和"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: {
          show: true,
          position: "outside",
          formatter: "{b}: {c}"
        },
        labelLine: { show: true },
        data: [
          { value: 7.2, name: "宝乐" },
          { value: 9.3, name: "小精灵" },
          { value: 8.7, name: "童飞" },
          { value: 9.4, name: "爱贝儿" },
          { value: 8.8, name: "豆豆熊" },
          { value: 9.8, name: "五彩梦" },
          { value: 7.7, name: "邦尼" },
          { value: 6.1, name: "恒通" },
          { value: 6.8, name: "思远" },
          { value: 7.6, name: "华晨" },
          { value: 8.6, name: "旭日" },
          { value: 9.9, name: "仁和" }

        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var data = [24.8, 22.9, 52.3];
  var titlename = ["旭日", "华晨", "仁和"];
  var valdata = [360031350, 333179000, 758054462];
  var myColor = ["#1089E7", "#F57474", "#56D0E3"];
  option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",

          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function(params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 热力图图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

 
  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      height: '50%',
      top: '10%'
    },
    xAxis: {
      type: 'category',
      data: ['恒通', '邦尼', '思远',],
      splitArea: {
          show: true
      },
      axisLabel: {
        color: "rgba(255,255,255,1)" // 设置x轴坐标标签的文字颜色为白色
      }
    },
    yAxis: {
      type: 'category',
      data: ['宝乐', '小精灵', '童飞', '爱贝儿', '豆豆熊',"五彩梦"],
      splitArea: {
          show: true
      },
      axisLabel: {
        color: "rgba(255,255,255,1)", // 设置y轴坐标标签的文字颜色为白色
        fontSize: 10 // 设置字体大小为10px
    }
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
      textStyle: {
        color: "rgba(255,255,255,1)" // 设置视觉映射组件的文字颜色为白色
      }
    },
  series: [{
    name: 'Punch Card',
    type: 'heatmap',
    data: [
      // [x轴坐标，y轴坐标，数值大小], 数值大小会根据 visualMap 中定义的范围映射到相应的颜色
      [0, 0, 18], [1, 0, 89], [2, 0, 1],
      [0, 1, 5], [1, 1, 74], [2, 1, 1], 
      [0, 2, 97], [1, 2, 1], [2, 2, 3],
      [0, 3, 1], [1, 3, 6], [2, 3, 93], 
      [0, 4, 86], [1, 4, 2], [2, 4, 33], 
      [0, 5, 106], [1, 5, 1], [2, 5, 1], 
    ],
    label: {
      show: true
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function() {
  myChart.resize();
});
})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 193099280, name: "思远" },
          { value: 346342900, name: "邦尼" },
          { value: 509896780, name: "恒通" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10,
          formatter: '{b} : {d}%'
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
