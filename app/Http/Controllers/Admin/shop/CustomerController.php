<?php

namespace App\Http\Controllers\Admin\shop;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\shop\Customer;

class CustomerController extends Controller
{
    function __construct()
    {
        view()->share([
            '_shop'=>'am-in',
            '_market'=>'am-in',
            '_customer'=>'am-active',
            '_title'=>'会员管理'
        ]);
    }

    public function index(Request $request)
    {
        //多条件查询
        $where=function($query) use ($request){
            //昵称查找
            if($request->has('nickname') and $request->nickname != ''){
                $search = '%' . $request->nickname . '%';
                $query->where('nickname','like',$search);
            }
            //微信id查询
            if($request->has('openid') and $request->openid != ''){
                $search = '%' . $request->openid . '%';
                $query->where('openid','like',$search);
            }
            //性别查询
            if($request->has('sex') and $request->sex != '-1'){
                $query->where('sex',$request->sex);
            }
            //注册时间查询
            if($request->has('created_at') and $request->ceated_at != ''){
                $time = explode(" ~ ", $request->input('created_at'));
                foreach ($time as $k => $v) {
                    $time["$k"] = $k == 0 ? $v . " 00:00:00" : $v . " 23:59:59";
                }
                $query->whereBetween('created_at', $time);
            }
        };
        $customers=Customer::where($where)->orderBy('created_at','desc')->paginate(10);
        return view('Admin.index.shop.customer.index')->with('customers',$customers);
    }
}
