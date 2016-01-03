## 项目目的
通过本项目，了解并使用 Node.js，加深对 AngularJS、Bootstrap 的了解，整个搭建过程都将进行记录。
## 项目说明
此项目基于 **Node.js** 构建，列出一些使用到的东西：

 * **Node** 服务器端。
 * **AngularJS** 作为后台管理界面 MVVM 框架。
 * **Bootstrap 4** 作为后台管理界面 UI 框架。
 * **MongoDB** 作为数据库。
 * **Jasmine** 测试框架。
 * **Gulp** 自动化管理。
 * **RESTful** API接口规范。

## 使用
### MongoDB 
项目使用MongoDB作为数据库，所以需要单独进行安装，可以参看[整合MongoDB][整合MongoDB]，进行安装，安装完后，直接导入本项目，根目录下，`db`文件夹内的数据库。导入命令使用如入：
```javascript
mongorestore.exe -d restaurant <项目绝对路径+db\restaurant>
```
### 运行
先把依赖的包安装下呗。
```javascript
npm install
```
再进入项目根目录`node`运行。
```javascript
node app.js
```
运行下测试用例下也不错。
```javascript
npm test
```


## 搭建记录
 - 1、[初始化项目][初始化项目]
 - 2、[构建基础架构][构建基础架构]
 - 3、[整合MongoDB][整合MongoDB]

[初始化项目]:http://www.yuyanping.com/restaurant-management-system/init-project-step-one/ "初始化项目"
[构建基础架构]:http://www.yuyanping.com/restaurant-management-system/setting-up-server-step-two/ "构建基础架构"
[整合MongoDB]:http://www.yuyanping.com/restaurant-management-system/Integrate-MongoDB-step-three/ "整合MongoDB"