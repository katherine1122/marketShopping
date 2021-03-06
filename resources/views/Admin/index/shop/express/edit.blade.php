@extends('Admin.layouts.application')

@section('content')

        <!-- content start -->
<div class="admin-content">
    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">编辑快递方式</strong> /
            <small>Edit Express</small>
        </div>
    </div>

@include('Admin.layouts._flash')

    <form class="am-form" action="{{route('shop.product.express.update',$express->id)}}" method="post">
        {!! csrf_field() !!}
        {!! method_field('put') !!}

        <div class="am-g am-margin-top">
            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                快递名称
            </div>
            <div class="am-u-sm-8 am-u-md-4">
                <input type="text" class="am-input-sm" name="name" value="{{$express->name}}">
            </div>
            <div class="am-hide-sm-only am-u-md-6">*必填，不可重复</div>
        </div>

        <div class="am-g am-margin-top">
            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                快递公司代码
            </div>
            <div class="am-u-sm-8 am-u-md-4">
                <input type="text" class="am-input-sm" name="code" value="{{$express->code}}">
            </div>
            <div class="am-hide-sm-only am-u-md-6">*必填，不可重复 <a href="http://www.kuaidi100.com/download/api_kuaidi100_com(20140729).doc">查看代码</a></div>
        </div>

        <div class="am-g am-margin-top">
            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                网址
            </div>
            <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                <input type="text" class="am-input-sm" name="url" value="{{$express->url}}">
            </div>
        </div>

        <div class="am-g am-margin-top">
            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                运费
            </div>
            <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                <input type="text" class="am-input-sm" name="shipping_money" value="{{$express->shipping_money}}">
            </div>
        </div>

        <div class="am-g am-margin-top">
            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                满额包邮
            </div>
            <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                <input type="text" class="am-input-sm" name="shipping_free" value="{{$express->shipping_free}}">
            </div>
        </div>

        <div class="am-g am-margin-top">
            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                配送方式描述
            </div>
            <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                <textarea rows="4" name="desc">{{$express->desc}}</textarea>
            </div>
        </div>


        <div class="am-g am-margin-top">
            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                是否可用
            </div>
            <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                <label class="am-radio-inline">
                    <input type="radio" value="1" name="is_enable"
                          @if($express->is_enable==1) checked @endif> 是
                </label>
                <label class="am-radio-inline">
                    <input type="radio" value="0" name="is_enable"
                          @if($express->is_enable==0) checked @endif> 否
                </label>
            </div>
        </div>

        <div class="am-g am-margin-top">
            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                排序
            </div>
            <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                <input type="text" name="sort_order" class="am-input-sm" value="{{$express->sort_order}}">
            </div>
        </div>

        <div class="am-margin">
            <button type="submit" class="am-btn am-btn-primary am-radius">提交保存</button>
        </div>
    </form>
</div>
<!-- content end -->

    @endsection