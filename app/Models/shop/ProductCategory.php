<?php

namespace App\Models\shop;

use Illuminate\Database\Eloquent\Model;
use Cache;

class ProductCategory extends Model
{
    //黑名单为空
    protected $guarded = [''];

    //二级分类
    public function children()
    {
        return $this->hasMany('App\Models\shop\ProductCategory', 'parent_id', 'id');
    }

    //清除缓存
    static function clear()
    {
        Cache::forget('shop_category_categories');
    }

    //生成缓存
    static function get_categories()
    {
        if(!Cache::has('shop_category_categories')){
            $categories=self::with(['children'=>function($query){
                $query->orderBy('sort_order')->get();
            }])->where('parent_id',0)->orderBy('sort_order')->get();

            Cache::forever('shop_category_categories',$categories);
        }
        return Cache::get('shop_category_categories');
    }

    //筛选分类时屏蔽没有商品的分类
    static function filter_categories()
    {
        $categories = self::has('children.products')->with(['children' => function ($query) {
            $query->has('products');
        }])->get();
        return $categories;
    }

    function product()
    {
        return $this->hasMany('App\Models\shop\Product', 'category_id', 'id');
    }

    static function check_product($id)
    {
        $category=self::with('product')->find($id);
        if($category->product->isEmpty()){
            return true;
        }
        return false;
    }

    static function check_children($id)
    {
        $category=self::with('children')->find($id);
        if($category->children->isEmpty()){
            return true;
        }
        return false;
    }


}
