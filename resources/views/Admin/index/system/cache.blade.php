@extends('Admin.layouts.application')

@section('content')

        <!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">清除缓存</strong> /
            <small>Clear Cache</small>
        </div>
    </div>
    @include('Admin.layouts._flash')
    <hr>

    <div class="am-g">

        <div class="am-g am-margin-top">

            <div class="am-u-md-8 am-u-md-offset-2">
                <a href="/system/clear_cache" class="am-btn am-btn-danger am-radius am-btn-block">
                    <i class="am-icon-refresh am-icon-spin"></i>
                    清除缓存
                </a>
            </div>
        </div>
    </div>
</div>
<!-- content end -->

    @endsection
