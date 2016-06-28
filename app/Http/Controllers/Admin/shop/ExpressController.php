<?php

namespace App\Http\Controllers\Admin\shop;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\shop\Express;

class ExpressController extends Controller
{
    function __construct()
    {
        view()->share([
        '_shop'=>'am-in',
        '_market'=>'am-in',
        '_express'=>'am-active',
        '_title'=>'快递运费'
    ]);
    }

    function index()
    {
        $expresses = Express::orderBy('sort_order')->paginate(10);
        return view('Admin.index.shop.express.index')->with('expresses',$expresses);
    }

    function is_something(Request $request)
    {
        $attr=$request->attr;
        $express=Express::find($request->id);
        $value=$express->$attr ? false : true;
        $express->$attr = $value;
        $express->save();
    }

    function sort_order(Request $request)
    {
        $express=Express::find($request->id);
        $express->sort_order=$request->sort_order;
        $express->save();
    }

    function create()
    {
        return view('Admin.index.shop.express.create');
    }

    function store(Request $request)
    {
        //验证
        $this->validate($request, [
            'name' => 'required|unique:expresses|max:255',
            'code' => 'required|unique:expresses|max:255',
            'url' => 'url'
        ]);
        Express::create($request->all());
        return redirect('/shop/product/express')->with('success','添加快递成功！');
    }

    function edit($id)
    {
        $express=Express::find($id);
        return view('Admin.index.shop.express.edit')->with('express',$express);
    }

    function update(Request $request,$id)
    {
        //验证
        $this->validate($request, [
            'url' => 'url'
        ]);

        $express=Express::find($id);
        $express->update($request->all());
        return redirect('/shop/product/express')->with('express',$express)->with('success','修改成功！');
    }

    function destroy($id)
    {
        Express::destroy($id);
        return redirect('/shop/product/express')->with('success','删除成功！');
    }
}
