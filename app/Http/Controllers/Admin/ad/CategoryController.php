<?php

namespace App\Http\Controllers\Admin\ad;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\ad\AdCategory as Category;

class CategoryController extends Controller
{
    function __construct()
    {
        view()->share([
            '_adcenter'=>'am-in',
            '_title'=>'广告中心',
            '_category'=>'am-active'
        ]);
    }

    public function index()
    {
        $categories=Category::orderBy('sort_order')->get();
        return view('Admin.index.ad.category.index')->with('categories',$categories);
    }

    public function sort_order(Request $request)
    {
        $category=Category::find($request->id);
        $category->sort_order=$request->sort_order;
        $category->save();

    }


    public function create()
    {
        return view('Admin.index.ad.category.create');
    }

    public function store(Request $request)
    {
        Category::create($request->all());
        return redirect('/Ad/category/index')->with('success','添加成功！');
    }

    public function edit($id)
    {
        $category=Category::find($id);
        return view('Admin.index.ad.category.edit')->with('category',$category);
    }

    public function update(Request $request,$id)
    {
        $category=Category::find($id);
        $category->update($request->all());
        return redirect('/Ad/category/index')->with('category',$category)->with('success','修改成功！');
    }

    public function destroy($id)
    {
        Category::destroy($id);
        return redirect('/Ad/category/index')->with('success','删除成功！');
    }
}
