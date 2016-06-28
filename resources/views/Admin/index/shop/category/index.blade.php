@extends('Admin.layouts.application')

@section('content')
        <!-- content start -->
<div class="admin-content">
    <div class="admin-content-body">
        <div class="am-cf am-padding am-padding-bottom-0">
            <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">商品分类管理</strong> /
                <small> Good Categories Manage</small>
            </div>
        </div>
        @include('Admin.layouts._flash')
        <hr>

        <div class="am-g">
            <div class="am-u-sm-12 am-u-md-6">
                <div class="am-btn-toolbar">
                    <div class="am-btn-group am-btn-group-xs">
                        <a href="/shop/category/create" class="am-btn am-btn-default"><span class="am-icon-plus"></span>
                            新增
                        </a>
                        <button type="button" class="am-btn am-btn-success" id="show_all" style="margin-left: 5px"><span
                                    class="am-icon-save"></span> 展开所有
                        </button>
                    </div>
                </div>
            </div>


        </div>

        <div class="am-g">
            <div class="am-u-sm-12">
                <form class="am-form">
                    {!! csrf_field() !!}
                    <table class="am-table am-table-hover table-main">
                        <thead>
                        <tr>
                            <th class="table-id">ID</th>
                            <th class="table-title">缩略图</th>
                            <th class="table-type">分类名</th>
                            <th class="table-author am-hide-sm-only">分类商品</th>
                            <th class="table-date am-hide-sm-only">是否显示</th>
                            <th class="table-date am-hide-sm-only">排序</th>
                            <th class="table-set">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($categories as $category)
                            <tr data-id="{{$category->id}}" id="row_{{$category->id}}" class="xParent">
                                <td>
                                    {{$category->id}}
                                </td>
                                <td>
                                    @if($category->thumb)<img src="{{$category->thumb}}" alt="" class="thumb"
                                                               style="width: 70px;height:50px">@endif
                                </td>
                                <td>
                                    {{$category->name}}
                                </td>
                                <td class="am-hide-sm-only">

                                </td>
                                <td class="am-hide-sm-only">
                                    {!! is_something('is_show',$category) !!}
                                </td>
                                <td>
                                    <input type="text" style="width: 50px" name="sort_order"
                                           value="{{$category->sort_order}}">
                                </td>
                                <td>
                                    <div class="am-btn-toolbar">
                                        <div class="am-btn-group am-btn-group-xs">
                                            <a href="{{route('shop.category.edit',$category->id)}}"
                                               class="am-btn am-btn-default am-btn-xs am-text-secondary"><span
                                                        class="am-icon-pencil-square-o"></span> 编辑
                                            </a>

                                            <a href="{{route('shop.category.destroy',$category->id)}}"
                                               data-method="delete" data-token="{{csrf_token()}}"
                                               data-confirm="确认删除类目吗？"
                                               class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only">
                                                <span class="am-icon-trash-o"></span> 删除
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>


                            @foreach($category->children as $c)
                                <tr data-id="{{$c->id}}" id="child_row_{{$category->id}}" class="xChildren">
                                    <td>
                                        {{$c->id}}
                                    </td>
                                    <td>
                                        @if($c->thumb)<img src="{{$c->thumb}}" alt="" class="thumb"
                                                                   style="width: 70px;height:50px">@endif
                                    </td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {{$c->name}}
                                    </td>
                                    <td class="am-hide-sm-only">
                                        <a href="">查看商品</a>
                                    </td>
                                    <td class="am-hide-sm-only">
                                        {!! is_something('is_show',$c) !!}
                                    </td>
                                    <td>
                                        <input type="text" style="width: 50px" name="sort_order"
                                               value="{{$c->sort_order}}">
                                    </td>
                                    <td>
                                        <div class="am-btn-toolbar">
                                            <div class="am-btn-group am-btn-group-xs">
                                                <a href="{{route('shop.category.edit',$c->id)}}"
                                                   class="am-btn am-btn-default am-btn-xs am-text-secondary"><span
                                                            class="am-icon-pencil-square-o"></span> 编辑
                                                </a>

                                                <a href="{{route('shop.category.destroy',$c->id)}}"
                                                   data-method="delete" data-token="{{csrf_token()}}"
                                                   data-confirm="确认删除类目吗？"
                                                   class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only">
                                                    <span class="am-icon-trash-o"></span> 删除
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        @endforeach

                        </tbody>
                    </table>

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
        $(function () {
            //排序
            $("input[name='sort_order']").change(function () {
                var data = {
                    sort_order: $(this).val(),
                    id: $(this).parents('tr').data('id')
                }
                //console.log(data);
                $.ajax({
                    type: 'PATCH',
                    url: '/shop/category/sort_order',
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
                    url: "/shop/category/is_something",
                    data: data,
                    success: function () {

                        if (_this.hasClass('am-icon-close')) {
                            _this.removeClass('am-icon-close').addClass('am-icon-check');
                        } else {
                            _this.removeClass('am-icon-check').addClass('am-icon-close');
                        }
                    }
                });
                console.log(data);
            });


            //双击展开
            $('tr.xParent').dblclick(function () {
                $(this).toggleClass('am-active');
                $('#child_' + this.id).toggle();
            })

            //展开所有
            $('#show_all').click(function () {
                $("tr.xParent").toggleClass('am-active');
                $("tr.xChildren").toggle();
            })
        })


    </script>


@endsection