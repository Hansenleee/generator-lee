# generator-lee
自己搭建的基于[generator-generator](https://github.com/yeoman/generator-generator)的脚手架模板

## usage
```
  npm install -g yo
  npm install -g generator-generator
  ...
  npm link
```
[yeoman](http://yeoman.io/learning/)是个生成脚手架的工具，不需要我们自己在开发项目时一个个去复制原有的项目，再去删除...

## 目录结构
```
├── __test__                 // 测试文件夹
├── generators
│   ├── app
│   │   ├── template         // 模板文件夹
│   │   ├── index.js         // 核心处理js
├── package.json             // 依赖的配置信息
```
代码逻辑都放在./generators/app/index.js中，有内置的Generator类可以继承。
最后在项目根目录下运行`npm link`进行软连接。大功告成后在新的目录下
```
  yo [你的脚手架名称]
```
就可以生成template模板下的项目。注意：如果你的架手架项目是`generator-test`，运行时只需输入`yo test`即可
