@extends('Admin.layouts.application')

@section('content')


        <!-- content start -->
<div class="admin-content">

    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">广告分类</strong> /
            <small>Ad Categories Manage</small>
        </div>
    </div>

    @include('Admin.layouts._flash')

    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-6">
            <div class="am-btn-toolbar">
                <div class="am-btn-group am-btn-group-xs">
                    <a type="button" class="am-btn am-btn-default" href="{{route('Ad.category.create')}}">
                        <span class="am-icon-plus"></span> 新增
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="am-g">
        <div class="am-u-sm-12">
            <form class="am-form">
                <table class="am-table am-table-striped am-table-hover table-main">
                    <thead>
                    <tr>
                        <th class="table-id">编号</th>
                        <th>缩略图</th>
                        <th class="table-name">分类名</th>
                        <th class="table-sort-order am-hide-sm-only" style="width:10%">排序</th>
                        <th class="table-set">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($categories as $category)
                    <tr data-id="{{$category->id}}">
                        <td>{{$category->id}}</td>
                        <td>
                            <img src="{{$category->thumb}}" alt="" class="thumb" style="width:40px;height: 50px">                                </td>
                        <td>
                            {{$category->name}}
                        </td>

                        <td class="am-hide-sm-only">
                            <input type="text" name="sort_order" class="am-input-sm sort_order" value="{{$category->sort_order}}">
                        </td>


                        <td>
                            <div class="am-btn-toolbar">
                                <div class="am-btn-group am-btn-group-xs">
                                    <a class="am-btn am-btn-default am-btn-xs am-text-secondary"
                                       href="{{route('Ad.category.edit',$category->id)}}">
                                        <span class="am-icon-pencil-square-o"></span> 编辑
                                    </a>

                                    <a class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"
                                       href="{{route('Ad.category.destroy',$category->id)}}"
                                       data-method="delete"
                                       data-token="{!! csrf_token() !!}" data-confirm="确认删除吗?">
                                        <span class="am-icon-trash-o"></span> 删除
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                        @endforeach
                    </tbody>
                </table>

            </form>
        </div>

    </div>
</div>
<!-- content end -->

    @endsection

@section('js')
    <script type="text/javascript">
        $(function(){
            $('.sort_order').change(function(){
                var data = {
                    id:$(this).parents('tr').data('id'),
                    sort_order:$(this).val()
                }
                console.log(data);
                $.ajax({
                    type:'PATCH',
                    url:'/Ad/category/sort_order',
                    data:data
                })
            })
        })


    </script>

    @endsection