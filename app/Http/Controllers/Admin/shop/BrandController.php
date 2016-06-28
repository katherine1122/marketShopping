<?php

namespace App\Http\Controllers\Admin\shop;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\shop\Brand;

class BrandController extends Controller
{
    function __construct()
    {
        view()->share([
            '_shop' => 'am-in',
            '_brand' => 'am-active',
            '_title' => '商品管理-'
        ]);
    }


    //首页
    function index(Request $request)
    {
        //查找搜索
        $where = function ($query) use ($request) {
            if ($request->has('keyword') and $request->keyword != '') {
                $search = "%" . $request->keyword . "%";
                $query->where('name', 'like', $search);
            }
        };


        $brands = Brand::where($where)->orderBy('sort_order','asc')->paginate(10);
        return view('Admin.index.shop.brand.index')->with('brands',$brands);
    }

    //排序
    function sort_order(Request $request)
    {
        $brand=Brand::find($request->id);
        $brand->sort_order= $request->sort_order;
        $brand->save();
    }

    //显示
    function is_something(Request $request)
    {
        $attr = $request->attr;
        $brand = Brand::find($request->id);
        $value = $brand->$attr ? false : true;
        $brand->$attr = $value;
        $brand->save();
    }

    //删除
    function destroy($id)
    {
        //检测品牌有无商品
        if(!Brand::check_product($id)){
            return back()->with('error','您所删除的品牌有商品无法删除！');
        }

        Brand::destroy($id);
        return redirect('/shop/brand/index')->with('success','删除品牌成功！');
    }

    //新增页面
    function create()
    {

        return view('Admin.index.shop.brand.create');
    }

    //新增操作
    function store(Request $request)
    {
        //验证
        $this->validate($request, [
            'name' => 'required|unique:brands|max:255',
            'url' => 'url',
        ]);

        Brand::create($request->all());
        return redirect('/shop/brand/index')->with('success','新增品牌成功！');
    }

    //编辑页面
    function edit($id)
    {
        $brand=Brand::find($id);
        return view('Admin.index.shop.brand.edit')->with('brand',$brand);
    }

    //更新操作
    function update(Request $request,$id)
    {
        //验证
        $this->validate($request, [
            'name' => 'required|max:255',
            'url' => 'url',
        ]);

        $brand=Brand::find($id);
        $brand->update($request->all());
        return redirect('/shop/brand/index')->with('brand',$brand)->with('success','修改品牌成功！');
    }


}
