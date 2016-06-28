<?php

namespace App\Models\system;

use Illuminate\Database\Eloquent\Model;

class System extends Model
{
    //黑名单为空
    protected $guarded = [''];

    public $timestamps = false;
}
