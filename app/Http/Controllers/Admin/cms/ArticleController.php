<?php

namespace App\Http\Controllers\Admin\cms;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    function index()
    {
        return view('Admin.index.cms.article.index');
    }
}
