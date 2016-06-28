<!doctype html>
<html class="no-js fixed-layout">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>后台管理</title>
    <meta name="description" content="这是一个 index 页面">
    <meta name="keywords" content="index">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link rel="icon" type="image/png" href="/favicon.ico">
    <link rel="apple-touch-icon-precomposed" href="/amaze/i/app-icon72x72@2x.png">
    <meta name="apple-mobile-web-app-title" content="Amaze UI"/>
    <link rel="stylesheet" href="/amaze/css/amazeui.min.css"/>
    <link rel="stylesheet" href="/amaze/css/admin.css">
    <link rel="stylesheet" href="/assets/css/brand.css">
    <link rel="stylesheet" href="/assets/vendor/nprogress/nprogress.css">
    <link rel="stylesheet" href="/assets/css/system.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @yield('css')
</head>
<body>
<!--[if lte IE 9]>
<p class="browsehappy">你正在使用<strong>过时</strong>的浏览器，Amaze UI 暂不支持。 请 <a href="http://browsehappy.com/" target="_blank">升级浏览器</a>
    以获得更好的体验！</p>
<![endif]-->

<header class="am-topbar am-topbar-inverse admin-header">
    <div class="am-topbar-brand">
        <strong>商城</strong>
        <small>后台管理模板</small>
    </div>

    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
            data-am-collapse="{target: '#topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span
                class="am-icon-bars"></span></button>

    <div class="am-collapse am-topbar-collapse" id="topbar-collapse">

        <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
            <li><a href="javascript:;"><span class="am-icon-envelope-o"></span> 收件箱 <span
                            class="am-badge am-badge-warning">5</span></a></li>
            <li class="am-dropdown" data-am-dropdown>
                <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                    <span class="am-icon-users"></span> 管理员 <span class="am-icon-caret-down"></span>
                </a>
                <ul class="am-dropdown-content">
                    <li><a href="#"><span class="am-icon-user"></span> 资料</a></li>
                    <li><a href="#"><span class="am-icon-cog"></span> 设置</a></li>
                    <li><a href="/admin/logout"><span class="am-icon-power-off"></span> 退出</a></li>
                </ul>
            </li>
            <li class="am-hide-sm-only"><a href="javascript:;" id="admin-fullscreen"><span
                            class="am-icon-arrows-alt"></span> <span class="admin-fullText">开启全屏</span></a></li>
        </ul>
    </div>
</header>

<div class="am-cf admin-main">
    <!-- sidebar start -->
    <div class="admin-sidebar am-offcanvas" id="admin-offcanvas">
        <div class="am-offcanvas-bar admin-offcanvas-bar">
            <ul class="am-list admin-sidebar-list">
                <li><a href="/admin"><span class="am-icon-home"></span> 首页</a></li>
                <li class="admin-parent">
                    <a class="am-cf" data-am-collapse="{target: '#collapse-ni'}">
                        <span class="am-icon-unlock"></span>
                        企业管理
                        <span class="am-icon-angle-right am-fr am-margin-right"></span>
                    </a>

                </li>
                <li class="admin-parent">
                    <a class="am-cf " data-am-collapse="{target: '#collapse-system'}" >
                        <span class="am-icon-bug"></span>
                        系统管理
                        <span class="am-icon-angle-right am-fr am-margin-right"></span>
                    </a>
                    <ul class="am-list am-collapse admin-sidebar-sub {{$_system_config or ''}}" id="collapse-system">
                        <li><a href="/system/log-viewer" class="am-cf ">
                                <span class="am-icon-film"></span> 日志管理
                                <span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span>
                            </a>
                        </li>
                        <li>
                            <a href="/system/config/edit" class="{{$_config or ''}}"><span class="am-icon-comment"></span> 站点信息
                            </a>
                        </li>
                        <li>
                            <a href="/system/password/edit" class="{{$_password or ''}}"><span class="am-icon-lock "></span> 修改密码</a>
                        </li>
                        <li><a href="/system/cache" class="{{$_cache or ''}}"><span class="am-icon-refresh am-icon-spin "></span>
                                清除缓存
                            </a>
                        </li>

                    </ul>
                </li>

                <li class="admin-parent">
                    <a class="am-cf" data-am-collapse="{target: '#collapse-nave'}" >
                        <span class="am-icon-shopping-cart"></span>
                        商品管理
                        <span class="am-icon-angle-right am-fr am-margin-right"></span>
                    </a>
                    <ul class="am-list am-collapse admin-sidebar-sub {{$_shop or ''}}" id="collapse-nave" >
                        <li><a href="/shop/page" class="am-cf {{$_index or ''}}">
                                <span class="am-icon-facebook-official"></span> 首页
                                <span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span>
                            </a>
                        </li>
                        <li><a href="/shop/product/index" class="am-cf {{$_product or ''}}">
                                <span class="am-icon-table"></span> 商品列表
                                <span class="am-badge am-badge-warning am-margin-right am-fr">
                                    {{\App\Models\shop\Product::count()}}</span>
                            </a>
                        </li>
                        <li>
                            <a href="/shop/product/create" class="{{$_create or ''}}"><span class="am-icon-plus"></span> 添加新商品
                            </a>
                        </li>
                        <li>
                            <a href="/shop/category/index" class="{{$_productCategory or ''}}"><span class="am-icon-folder"></span> 商品分类
                                <span class="am-badge am-badge-success am-margin-right am-fr">
                                    {{\App\Models\shop\ProductCategory::count()}}</span>
                            </a>
                        </li>
                        <li><a href="/shop/brand/index" class="{{$_brand or ''}}"><span class="am-icon-shopping-basket"></span>商品品牌
                                <span class="am-badge am-badge-secondary am-margin-right am-fr">
                                    {{\App\Models\shop\Brand::count()}}</span>
                            </a>
                        </li>
                        <li><a href="/shop/product/trash" class="{{$_trash or ''}}"><span class="am-icon-refresh am-icon-trash"></span>商品回收站
                                <span class="am-badge am-badge-danger am-margin-right am-fr">
                                    {{\App\Models\shop\Product::onlyTrashed()->count()}}</span>
                            </a>
                        </li>
                        <li class="admin-parent">
                            <a class="am-cf " data-am-collapse="{target: '#collapse-shop'}" >
                                <span class="am-icon-birthday-cake"></span>
                                商店管理
                                <span class="am-icon-angle-right am-fr am-margin-right"></span>
                            </a>
                            <ul class="am-list am-collapse admin-sidebar-sub {{$_market or ''}}" id="collapse-shop">
                                <li><a href="" class="am-cf">
                                        <span class="am-icon-weixin"></span> 微信自定义菜单
                                    </a>
                                </li>
                                <li>
                                    <a href="/shop/product/order/index" class="{{$_order or ''}}"><span class="am-icon-server"></span> 订单管理
                                        <span class="am-badge am-badge-success am-margin-right am-fr">
                                    {{\App\Models\shop\Order::count()}}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/shop/product/customer/index" class="{{$_customer or ''}}"><span class="am-icon-desktop "></span> 会员管理
                                    <span class="am-badge am-badge-warning am-margin-right am-fr">
                                    {{\App\Models\shop\Customer::count()}}</span>
                                    </a>
                                </li>
                                <li><a href="/shop/product/express/index" class="{{$_express or ''}}"><span class="am-icon-paper-plane"></span>快递运费
                                        <span class="am-badge am-badge-info am-margin-right am-fr">
                                    {{\App\Models\shop\Express::count()}}</span>
                                    </a>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </li>

                <li class="admin-parent">
                    <a class="am-cf" data-am-collapse="{target: '#collapse-na'}">
                        <span class="am-icon-shopping-bag"></span>
                        广告中心
                        <span class="am-icon-angle-right am-fr am-margin-right"></span>
                    </a>
                    <ul class="am-list am-collapse admin-sidebar-sub {{$_adcenter or ''}}" id="collapse-na">
                        <li><a href="/Ad/ad/index" class="am-cf {{$_list or ''}}">
                                <span class="am-icon-font-awesome"></span> 广告列表
                                <span class="am-badge am-badge-success am-margin-right am-fr">
                                    {{\App\Models\ad\Ad::count()}}</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Ad/ad/create" class="{{$_create or ''}}"><span class="am-icon-plus"></span> 添加新广告
                            </a>
                        </li>
                        <li>
                            <a href="/Ad/category/index" class="{{$_category or ''}}"><span class="am-icon-cart-plus"></span> 广告分类
                                <span class="am-badge am-badge-secondary am-margin-right am-fr">
                                    {{\App\Models\ad\AdCategory::count()}}</span>
                            </a>
                        </li>
                        <li><a href="/Ad/ad/trash" class="{{$_trash or ''}}"><span class="am-icon-refresh am-icon-trash"></span>广告回收站
                                <span class="am-badge am-badge-danger am-margin-right am-fr">
                                    {{\App\Models\ad\Ad::onlyTrashed()->count()}}</span>
                            </a>
                        </li>


                    </ul>
                </li>


                <li class="admin-parent">
                    <a class="am-cf" data-am-collapse="{target: '#collapse-ne'}">
                        <span class="am-icon-building"></span>
                        PHP武汉官网
                        <span class="am-icon-angle-right am-fr am-margin-right"></span>
                    </a>
                    <ul class="am-list am-collapse admin-sidebar-sub" id="collapse-ne">
                        <li><a href="" class="am-cf">
                                <span class="am-icon-font-reorder (alias)"></span> 文章列表
                                <span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span>
                            </a>
                        </li>
                        <li>
                            <a href=""><span class="am-icon-plus"></span> 添加新文章
                            </a>
                        </li>
                        <li>
                            <a href=""><span class="am-icon-star-o"></span> 栏目管理
                                <span class="am-badge am-badge-secondary am-margin-right am-fr">24</span>
                            </a>
                        </li>
                        <li><a href=""><span class="am-icon-tags"></span>
                                友情链接
                            </a>
                        </li>
                        <li>
                            <a href=""><span class="am-icon-file-video-o"></span> 文件管理
                                <span class="am-badge am-badge-secondary am-margin-right am-fr">24</span>
                            </a>
                        </li>
                        <li><a href=""><span class="am-icon-refresh am-icon-trash"></span>
                                文章回收站
                            </a>
                        </li>


                    </ul>
                </li>

            </ul>

            <div class="am-panel am-panel-default admin-sidebar-panel">
                <div class="am-panel-bd">
                    <p><span class="am-icon-bookmark"></span> 公告</p>
                    <p>时光静好，与君语；细水流年，与君同。—— Amaze UI</p>
                </div>
            </div>


        </div>
    </div>
    <!-- sidebar end -->

    <!-- content start -->
    @yield('content')
            <!-- content end -->

</div>

<a href="#" class="am-icon-btn am-icon-th-list am-show-sm-only admin-menu"
   data-am-offcanvas="{target: '#admin-offcanvas'}"></a>

<!--[if lt IE 9]>
<script src="http://libs.baidu.com/jquery/1.11.1/jquery.min.js"></script>
<script src="http://cdn.staticfile.org/modernizr/2.8.3/modernizr.js"></script>
<script src="/amaze/js/amazeui.ie8polyfill.min.js"></script>
<![endif]-->

<!--[if (gte IE 9)|!(IE)]><!-->
<script src="/amaze/js/jquery.min.js"></script>
<!--<![endif]-->
<script src="/assets/vendor/nprogress/nprogress.js"></script>
<script src="/amaze/js/amazeui.min.js"></script>
<script src="/amaze/js/app.js"></script>
<script src="/assets/js/system.js"></script>
<script src="/assets/js/laravel.js"></script>
@yield('js')
</body>
</html>
