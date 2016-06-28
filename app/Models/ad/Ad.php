<?php

namespace App\Models\ad;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ad extends Model
{
    //软删除
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    //黑名单为空
    protected $guarded=[''];



    public function category()
    {
        return $this->belongsTo('App\Models\ad\AdCategory');
    }
}
