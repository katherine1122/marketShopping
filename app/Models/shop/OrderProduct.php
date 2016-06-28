<?php

namespace App\Models\shop;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $guarded=[''];

    public $timestamps=false;

    function order()
    {
        return $this->belongsTo('App\Models\shop\Order');
    }

    function product()
    {
        return $this->belongsTo('App\Models\shop\Product');
    }
}
