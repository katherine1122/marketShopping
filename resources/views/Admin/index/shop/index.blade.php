@extends('Admin.layouts.application')

@section('content')

        <!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding" style="padding-bottom: 50px">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">管理首页</strong> /
            <small>Manage Home</small>
        </div>
    </div>

    @include('Admin.layouts._flash')

    <ul class="am-avg-sm-1 am-avg-md-4 am-margin am-padding am-text-center admin-content-list">
        <li>
            <a href="/shop/product/order/index" class="am-text-warning">
                <span class="am-icon-btn am-icon-list-alt"></span><br/>订单管理<br/>{{\App\Models\shop\Order::count()}}
            </a>
        </li>

        <li>
            <a href="/shop/product/index" class="am-text-success">
                <span class="am-icon-btn am-icon-cart-plus"></span><br/>商品管理<br/>{{\App\Models\shop\Product::count()}}
            </a>
        </li>

        <li>
            <a href="/shop/product/customer/index" class="am-text-danger">
                <span class="am-icon-btn am-icon-user"></span><br/>会员管理<br/>{{\App\Models\shop\Customer::count()}}
            </a>
        </li>
        <li>
            <a href="/system/clear_cache" class="am-text-secondary">
                <span class="am-icon-btn am-icon-refresh am-icon-spin"></span><br/>清除缓存
            </a>
        </li>
    </ul>


    <hr data-am-widget="divider" style="" class="am-divider am-divider-default"/>

    <div class="am-g">
        <div class="am-u-sm-12">
            <div id="sales_count" style="width: 100%;height:400px;"></div>
        </div>
    </div>

    <div class="am-g">

        <div class="am-u-sm-12">
            <div id="sales_amount" style="width: 100%;height:400px;"></div>
        </div>
    </div>
    <hr data-am-widget="divider" style="" class="am-divider am-divider-default"/>


    <div class="am-g">
        <div class="am-u-sm-12">
            <div id="top" style="width: 100%;height:600px;"></div>
        </div>

    </div>


</div>
<!-- content end -->

    @endsection

@section('js')
    <script src="/assets/js/echarts.common.min.js"></script>


    <script>
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('sales_count'));

        // 指定图表的配置项和数据
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['下单','付款','配货','出库','交易成功']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'下单',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'付款',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'配货',
                    type:'bar',
                    stack: '广告',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'出库',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'交易成功',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'百度',
                    type:'bar',
                    barWidth : 5,
                    stack: '搜索引擎',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'谷歌',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'必应',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'其他',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

    </script>
    @endsection