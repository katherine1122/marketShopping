@extends('Admin.layouts.application')

        @section('css')
        <link rel="stylesheet" href="/assets/css/customer.css">
        <link rel="stylesheet" href="/assets/vendor/daterangepicker/daterangepicker.css">
        @endsection

@section('content')
        <!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">会员管理</strong> /
            <small>Customer Manage</small>
        </div>
    </div>

@include('Admin.layouts._flash')

    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-12">
            <form class="am-form-inline" role="form" method="get">

                <div class="am-form-group">
                    <input type="text" name="nickname" class="am-form-field am-input-sm" placeholder="会员昵称"
                           value="{{Request::input('nickname')}}">
                </div>

                <div class="am-form-group">
                    <input type="text" name="openid" class="am-form-field am-input-sm" placeholder="微信OPEN_ID"
                           value="{{Request::input('opendid')}}">
                </div>

                <div class="am-form-group">
                    <select data-am-selected="{btnSize: 'sm'}" name="sex" id="">
                        <option value="-1" @if(Request::input('sex') == '-1') selected @endif>选择性别</option>
                        <option value="1" @if(Request::input('sex') =='1') selected @endif>男</option>
                        <option value="0" @if(Request::input('sex') == '0') selected @endif>女</option>
                    </select>
                </div>

                <div class="am-form-group">
                    <input type="text" id="created_at" placeholder="选择注册时间" name="created_at"
                           value="{{Request::input('created_at')}}" class="am-form-field am-input-sm"/>
                </div>

                <button type="submit" class="am-btn am-btn-default am-btn-sm">查询</button>
            </form>
        </div>

    </div>


    <div class="am-g">
        <div class="am-u-sm-12">
            <form class="am-form">
                <table class="am-table am-table-striped am-table-hover table-main">
                    <thead>
                    <tr>
                        <th>编号</th>
                        <th>头像</th>
                        <th>昵称</th>
                        <th>openid</th>
                        <th>性别</th>
                        <th class="am-hide-sm-only">关注时间</th>
                        <th class="table-set">操作</th>
                    </tr>
                    </thead>
                    <tbody>

                    @foreach($customers as $customer)
                    <tr>
                        <td>{{$customer->id}}</td>
                        <td><img src="{{$customer->headimgurl}}" alt="" class="thumb" style="width: 40px;height: 50px"/></td>
                        <td>{{$customer->nickname}}</td>
                        <td>{{$customer->openid}}</td>

                        <td class="am-hide-sm-only">
                            @if($customer->sex==1)<span class="am-icon-male"></span>
                            @else <span class="am-icon-female"></span>
                                @endif
                        </td>
                        <td>{{$customer->created_at}}</td>

                        <td>
                            <div class="am-btn-toolbar">
                                <div class="am-btn-group am-btn-group-xs">
                                    <a class="am-btn am-btn-default am-btn-xs am-text-secondary" href="">
                                        <span class="am-icon-list-alt"></span> 查看订单
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    @endforeach
                    </tbody>
                </table>

                共 {{$customers->count()}} 条记录

                <div class="am-cf">
                    <div class="am-fr">

                        <ul class="pagination">
                            {!! $customers->links() !!}
                        </ul>
                    </div>
                </div>

            </form>
        </div>
    </div>

</div>
<!-- content end -->

    @endsection

@section('js')

    <script type="text/javascript" src="/assets/vendor/daterangepicker/moment.js"></script>
    {{--先有moment后有daterangepicker--}}
    <script type="text/javascript" src="/assets/vendor/daterangepicker/daterangepicker.js"></script>
    <script type="text/javascript" src="/assets/vendor/moment/locale/zh-cn.js"></script>
    <script type="text/javascript" src="/assets/js/daterange_config.js"></script>
    @endsection