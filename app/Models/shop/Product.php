<?php

namespace App\Models\shop;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    //黑名单为空
    protected $guarded=[''];

    //软删除
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    //多对一的商品品牌关联关系
    function brand()
    {
        return $this->belongsTo('App\Models\shop\Brand');
    }

    //多对一的商品分类关联关系
    function category()
    {
        return $this->belongsTo('App\Models\shop\ProductCategory');
    }

    //一个商品有很多个订单
    function order_product()
    {
        return $this->hasMany('App\Models\shop\OrderProduct');
    }


    //检查当前商品是否有订单
    static function check_order($id)
    {
        $product=self::with('order_product')->find($id);
        if($product->order_product->isEmpty()) {
            return true;
        }
        return false;
    }
}
