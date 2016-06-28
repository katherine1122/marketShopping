<?php

//是否...
function is_something($attr, $module)
{
    return $module->$attr ? '<span class="am-icon-check is_something" data-attr="' . $attr . '"></span>' : '<span class="am-icon-close is_something" data-attr="' . $attr . '"></span>';
}

//订单状态
function order_status($status)
{
    $info=config('status.order_status');
    return $info["$status"];
}



/**
 * 1=> '下单 pay',       //待支付
 * 2=> '付款 shipping',       //待发货
 * 3=> '配货 shipping',
 * 4=> '出库 receiving',       //待收货
 * 5=> '交易成功 finish',    //已完成
 */
//订单边框颜色
function order_color($status)
{
    switch($status){
        case '1':
            return 'uc-order-item-pay';   //待付款
        break;
        case '2':
            return 'uc-order-item-shipping';  //待发货
        break;
        case '3':
            return 'uc-order-item-shipping';   //待发货
        break;
        case '4':
            return 'uc-order-item-receving';   //待收货
        break;
        case '5':
            return 'uc-order-item-finish';    //交易成功
        break;
    }
}



