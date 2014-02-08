为[业务管理系统](http://redmine.funshion.com/redmine/projects/bussiness/wiki)提供的地域占比数据查询接口。

###接口定义：

	请求地址url: $url, //post请求


####参数：
- "adpId": [physicalAdId, ......]，广告位的ID为key，以及该广告位下对应的物理广告位的ID列表为value
- "city":["cityCode1", "cityCode1", "......."], //市级城市列表,用城市代码表示（从atlas获取该值）
- 说明：单次请求，只有一类数据，如只有前贴片的物理广告位
- 示例：


	{
		"adpId":["0001"],
		"city":['000000']
	}

####返回：
- "status": 查询结果状态， 成功为："ok",失败或有异常，为："error"
- "proportion": 占比值，即0.2%。如果没有取到或者失败，值为0
- 示例:


	{
		"status": "ok",
		"proportion":{
				"cityCode1":{
					 "workday":"0.002",
					 "weekend":"0.002"
					}
				"cityCode2":{
					 "workday":"0.003",
					 "weekend":"0.003"
					}
		}
	}

####配置文件setttings.js：
- port:监听端口
- context: 应用上下文
- pc_adp: PC端的广告位数组
- mobile_adp: 移动端的广告位
- db_info: 数据库连接信息
- logger: 日志配置

####启动程序：
    node app.js


