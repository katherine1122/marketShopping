<?php

namespace App\Http\Controllers\Admin\shop;

use App\Models\Shop\Express;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\shop\Order;

use Carbon\Carbon;

class OrderController extends Controller
{
    public function __construct()
    {
        view()->share([
            '_shop'=>'am-in',
            '_market'=>'am-in',
           '_order'=>'am-active',
            '_title'=>'订单管理',
            'order_status'=>config('status.order_status')
        ]);
    }

    public function index(Request $request)
    {
        //多条件查找
        $where=function($query) use ($request){
            //订单号查找
            if($request->has('id') and $request->id != ''){
                $query->where('id',$request->id);
            }
            //会员编号查找
            if($request->has('customer_id') and $request->customer_id != ''){
                $query->where('customer_id',$request->customer_id);
            }
            //订单金额查找
            if($request->has('total_price') and $request->total_price != ''){
                $status=is_numeric($request->total_price) ? '=' : substr($request->total_price ,0 ,1);
                $total_price=substr($request->total_price ,0 ,1);

                switch ($status){
                    case '>':
                        $query->where('total_price','>=',$total_price);
                        break;
                    case '<':
                        $query->where('total_price','>=',$total_price);
                        break;
                    //用户直接输入的金额那么就是等于
                    default:
                        $query->where('total_price',$total_price);
                }
            }
            //订单状态查询
            if($request->has('status') and $request->status != '-1'){
                $query->where('status',$request->status);
            }
            //时间段查询

        };

        $orders=Order::where($where)->orderBy('created_at','desc')
            ->with('order_product.product','customer')->paginate(10);
        //return $orders;
        return view('Admin.index.shop.order.index')->with('orders',$orders);
    }


    function show($id)
    {
        $expresses=Express::orderBy('sort_order')->get();
        $order=Order::with('order_product.product' , 'customer','order_address','express')->find($id);
        return view('Admin.index.shop.order.show')->with('order',$order)->with('expresses',$expresses);
    }

    //配货
    function picking(Request $request)
    {
        $order=Order::find($request->id);
        $order->status=3;
        $order->picking_time=Carbon::now();
        $order->save();
    }

    //发货
    function shipping(Request $request)
    {
        $order=Order::find($request->id);
        if($request->status == 3){
            $order->status = 4;
            $order->shipping_time=Carbon::now();
        }
        $order->express_code=$request->express_code;
        $order->express_id=$request->express_id;

        $order->save();
    }

    //交易完成
    function finish(Request $request)
    {
        $order=Order::find($request->id);
        $order->status=5;
        $order->finish_time=Carbon::now();
        $order->save();
    }
}
