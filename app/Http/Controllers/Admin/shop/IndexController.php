<?php

namespace App\Http\Controllers\Admin\shop;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    function __construct()
    {
        view()->share([
            '_shop'=>'am-in',
            '_index'=>'am-active'
        ]);
    }

    function index()
    {
        return view('Admin.index.shop.index');
    }
}
