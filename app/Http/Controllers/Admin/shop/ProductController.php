<?php

namespace App\Http\Controllers\Admin\shop;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\shop\Product;
use App\Models\shop\Brand;
use App\Models\shop\ProductCategory as Category;

class ProductController extends Controller
{
    //

    function __construct()
    {
        view()->share([
           '_shop'=>'am-in',
            '_title'=>'商品列表'
        ]);
    }

    private function attributes()
    {
        view()->share([
            'brands'=>Brand::orderBy('sort_order')->get(),
            //'filter_categories'=>Category::filter_categories()
            'categories'=>Category::get_categories()

        ]);
    }

    function index(Request $request)
    {
        //多条件搜索-名称
        $where = function ($query) use ($request) {
            if($request->has('name') and $request->name != ''){
                $search = '%' . $request->name . '%';
                $query->where('name','like',$search);
            }
        //分类搜索
            if($request->has('category_id') and $request->category_id != '-1'){
                $query->where('category_id', $request->category_id);
            }
        //品牌搜索
            if($request->has('brand_id') and $request->brand_id != '-1'){
                $query->where('brand_id',$request->brand_id);
            }
        //上架状态搜索
            if($request->has('is_onsale') and $request->is_onsale != '-1'){
                $query->where('is_onsale',$request->is_onsale);
            }
        //置顶搜素
            if($request->has('is_top')){
                $query->where('is_top',true);
            }
         //推荐搜索
            if($request->has('is_recommend')){
                $query->where('is_recommend',true);
            }
        //热销搜索
            if($request->has('is_hot')){
                $query->where('is_hot',true);
            }
        //新品搜索
            if($request->has('is_new')){
                $query->where('is_new',true);
            }

        //时间搜索
            if($request->has('created_at') and $request->created_at != ''){
                $time=explode(" ~ " , $request->input('created_at'));
                foreach ($time as $k => $v) {
                    $time["$k"] = $k == 0 ? $v . " 00:00:00" : $v . " 23:59:59";
                }
                $query->whereBetween('created_at', $time);
            }
        };

        $products=Product::where($where)->with('brand')->with('category')->orderBy('created_at','desc')
            ->orderBy('is_top','desc')->paginate(10);

        $this->attributes();
        return view('Admin.index.shop.product.index')->with('products',$products)->with('_product','am-active');
    }

    //是否
    function is_something(Request $request)
    {
        $attr=$request->attr;
        $product=Product::find($request->id);
        $value=$product->$attr ? false : true;
        $product->$attr = $value;
        $product->save();
    }

    //库存
    function stock(Request $request)
    {
        $product=Product::find($request->id);
        $product->stock=$request->stock;
        $product->save();
    }

    //新增页面
    function create()
    {
        $this->attributes();
        return view('Admin.index.shop.product.create')->with('_create','am-active');
    }

    //新增操作
    function store(Request $request)
    {
        //验证
        $this->validate($request, [
            'name' => 'required|unique:products|max:255',
        ]);

        Product::create($request->all());
        return redirect('/shop/product/index')->with('success','新增商品成功！');

    }

    //编辑页面
    function edit($id)
    {
        $this->attributes();
        $product=Product::find($id);
        return view('Admin.index.shop.product.edit')->with('product',$product);
    }

    //编辑操作
    function update(Request $request,$id)
    {
        $data = $request->except(['stock','brand_id','file','imgs']);
        $data['stock'] = $request->stock == '无限' ? '-1' : $request->stock;
        $data['brand_id']=$request->brand_id == '-1' ? '' : $request->brand_id;


        $product=Product::find($id);
        $product->update($data);
        return redirect('/shop/product/index')->with('success','修改商品成功！');
    }

    //删除单项(软删除)
    function destroy($id)
    {
        //检查能否删除
        if(!Product::check_order($id)){
            return back()->with('error','当前商品拥有对应的订单，无法删除!');
        };

        Product::destroy($id);
        return back()->with('success','被删商品已进入回收站！');
    }
    //多选删除
    function destroy_checked(Request $request)
    {
        $checked_id=$request->checked_id;
        //$delete_id[]=$id;
        Product::destroy($checked_id);
    }


    //回收站
    function trash()
    {
        $products=Product::with('brand')->with('category')->onlyTrashed()->paginate(10);
        return view('Admin.index.shop.product.trash')->with('products',$products)->with('_trash','am-active');
    }

    //单个还原
    function restore($id)
    {
        Product::withTrashed()->where('id',$id)->restore();
        return redirect('/shop/product/index')->with('success','还原商品成功！');
    }

    //多项还原
    function restore_checked(Request $request)
    {
        $checked_id=$request->checked_id;
        Product::withTrashed()->whereIn('id',$checked_id)->restore();
    }

    //彻底删除单个
    function force_delete($id)
    {
        Product::withTrashed()->where('id',$id)->forceDelete();
        return back()->with('success','从回收站删除成功！');
    }

    //彻底删除多项
    function force_delete_checked(Request $request)
    {
        $checked_id = $request->checked_id;
        Product::withTrashed()->whereIn('id',$checked_id)->forceDelete();
    }

//     update products set deleted_at = null where id in （8,9,00）
}
