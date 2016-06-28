<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});


//Route::group(['middleware'=>'web'],function(){

Route::get('/home', 'HomeController@index');

//前缀加admin
Route::group(['prefix' => 'admin'], function () {
    Route::auth();


    Route::group(['namespace' => 'Admin', 'middleware' => 'auth'], function () {
        Route::get('/', 'IndexController@index');

    });

});


Route::group(['middleware' => 'auth'], function () {

    //商品管理
    Route::group(['namespace' => 'Admin\shop', 'prefix' => 'shop'], function () {

        //首页
        Route::get('page','IndexController@index');

        ////品牌
        Route::group(['prefix' => 'brand'], function () {

            //商品品牌首页
            Route::get('index', 'BrandController@index');
            //排序
            Route::patch('sort_order', 'BrandController@sort_order');
            //是否显示
            Route::patch('is_something', 'BrandController@is_something');
        });

        //资源路由除去show方法
        Route::resource('brand', 'BrandController', ['except' => ['show']]);


        ////类目
        Route::group(['prefix' => 'category'], function () {

            //商品分类首页
            Route::get('index', 'CategoryController@index');
            //排序
            Route::patch('sort_order', 'CategoryController@sort_order');
            //是否
            Route::patch('is_something', 'CategoryController@is_something');

        });

        //生成资源路由
        Route::resource('category', 'CategoryController', ['except' => ['show']]);


        ////商品
        Route::group(['prefix' => 'product'], function () {

            //商品列表
            Route::get('index', 'ProductController@index');
            //是否
            Route::patch('is_something', 'ProductController@is_something');
            //库存
            Route::patch('stock', 'ProductController@stock');
            //多选删除
            Route::delete('destroy_checked', 'ProductController@destroy_checked');


            //商品回收站
            Route::get('trash', 'ProductController@trash');
            //商品单个还原
            Route::get('restore/{product}', 'ProductController@restore');
            //商品多项还原
            Route::post('restore_checked', 'ProductController@restore_checked');
            //商品单个彻底删除
            Route::delete('trash/delete/{product}', 'ProductController@force_delete');
            //多项彻底删除
            Route::delete('trash/force_delete_checked', 'ProductController@force_delete_checked');


            //快递运费
            Route::group(['prefix' => 'express'], function () {
                Route::get('index', 'ExpressController@index');
                //是否
                Route::patch('is_something', 'ExpressController@is_something');
                //排序
                Route::patch('sort_order', 'ExpressController@sort_order');
            });
            //生成资源路由
            Route::resource('express', 'ExpressController', ['except' => 'show']);


            //会员管理
            Route::get('customer/index', 'CustomerController@index');


            //订单管理
            Route::group(['prefix' => 'order'], function () {
                Route::get('index', 'OrderController@index');

                Route::patch('picking','OrderController@picking');
                Route::patch('shipping','OrderController@shipping');
                Route::patch('finish','OrderController@finish');

            });
            Route::resource('order','OrderController');

        });

        //生成资源路由
        Route::resource('product', 'ProductController', ['except' => 'show']);

    });

    ////系统管理
    Route::group(['namespace' => 'Admin\system', 'prefix' => 'system'], function () {

        //上传
        Route::post('upload', 'FileController@upload');

        Route::post('upload_icon', 'FileController@upload_icon');

        //站点信息
        Route::get('config/edit', 'ConfigController@edit');

        //修改信息
        Route::put('config/update', 'ConfigController@update');

        //密码页面
        Route::get('password/edit', 'ConfigController@password');

        //修改密码
        Route::patch('password/update_password', 'ConfigController@update_password');

        //清除缓存页面
        Route::get('cache', 'ConfigController@cache');

        //清除缓存
        Route::get('clear_cache', 'ConfigController@clear_cache');
    });

    ////广告
    Route::group(['namespace' => 'Admin\ad', 'prefix' => 'Ad'], function () {
        //广告列表
        Route::group(['prefix' => 'ad'], function () {
            Route::get('index', 'AdController@index');
            //排序
            Route::patch('sort_order', 'AdController@sort_order');
            //多选删除
            Route::patch('destroy_checked', 'AdController@destroy_checked');

            //回收站
            Route::get('trash', 'AdController@trash');
            //单个还原
            Route::get('restore/{ad}', 'AdController@restore');
            //单个彻底删除
            Route::delete('forcedelete/{ad}', 'AdController@forcedelete');
            //多个还原
            Route::post('restore_checked', 'AdController@restore_checked');
            //多个删除
            Route::delete('forcedelete_checked', 'AdController@forcedelete_checked');
        });
        //广告添加修改资源路由
        Route::resource('ad', 'AdController', ['except' => 'show']);

        //广告分类
        Route::group(['prefix' => 'category'], function () {
            Route::get('index', 'CategoryController@index');

            Route::patch('sort_order', 'CategoryController@sort_order');
        });
        Route::resource('category', 'CategoryController');
    });



});


