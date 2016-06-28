@extends('Admin.layouts.application')

@section('content')

        <!-- content start -->
<div class="admin-content">
    <div class="am-cf am-padding">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">物流运费</strong> /
            <small>Express Manage</small>
        </div>
    </div>


    <div class="am-g">
        <div class="am-u-sm-12 am-u-md-6">
            <div class="am-btn-toolbar">
                <div class="am-btn-group am-btn-group-xs">
                    <a class="am-btn am-btn-default" href="{{route('shop.product.express.create')}}">
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
                        <th>编号</th>
                        <th>物流名称</th>
                        <th>配送方式描述</th>
                        <th>运费 / 满额包邮</th>
                        <th>是否可用</th>
                        <th style="width:10%">排序</th>
                        <th class="table-set">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($expresses as $express)
                    <tr data-id="{{$express->id}}">
                        <td>{{$express->id}}</td>
                        <td><a href="{{$express->url}}" target="">{{$express->name}}</a></td>
                        <td>{{$express->desc}}</td>

                        <td>{{$express->shipping_money}} / {{$express->shipping_free}}</td>
                        <td class="am-hide-sm-only">
                            @if($express->is_enable==1)
                            <span class="am-icon-check is_something" data-attr="is_enable"></span>
                                @else
                            <span class="am-icon-close is_something" data-attr="is_enable"></span>
                                @endif
                        </td>

                        <td class="am-hide-sm-only">
                            <input type="text" name="sort_order" class="am-input-sm sort_order" value="{{$express->sort_order}}">
                        </td>

                        <td>
                            <div class="am-btn-toolbar">
                                <div class="am-btn-group am-btn-group-xs">
                                    <a class="am-btn am-btn-default am-btn-xs am-text-secondary" href="{{route('shop.product.express.edit',$express->id)}}">
                                        <span class="am-icon-list-alt"></span> 编辑
                                    </a>
                                    <a class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only" href="{{route('shop.product.express.destroy',$express->id)}}" data-method="delete" data-token="{{csrf_token()}}" data-confirm="确定删除吗？">
                                        <span class="am-icon-trash-o"></span> 删除
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    @endforeach

                    </tbody>
                </table>

                共 {{$expresses->total()}} 条记录

                <div class="am-cf">
                    <div class="am-fr">
                        {!! $expresses->links() !!}

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
            //是否
            $('.is_something').click(function(){
                var _this=$(this);
                var data = {
                    id:_this.parents('tr').data('id'),
                    attr:_this.data('attr')
                }
                //console.log(data);
                $.ajax({
                    type:'PATCH',
                    url:'/shop/product/express/is_something',
                    data:data,
                    success:function(){
                        if(_this.hasClass('am-icon-close')){
                            _this.removeClass('am-icon-close').addClass('am-icon-check');
                        }else{
                            _this.removeClass('am-icon-check').addClass('am-icon-close');
                        }
                    }

                })
            })

            //排序
            $('.sort_order').change(function(){
                var data={
                    id:$(this).parents('tr').data('id'),
                    sort_order:$(this).val()
                }
                //console.log(data);
                $.ajax({
                    type:'PATCH',
                    url:'/shop/product/express/sort_order',
                    data:data
                })
            })

        })
    </script>

    @endsection