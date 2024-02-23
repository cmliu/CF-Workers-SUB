# CF-Workers-SUB 手搓订阅

## 项目介绍
该项目是一个部署在云端的CF worker，主要用于转换订阅信息。

## 功能
1. 自建节点的订阅
2. 多机场信息的订阅，可自由添加或移除机场
3. 更新订阅配置文件
4. 将获取到的订阅信息进行base64编码并返回
5. 自适应适配Clash和SingBox订阅内容(依托后端订阅转换,感谢肥羊提供的公共订阅转换服务)
6. 向特定的Telegram bot发送请求和订阅的状态信息，并且获取IP信息。

## 使用说明

1. 首先，部署worker.js到你的云服务器中。
2. 在网址后面加上“/?token=xxoo”即可获取自建节点和机场聚合节点。
3. 要获取自建节点的订阅，请包含在MainData变量中，格式为各个节点类型的分享URL。
4. 要获取机场的订阅，请包含在urls的数组中，支持多个机场。
5. 更新你的订阅转换配置文件URL给subconfig变量。
6. BotToken和ChatID变量用于通过特定的Telegram bot发送通知。

### 示例
- 获取自建节点和机场聚合节点的订阅
```
https://your-server-url.com/?token=xxoo
```

## 注意事项
项目中，BotToken和ChatID在使用时需要先到Telegram注册并获取。其中，BotToken是telegram bot的凭证，ChatID是用来接收通知的telegram用户或者组的id。

如果在使用过程中发现有任何问题或需要帮助，欢迎随时与我们联系。

# 感谢
[mianayang](https://github.com/mianayang/myself/blob/main/cf-workers/sub/sub.js)
