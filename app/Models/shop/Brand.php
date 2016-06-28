<?php

namespace App\Models\shop;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{

    //黑名单为空
    protected $guarded = [''];

    function product()
    {
        return $this->hasMany('App\Models\shop\product');
    }


    //检查当前品牌有无商品
    static function check_product($id)
    {
        $brand=self::with('product')->find($id);
        if($brand->product->isEmpty()){
            return true;
        }
        return false;
    }
}
