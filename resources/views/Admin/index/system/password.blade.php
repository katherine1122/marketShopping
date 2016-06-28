@extends('Admin.layouts.application')

@section('content')

        <!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">修改密码</strong> /
            <small>Update Password</small>
        </div>
    </div>

    @include('Admin.layouts._flash')

    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-12">

            <div class="am-tab-panel">

                <form class="am-form " action="/system/password/update_password" method="post">
                   {!! csrf_field() !!}
                    {!! method_field('patch') !!}

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-3 am-text-right">
                            原始密码
                        </div>
                        <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                            <input type="password" class="am-input-sm" name="old_password">
                        </div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-3 am-text-right">
                            新密码
                        </div>
                        <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                            <input type="password" class="am-input-sm" name="password">
                        </div>
                    </div>

                    <div class="am-g am-margin-top">
                        <div class="am-u-sm-4 am-u-md-3 am-text-right">
                            确认密码
                        </div>
                        <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                            <input type="password" class="am-input-sm" name="password_confirmation">
                        </div>
                    </div>


                    <div class="am-margin">
                        <button type="submit" class="am-btn am-btn-primary">保存修改</button>
                    </div>

                </form>
            </div>


        </div>


    </div>
</div>
<!-- content end -->


    @endsection