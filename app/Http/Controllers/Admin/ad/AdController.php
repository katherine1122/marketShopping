<?php

namespace App\Http\Controllers\Admin\ad;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\ad\Ad;

use App\Models\ad\AdCategory as Cetegory;
class AdController extends Controller
{
    function __construct()
    {
        view()->share([
            '_adcenter'=>'am-in',
            '_title'=>'广告中心'
        ]);
    }

    function index(Request $request)
    {
        //查找
        $where = function ($query) use ($request){
            if($request->has('category_id') and $request->category_id != '-1'){
                $query->where('category_id',$request->category_id);
            }
        };
        $categories=Cetegory::orderBy('sort_order')->get();

        $ads=Ad::where($where)->orderBy('sort_order')->paginate(10);
        return view('Admin.index.ad.ad.index')->with('_list','am-active')->with('ads',$ads)
            ->with('categories',$categories);
    }

    function sort_order(Request $request)
    {
        $ad=Ad::find($request->id);
        $ad->sort_order=$request->sort_order;
        $ad->save();
    }

    function create()
    {
        $categories=Cetegory::orderBy('sort_order')->get();
        return view('Admin.index.ad.ad.create')->with('_create','am-active')->with('categories',$categories);
    }

    function store(Request $request)
    {
        //验证
        $this->validate($request, [
            'title' => 'required|unique:ads|max:255',
        ]);

        Ad::create($request->all());
        return redirect('/Ad/ad/index')->with('success','新增成功！');
    }

    function edit($id)
    {
        $categories=Cetegory::orderBy('sort_order')->get();
        $ad=Ad::find($id);
        return view('Admin.index.ad.ad.edit')->with('ad',$ad)->with('categories',$categories);
    }

    function update(Request $request,$id)
    {
        //验证
        $this->validate($request, [
            'title' => 'required',
        ]);

        $ad=Ad::find($id);
        $ad->update($request->all());
        return redirect('/Ad/ad/index')->with('ad',$ad)->with('success','修改成功！');
    }

    //回收站
    function trash()
    {
        $ads = Ad::onlyTrashed()->paginate(10);
        return view('Admin.index.ad.ad.trash')->with('ads',$ads)->with('_trash','am-active');
    }

    //单个删除进回收站
    function destroy($id)
    {
        Ad::destroy($id);
        return redirect('/Ad/ad/index')->with('success','删除的广告已放入回收站！');
    }

    //多个删除进回收站
    function destroy_checked(Request $request)
    {
        $checked_id=$request->checked_id;
        Ad::destroy($checked_id);
    }

    //单个还原
    function restore($id)
    {
        Ad::withTrashed()->where('id', $id)->restore();
        return redirect('/Ad/ad/index')->with('success','还原成功！');
    }
    //单个彻底删除
    function forcedelete($id)
    {
        Ad::withTrashed()->where('id', $id)->forceDelete();
        return redirect('/Ad/ad/trash')->with('success','删除成功！');
    }

    //多个还原
    function restore_checked(Request $request)
    {
        $checked_id=$request->checked_id;
        Ad::withTrashed()->whereIn('id',$checked_id)->restore();
    }
    //多个彻底删除
    function forcedelete_checked(Request $request)
    {
        $checked_id=$request->checked_id;
        Ad::withTrashed()->whereIn('id', $checked_id)->forceDelete();
    }



}
