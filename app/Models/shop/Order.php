<?php

namespace App\Models\shop;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $guarded=[''];

    //订单属于会员
    function customer()
    {
        return $this->belongsTo('App\Models\shop\Customer');
    }

    //订单有很多个订单产品
    function order_product()
    {
        return $this->hasMany('App\Models\shop\OrderProduct');
    }

    //订单属于快递
    function express()
    {
        return $this->belongsTo('App\Models\shop\Express');
    }

    //订单
    function order_address()
    {
        return $this->hasOne('App\Models\shop\OrderAddress');
    }

}
