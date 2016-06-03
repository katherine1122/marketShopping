@extends('Admin.layouts.application')

@section('content')
    <div class="admin-content">

        <!-- content start -->
        <div class="admin-content">
            <div class="admin-content-body">
                <div class="am-cf am-padding am-padding-bottom-0">
                    <div class="am-fl am-cf">
                        <strong class="am-text-primary am-text-lg">修改品牌</strong> /
                        <small>Edit Brand</small>
                    </div>
                </div>

                <hr>


                <div style="padding-top: 10px">
                    <form class="am-form" method="post" action="{{route('shop.brand.update', $brand->id)}}">
                        {!! csrf_field() !!}
                        {!! method_field('put') !!}
                        <div class="am-g am-margin-top">
                            <div class="am-u-sm-4 am-u-md-2 am-text-right">商品品牌</div>
                            <div class="am-u-sm-8 am-u-md-4">
                                <input type="text" class="am-input-sm" name="name" value="{{$brand->name}}">
                            </div>
                            <div class="am-hide-sm-only am-u-md-6">*必填，不可重复</div>
                        </div>

                        <div class="am-g am-margin-top">
                            <div class="am-u-sm-4 am-u-md-2 am-text-right">品牌网址</div>
                            <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                                <input type="text" class="am-input-sm" name="url" value="{{$brand->url}}">
                            </div>
                        </div>

                        <div class="am-g am-margin-top">
                            <div class="am-u-sm-4 am-u-md-2 am-text-right">缩略图</div>


                        </div>

                        <div class="am-g am-margin-top">
                            <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                品牌描述
                            </div>
                            <div class="am-u-sm-8 am-u-md-4">
                                <textarea rows="6" name="desc">{{$brand->desc}}</textarea>
                            </div>
                            <div class="am-u-sm-12 am-u-md-6"></div>
                        </div>

                        <div class="am-g am-margin-top-sm" style="padding-top: 20px">
                            <div class="am-u-sm-12 am-u-md-2 am-text-right admin-form-text">
                                是否显示
                            </div>
                            <div class="am-u-sm-12 am-u-md-10">
                                <input type="radio" name="is_show"
                                       @if($brand->is_show=='1')
                                               checked="true"
                                               @endif
                                       value="1" /> 是
                                <input type="radio" name="is_show" value="0" /> 否
                            </div>
                        </div>

                        <div class="am-g am-margin-top-sm" style="padding-top: 20px">
                            <div class="am-u-sm-12 am-u-md-2 am-text-right admin-form-text">
                                排序
                            </div>
                            <div class="am-u-sm-12 am-u-md-10" >
                                <input type="text" class="am-input-sm" style="width: 150px" name="sort_order" value="{{$brand->sort_order}}">
                            </div>
                        </div>

                        <div class="am-margin">
                            <button type="submit" class="am-btn am-btn-primary am-btn-xs">提交保存</button>
                            <button type="button" class="am-btn am-btn-primary am-btn-xs">放弃保存</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>


    </div>

    <footer class="admin-content-footer">
        <hr>
        <p class="am-padding-left">© 2014 AllMobilize, Inc. Licensed under MIT license.</p>
    </footer>
    </div>
    <!-- content end -->

    </div>
@endsection