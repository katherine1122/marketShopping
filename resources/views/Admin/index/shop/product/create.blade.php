@extends('Admin.layouts.application')


@section('content')

        <!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">新增商品</strong> /
            <small>Create A New Product</small>
        </div>
    </div>

    @include('Admin.layouts._flash')

    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-12">


            <form class="am-form" action="{{route('shop.product.store')}}" method="post">
                {!! csrf_field() !!}


                <div class="am-tabs am-margin" data-am-tabs>
                    <ul class="am-tabs-nav am-nav am-nav-tabs">
                        <li class="am-active"><a href="#tab1">通用信息</a></li>
                        <li><a href="#tab2">商品介绍</a></li>
                        <li><a href="#tab3">商品相册</a></li>
                    </ul>

                    <div class="am-tabs-bd">
                        <div class="am-tab-panel am-fade am-in am-active" id="tab1">

                            <div class="am-g am-margin-top">
                                <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                    所属栏目
                                </div>
                                <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">

                                    <select data-am-selected="{btnWidth: '100%',  btnStyle: 'secondary', btnSize: 'sm', maxHeight: 360, searchBox: 1}"
                                            name="category_id">

                                        @foreach($categories as $category)
                                        <optgroup label="{{$category->name}}">
                                            @foreach($category->children as $c)
                                            <option value="{{$c->id}}">
                                                {{$c->name}}
                                            </option>
                                                @endforeach
                                        </optgroup>
                                            @endforeach

                                    </select>
                                </div>
                            </div>

                            <div class="am-g am-margin-top">
                                <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                    商品名称
                                </div>
                                <div class="am-u-sm-8 am-u-md-4">
                                    <input type="text" class="am-input-sm" name="name">
                                </div>
                                <div class="am-hide-sm-only am-u-md-6">*必填，不可重复</div>
                            </div>

                            <div class="am-g am-margin-top">
                                <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                    单价
                                </div>
                                <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                                    <input type="text" class="am-input-sm" name="price" value="">
                                </div>
                            </div>

                            <div class="am-g am-margin-top">
                                <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                    商品品牌
                                </div>
                                <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                                    <select data-am-selected="{btnWidth: '100%',  btnStyle: 'secondary', btnSize: 'sm', maxHeight: 360, searchBox: 1}"
                                            name="brand_id">
                                        <option value="-1">
                                            请选择
                                        </option>
                                        @foreach($brands as $brand)
                                        <option value="{{$brand->id}}">
                                            {{$brand->name}}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="am-g am-margin-top">
                                <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                    库存
                                </div>
                                <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                                    <input type="text" class="am-input-sm" name="stock" value="无限">
                                </div>
                            </div>

                            <div class="am-g am-margin-top">
                                <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                    缩略图
                                </div>

                                <div class="am-u-sm-8 am-u-md-8 am-u-end col-end">
                                    <div class="am-form-group am-form-file new_thumb" style="float: left">
                                        <button type="button" class="am-btn am-btn-secondary am-btn-sm">
                                            <i class="am-icon-cloud-upload" id="loading"></i> 上传新的缩略图
                                        </button>
                                        <input type="file" id="thumb_upload">
                                    </div>

                                    <div class="select_thumb" style="float: left">
                                        <button type="button" class="am-btn am-btn-success am-btn-sm"
                                                id="ck_thumb_upload">
                                            <i class="am-icon-search-plus" id="loading"></i> 选择已存在的缩略图
                                        </button>
                                        <input type="hidden" name="thumb">
                                    </div>

                                    <hr data-am-widget="divider" style="" class="am-divider am-divider-dashed"/>

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
                                    <textarea rows="4" name="description"></textarea>
                                </div>
                            </div>

                            <div class="am-g am-margin-top">
                                <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                    上架
                                </div>
                                <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                                    <label class="am-radio-inline">
                                        <input type="radio" value="1" name="is_onsale" checked> 是
                                    </label>
                                    <label class="am-radio-inline">
                                        <input type="radio" value="0" name="is_onsale"> 否
                                    </label>
                                </div>
                            </div>

                            <div class="am-g am-margin-top">
                                <div class="am-u-sm-4 am-u-md-2 am-text-right">
                                    加入推荐
                                </div>
                                <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
                                    <div class="am-btn-group" data-am-button="">
                                        <input type="hidden" name="is_top" value="0">
                                        <input type="hidden" name="is_recommend" value="0">
                                        <input type="hidden" name="is_hot" value="0">
                                        <input type="hidden" name="is_new" value="0">


                                        <label class="am-btn am-btn-default am-btn-xs am-round">
                                            <input type="checkbox" name="is_top" value="1"> 置顶
                                        </label>
                                        <label class="am-btn am-btn-default am-btn-xs am-round">
                                            <input type="checkbox" name="is_recommend" value="1"> 推荐
                                        </label>
                                        <label class="am-btn am-btn-default am-btn-xs am-round">
                                            <input type="checkbox" name="is_hot" value="1"> 热销
                                        </label>
                                        <label class="am-btn am-btn-default am-btn-xs am-round">
                                            <input type="checkbox" name="is_new" value="1"> 新品
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="am-tab-panel am-fade" id="tab2">
                            <div class="am-g am-margin-top-sm">
                                <div class="am-u-sm-12 am-u-md-12">
                                    <textarea id="editor_id" name="content" style="height: 500px"></textarea>
                                </div>
                            </div>

                        </div>

                        <div class="am-tab-panel am-fade" id="tab3">
                            <div id="uploader">
                                <div class="queueList">
                                    <div id="dndArea" class="placeholder">
                                        <div id="filePicker"></div>
                                        <p>或将照片拖到这里，单次最多可选300张</p>
                                    </div>
                                </div>
                                <div class="statusBar" style="display:none;">
                                    <div class="progress">
                                        <span class="text">0%</span>
                                        <span class="percentage"></span>
                                    </div>
                                    <div class="info"></div>
                                    <div class="btns">
                                        <div id="filePicker2"></div>
                                        <div class="uploadBtn">开始上传</div>
                                    </div>
                                </div>

                                <div id="imgs"></div>
                            </div>
                        </div>
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
    <script type="text/javascript" src="/assets/js/ck_upload.js"></script>
    <script type="text/javascript" src="/assets/vendor/ckfinder/ckfinder.js"></script>

    <script type="text/javascript" src="/assets/js/jquery.html5-fileupload.js"></script>
    <script type="text/javascript" src="/assets/js/upload.js"></script>

    <script charset="utf-8" src="/assets/vendor/kindeditor/kindeditor-all.js"></script>
    <script charset="utf-8" src="/assets/vendor/kindeditor/lang/zh-CN.js"></script>

    <script>
        KindEditor.ready(function(K) {
            window.editor = K.create('#editor_id');
        });
    </script>
    @endsection