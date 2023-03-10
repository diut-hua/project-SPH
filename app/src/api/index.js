//统一管理项目的接口模块
//引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./request";
import mockRequests from './mockAjax';

//三级菜单的请求地址  /api/product/getBaseCategoryList   GET 没有任何参数

//对外暴露一个函数，只要外部调用这个函数，就向服务器发起Ajax请求、获取咱们的三级菜单数据。当前咱们这个函数只需要把服务器返回的结果返回即可
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
//切记：当前函数执行需要把服务器返回结果返回

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor
export const reqGetFloorList = () => mockRequests.get('/floor')

//获取搜索模块数据 地址：/api/list  请求方式：post  参数：需要带参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口(获取搜索模块的数据)，给服务器传递的参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

//获取产品详情信息的接口 URL：/api/item/{ skuId }  请求方式：GET  
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });

//将产品添加到购物车中（获取更新某一个产品的个数）
///api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });

//获取购物车列表数据的接口
//URL：/api/cart/cartList
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });

//删除购物车产品的接口
//URL: /api/cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });

//修改商品选中的状态
//URL: /api/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });

//获取验证码
//URL:/api/user/passport/sendCode/{phone} method: get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`, method:'get'});

//用户注册
//URL: /api/user/passport/register method:post  phone code password
export const reqUserRegister = (data)=>requests({url:'/user/passport/register', method:'post', data});