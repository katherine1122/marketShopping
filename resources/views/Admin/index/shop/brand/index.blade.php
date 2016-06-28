@extends('Admin.layouts.application')


    @section('content')
        <!-- content start -->
<div class="admin-content">
    <div class="admin-content-body">
        <div class="am-cf am-padding am-padding-bottom-0">
            <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">商品品牌</strong> /
                <small>Good Brands</small>
            </div>
        </div>

        @include('Admin.layouts._flash')
        <hr>

        <div class="am-g">
            <div class="am-u-sm-12 am-u-md-6">
                <div class="am-btn-toolbar">
                    <div class="am-btn-group am-btn-group-xs">
                        <a href="{{route('shop.brand.create')}}" class="am-btn am-btn-default"><span
                                    class="am-icon-plus"></span> 新增</a>

                    </div>
                </div>
            </div>

            <div class="am-u-sm-12 am-u-md-3">
                <form method="get" action="{{route('shop.brand.index')}}">
                    <div class="am-input-group am-input-group-sm">
                    <input type="text" class="am-form-field" name="keyword" value="{{Request::input('keyword')}}">
                    <span class="am-input-group-btn">
                        <button class="am-btn am-btn-default" type="submit">搜索</button>
                    </span>
                </div>
                </form>
            </div>
        </div>

        <div class="am-g">
            <div class="am-u-sm-12">
                <form class="am-form">
                    <table class="am-table am-table-striped am-table-hover table-main">
                        <thead>
                        <tr>
                            <th class="table-id">ID</th>
                            <th class="table-title">缩略图</th>
                            <th class="table-type">品牌名称</th>
                            <th class="table-author am-hide-sm-only">品牌商品</th>
                            <th class="table-date am-hide-sm-only">品牌描述</th>
                            <th class="table-author am-hide-sm-only">是否显示</th>
                            <th class="table-date am-hide-sm-only">排序</th>
                            <th class="table-set">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($brands as $brand)
                            <tr data-id="{{$brand->id}}">
                                <td>
                                    {{$brand->id}}
                                </td>
                                <td>
                                    @if($brand->thumb)<img src="{{$brand->thumb}}" alt="" class="thumb" style="width: 70px;height:50px">@endif
                                </td>
                                <td>
                                    {{$brand->name}}
                                </td>
                                <td>
                                    <a href="">查看商品</a>
                                </td>
                                <td>
                                    {{$brand->desc}}
                                </td>
                                <td>
                                    {!! is_something('is_show',$brand) !!}
                                </td>
                                <td><input type="text" class="am-input-sm" style="width: 50px" name="sort_order"
                                           value="{{$brand->sort_order}}"></td>
                                <td>
                                    <div class="am-btn-toolbar">
                                        <div class="am-btn-group am-btn-group-xs">
                                            <a href="{{route('shop.brand.edit',$brand->id)}}"
                                               class="am-btn am-btn-default am-btn-xs am-text-secondary">
                                                <span class="am-icon-pencil-square-o"></span> 编辑
                                            </a>

                                            <a href="{{route('shop.brand.destroy', $brand->id)}}" data-method="delete" data-token="{{csrf_token()}}" data-confirm="确定删除品牌吗?" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only">
                                                <span class="am-icon-trash-o"></span> 删除
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                    {!! $brands->links() !!}
                    <div class="am-cf">
                        共 {{$brand->count()}} 条记录

                    </div>
                    <hr/>

                </form>
            </div>

        </div>
    </div>


</div>
<!-- content end -->
@endsection

@section('js')
    <script type="text/javascript">

        $(function(){

            //排序
            $("input[name='sort_order']").change(function () {

                var data = {
                    sort_order: $(this).val(),
                    id: $(this).parents("tr").data('id')
                }

                $.ajax({
                    type: "PATCH",
                    url: "/shop/brand/sort_order",
                    data: data
                });
            })

            //显示
            $(".is_something").click(function () {


                var _this = $(this);
                var data = {
                    id: _this.parents("tr").data('id'),
                    attr: _this.data('attr')
                }

                $.ajax({
                    type: "PATCH",
                    url: "/shop/brand/is_something",
                    data: data,
                    success: function () {
                       //console.log("dd") ;
                        if (_this.hasClass('am-icon-close')) {
                            _this.removeClass('am-icon-close').addClass('am-icon-check');
                        } else {
                            _this.removeClass('am-icon-check').addClass('am-icon-close');
                        }
                    }
                });
            });



        })
    </script>
@endsection