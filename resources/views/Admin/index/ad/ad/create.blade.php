@extends('Admin.layouts.application')

@section('content')

        <!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">新增广告</strong> /
            <small>Create A New Ad</small>
        </div>
    </div>
    <hr>

    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-12">

            <form class="am-form" action="{{route('Ad.ad.store')}}" method="post">
                {!! csrf_field() !!}

                <div class="am-g am-margin-top">
                    <div class="am-u-sm-4 am-u-md-2 am-text-right">
                        所属分类
                    </div>
                    <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                        <select data-am-selected="{btnWidth: '100%',  btnStyle: 'secondary', btnSize: 'sm', maxHeight: 360, searchBox: 1}"
                                name="category_id">
                            @foreach($categories as $category)
                            <option value="{{$category->id}}">
                                {{$category->name}}
                            </option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="am-g am-margin-top">
                    <div class="am-u-sm-4 am-u-md-2 am-text-right">
                        广告标题
                    </div>
                    <div class="am-u-sm-8 am-u-md-4">
                        <input type="text" class="am-input-sm" name="title">
                    </div>
                    <div class="am-hide-sm-only am-u-md-6">*必填，不可重复</div>
                </div>


                <div class="am-g am-margin-top">
                    <div class="am-u-sm-4 am-u-md-2 am-text-right">
                        广告图
                    </div>

                    <div class="am-u-sm-8 am-u-md-8 am-u-end col-end">
                        <div class="am-form-group am-form-file new_thumb" style="float: left">
                            <button type="button" class="am-btn am-btn-secondary am-btn-sm">
                                <i class="am-icon-cloud-upload" id="loading"></i> 上传新的广告图
                            </button>
                            <input type="file" id="thumb_upload">
                        </div>

                        <div class="select_thumb" style="float: left">
                            <button type="button" class="am-btn am-btn-success am-btn-sm" id="ck_thumb_upload">
                                <i class="am-icon-search-plus" id="loading"></i> 选择已存在的广告图
                            </button>
                            <input type="hidden" name="thumb">
                        </div>

                        <hr data-am-widget="divider" style="" class="am-divider am-divider-dashed" />

                        <div>
                            <img src="" id="img_show" style="max-height: 200px;">
                        </div>
                    </div>
                </div>

                <div class="am-g am-margin-top sort">
                    <div class="am-u-sm-4 am-u-md-2 am-text-right">
                        描述信息
                    </div>
                    <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                        <textarea rows="4" name="desc"></textarea>
                    </div>
                </div>

                <div class="am-g am-margin-top">
                    <div class="am-u-sm-4 am-u-md-2 am-text-right">
                        广告地址
                    </div>
                    <div class="am-u-sm-8 am-u-md-4  am-u-end col-end">
                        <input type="text" class="am-input-sm" name="url" placeholder="请填写广告地址~">
                    </div>
                </div>

                <div class="am-g am-margin-top sort">
                    <div class="am-u-sm-4 am-u-md-2 am-text-right">
                        排序
                    </div>
                    <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                        <input type="text" name="sort_order" class="am-input-sm" value="99">
                    </div>
                </div>

                <div class="am-margin">
                    <button type="submit" class="am-btn am-btn-primary am-radius">提交保存</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- content end -->

    @endsection


@section('js')
    <script type="text/javascript" src="/assets/js/jquery.html5-fileupload.js"></script>
    <script type="text/javascript" src="/assets/js/upload.js"></script>
    <script type="text/javascript" src="/assets/js/ck_upload.js"></script>
    <script type="text/javascript" src="/assets/vendor/ckfinder/ckfinder.js"></script>
    @endsection