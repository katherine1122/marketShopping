@extends('Admin.layouts.application')

@section('content')

        <!-- content start -->
<div class="admin-content">
    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">商品回收站</strong> /
            <small>Products Trash</small>
        </div>
    </div>

@include('Admin.layouts._flash')


    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-6">
            <div class="am-btn-toolbar">
                <div class="am-btn-group am-btn-group-xs">
                    <button type="button" class="am-btn am-btn-default" id="force_destroy_checked">
                        <span class="am-icon-trash-o"></span> 删除
                    </button>
                    <button type="button" class="am-btn am-btn-success" id="restore_checked">
                        <span class="am-icon-reply"></span> 还原
                    </button>
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
                        <th class="table-check"><input type="checkbox" id="checked"/></th>
                        <th class="table-id">编号</th>
                        <th>缩略图</th>

                        <th class="table-title">商品名称</th>
                        <th>单价</th>
                        <th class="table-category">所属分类</th>
                        <th class="table-brand">品牌</th>
                        <th class="table-date am-hide-sm-only">发布日期 / 删除日期</th>
                        <th class="table-set">操作</th>
                    </tr>
                    </thead>
                    <tbody>

                    @foreach($products as $product)
                    <tr>
                        <td><input type="checkbox" value="{{$product->id}}" class="checked_id"
                                   name="checked_id[]"/>
                        </td>
                        <td class="product_id">{{$product->id}}</td>
                        <td class="product_thumb"><img src="{{$product->thumb}}" style="width: 40px;height: 50px"></td>
                        <td>{{$product->name}}</td>
                        <td>{{$product->price}}</td>
                        <td>{{$product->category->name}}</td>
                        <td>{{$product->brand->name or ''}}</td>
                        <td>{{$product->created_at}} / {{$product->deleted_at}}</td>

                        <td>
                            <div class="am-btn-toolbar">
                                <div class="am-btn-group am-btn-group-xs">
                                    <a class="am-btn am-btn-default am-btn-xs am-text-secondary"
                                       href="/shop/product/restore/{{$product->id}}">
                                        <span class="am-icon-reply"></span> 还原
                                    </a>
                                    <a class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"
                                       href="/shop/product/trash/delete/{{$product->id}}"
                                       data-method="delete" data-token="{{csrf_token()}}" data-confirm="确定删除吗？">
                                        <span class="am-icon-trash-o"></span> 删除
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                        @endforeach

                    </tbody>
                </table>

                共 {{$products->count()}} 条记录

                <div class="am-cf">
                    <div class="am-fr">
                        {!! $products->links() !!}
                    </div>
                </div>

            </form>
        </div>
    </div>
</div>
<!-- content end -->

    @endsection

@section('js')
    <script type="text/javascript">
        $(function(){
            //多项还原
            $('#restore_checked').click(function(){
                var length = $('.checked_id:checked').length;
                if(length==0){
                    alert('请至少选择一项！');
                    return false;
                }
                var checked_id = $('.checked_id:checked').serialize();
                $.ajax({
                    type:'POST',
                    url:'/shop/product/restore_checked',
                    data:checked_id,
                    success:function(){
                        location.href = location.href;
                    }
                })
            })

            //多项删除
            $('#force_destroy_checked').click(function(){
                var length = $('.checked_id:checked').length;
                if(length==0){
                    alert('请至少选择一项！');
                    return false;
                }
                var checked_id = $('.checked_id:checked').serialize();
                $.ajax({
                    type:'delete',
                    url:'/shop/product/trash/force_delete_checked',
                    data:checked_id,
                    success:function(){
                        location.href = location.href;
                    }
                })
            })
        })
    </script>

    @endsection