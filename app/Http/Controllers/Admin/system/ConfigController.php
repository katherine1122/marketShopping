<?php

namespace App\Http\Controllers\Admin\system;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\system\System;

use Cache, Auth, Hash;
use App\User;

class ConfigController extends Controller
{
    function __construct()
    {
//        parent::__construct();

        view()->share([
            '_system_config' => 'am-in',
            '_title' => '系统管理-'
        ]);
    }

    //编辑站点信息页面
    function edit()
    {
        $system=System::find(1);
        return view('Admin.index.system.config')->with('system',$system)->with('_config' ,'am-active');
    }

    //更新站点信息操作
    function update(Request $request)
    {
        $system=System::find(1);
        $system->update($request->all());
        return redirect('/system/config/edit')->with('success','修改设置成功！');
    }

    //修改密码
    function password()
    {
        return view('Admin.index.system.password')->with('_password','am-active');
    }

    //修改密码操作
    function update_password(Request $request)
    {
        $user = Auth::user();
        if(!Hash::check($request->old_password,$user->password)){
            return back()->with('error','原始密码错误！');
        }

        $this->validate($request,[
            'old_password'=>'required',
            'password'=>'required|min:6|confirmed',
        ]);

        $user=User::find($user->id);
        $user->fill(['password'=>bcrypt($request->password)])->save();

        return back()->with('success','修改密码成功！');
    }

    //清除缓存页面
    function cache()
    {
        return view('Admin.index.system.cache')->with('_cache','am-active');
    }

    //清除缓存操作
    function clear_cache()
    {
        Cache::flush();
        return back()->with('success','清除缓存成功！');
    }
}
