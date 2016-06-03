<?php

namespace App\Http\Controllers\Admin\shop;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\shop\Brand;

class BrandController extends Controller
{
    function index()
    {
        $brands = Brand::orderBy('sort_order','asc')->paginate(4);

        return view('Admin.index.shop.brand')->with('brands',$brands);
    }

    function create()
    {
        return view('Admin.index.shop.create');
    }

    function store(Request $request)
    {
        Brand::create($request->all());
        return redirect('/shop/brand');
    }

    function edit($id)
    {
        $brand=Brand::find($id);
        return view('Admin.index.shop.edit')->with('brand',$brand);
    }

    function update(Request $request,$id)
    {
        $brand=Brand::find($id);
        Brand::update($request->all());
        return redirect('/shop/brand')->with('brand',$brand);
    }


}
