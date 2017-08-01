# bilibili-moblie
# 域名和端口
 默认（url）：https://api.bilibili.com

## 相关外部api接口
|接口类型|接口地址|参数说明|
|-|-|-|
|首页|url/x/web-interface/dynamic/index?jsonp=jsonp||
|轮播图|url/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695||
|首页热门|url/index/ranking-3day.json||
|详情视频页|url/recommendnew,12536105|传入aid|
|首页|url/playurl?callback=callbackfunction&aid=12462453|传入aid|

## 路由
|一级路由|二级路由|参数|说明|
|-|-|-|-|
|index|||首页|
|channel|||分类|
|Rank||aid|排行页|
|zhibo|||直播页|
|chanel|||频道页|
|mine|||用户页|
|mine|user||用户|
|mine|fav||收藏|
|mine|history||历史|
|mine|myPost||投递|
|detail||aid|详情页|
|search|||搜索页|

## 数据库接口
默认(url):http://localhost:666


|后端路由|参数|路由说明|
|-|-|-|
|register|uname，password|注册|
|login|uname，password|登录|
|collect|uname，aid|存入收藏|
|collectlist|uname|显示收藏|
|upload-single|uname|上传头像|
|upload-touxiang|uname，imgurl|头像写入|
|touxiang|uname|头像显示|
|detail|aid|详情信息|
|review|-|评论|
|search|target,page|标题搜索以及分页加载|
