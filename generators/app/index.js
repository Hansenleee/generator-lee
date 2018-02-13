'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  /**
   * 通过内置函数与用户交流，并将结果至于this.props下
   * @return {Promise} promise实例
   */
  prompting() {
    this.log(yosay('Welcome to the ' + chalk.red('generator-lee') + ' generator!'));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = Object.assign({}, this.props, props);
    });
  }

  /**
   * 文件复制移动
   * @param {String} template - 模板文件
   * @param {String} dest - 目标文件
   * @param {Object} props - 配置
   * @return {Any} 返回
   */
  _copyFile(template, dest, props = {}) {
    const file = this.templatePath(template);
    return (
      this.fs.exists(file) && this.fs.copyTpl(file, this.destinationPath(dest), props)
    );
  }

  /**
   * 将模板写入目标文件夹内
   * 文件夹内需要存在文件才能赋值过去
   */
  writing() {
    // 正常的文件，不包含.xxx
    const files = [
      'package.json',
      'README.md',
      '.eslintignore',
      '.eslintrc',
      '.gitignore',
      'src/index.js',
      'build/index.js',
      'config/index.js'
    ];

    // 常规文件复制
    files.forEach(file => this._copyFile(file, file, this.props));
  }

  /**
   * 自动安装依赖
   */
  install() {
    // This.installDependencies();
  }

  /**
   * 结束
   */
  end() {
    this.log(yosay('generator has already install'));
  }
};
