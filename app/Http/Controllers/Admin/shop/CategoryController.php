<?php

namespace App\Http\Controllers\Admin\shop;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;


use App\Models\shop\ProductCategory as Category;

class CategoryController extends Controller
{
    function __construct()
    {
        view()->share([
           '_shop'=>'am-in',
            '_productCategory'=>'am-active',
            '_title'=>'商品分类'
        ]);
    }

    //首页显示
    function index()
    {
        $categories=Category::get_categories();
       // return $categories;
        return view('Admin.index.shop.category.index')->with('categories',$categories);
    }

    //排序
    function sort_order(Request $request)
    {
        $category=Category::find($request->id);
        $category->sort_order = $request->sort_order;
        Category::clear();
        $category->save();
    }

    //显示
    function is_something(Request $request)
    {
        $attr=$request->attr;
        $category=Category::find($request->id);
        $value=$category->$attr ? false : true;
        $category->$attr=$value;
        Category::clear();
        $category->save();
    }

    //新增页面
    function create()
    {
        $categories=Category::get_categories();
        return view('Admin.index.shop.category.create')->with('categories',$categories);
    }

    //新增操作
    function store(Request $request)
    {
        Category::create($request->all());
        //return $request->parent_id;
        Category::clear();
        return redirect(route('shop.category.index'))->with('success','新增类目成功！');
    }

    //编辑页面
    function edit($id)
    {
        $category=Category::find($id);

        $categories=Category::where('parent_id',0)->get();

        return view('Admin.index.shop.category.edit')->with('category',$category)->with('categories',$categories);
    }

    //编辑操作
    function update(Request $request,$id)
    {
        $category=Category::find($id);
        $category->update($request->all());
        Category::clear();
        return redirect('/shop/category/index')->with('category',$category)->with('success','修改成功！');
    }

    //删除
    function destroy($id)
    {


        //检查有无商品
        if(!Category::check_product($id)){
            return back()->with('error','分类中有商品无法删除！');
        };

//        检查有无二级分类
        if(!Category::check_children($id)){
            return back()->with('error','分类中有二级分类无法删除！');
        }

        Category::destroy($id);
        Category::clear();
        return redirect('/shop/category/index')->with('success','删除成功！');
    }
}
