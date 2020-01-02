# vue-admin-elementUI

## 预览

访问地址：https://jaxbbll.github.io/vue-admin-elementUI/#/login

![image](https://github.com/JaxBBLL/vue-admin-elementUI/raw/master/preview/1.gif)

## 安装运行

请使用 **yarn** 安装依赖包，yarn.lock 已锁定版本，使用 `npm install` 可能导致依赖包版本不一致

```bash
# 安装yarn
npm i -g yarn
# 安装依赖
yarn
# 开发运行
npm run dev
```

## 项目打包

```bash
# 测试环境打包
npm run qa
# 预发环境打包
npm run uat
# 正式环境打包
npm run prod
```

## 目录结构

本项目通过 vue-cli@4 脚手架生成，根据业务有些修改，下面是整个项目的目录结构。

```bash
├── dist                              // 构建打包生成部署文件目录
├── public                            // 公共不打包资源
├── src                               // 源代码目录
│   ├── assets                        // 静态资源目录
│   ├── api                           // 接口api目录
│   ├── common                        // 全局公共文件
│   │      ├── address.js             // 地址编码文件
│   │      ├── http.js                // 全局封装ajax
│   │      ├── constant.js            // 全局常量
│   │      ├── dictionary.json        // 公共枚举类型
│   │      ├── utils.js               // 工具函数
│   ├── components                    // 组件目录
│   │      ├── global                 // 全局公共组件目录
│   │      ├── layout                 // 布局组件目录
│   ├── plugins                       // vue插件目录
│   │      ├── custom.js              // 自定义插件
│   │      ├── echarts.js             // 图表插件
│   │      ├── editor.js              // 富文本插件
│   │      ├── element-ui.js          // element-ui库
│   │      ├── global-components.js   // 全局公共组件
│   │      ├── index.js               // 插件汇总
│   ├── views                         // 页面视图目录
│   ├── router                        // 路由目录
│   ├── store                         // 全局store管理目录
│   ├── App.vue                       // 根组件
│   │── main.js                       // 入口文件
├── .browserslistrc                   // js和css编译时目标浏览器
├── .env.dev                          // 开发环境变量
├── .env.prod                         // 线上环境变量
├── .env.qa                           // 测试环境变量
├── .env.uat                          // 验收（预发）环境变量
├── .eslintrc.js                      // eslint配置项
├── .gitignore                        // git忽略项
├── .postcssrc.js                     // postcss配置
├── .prettierrc.json                  // prettier插件格式化配置
├── babel.config.js                   // babel-loader配置
├── package.json                      // package.json
├── README.MD                         // 项目文档说明
├── vue.config.js                     // vue项目配置项
└── yarn.lock                         // node_modules包版本锁定文件
```

## 关于路由

- 可以根据后端接口动态获取路由，以做菜单权限。
- 菜单根据路由动态渲染，可以多级子菜单。
- noCache 属性表示组件是否要缓存，一般列表页需要缓存，详情页不缓存。
- 页面路由组件必须指定 name 属性，且和路由配置文件的 name 值一致。理由：缓存组件需要
- 如路由采用params 方式，需将参数放在路径最后面，如：/user/detail/:id
