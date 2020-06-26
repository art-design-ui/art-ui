# Art Design

`Art` 严格遵循 [Ant Design](https://ant.design/docs/spec/proximity-cn) 开发原则。

> 为了保证代码及组件质量，减少沟通成本，在任何形式的参与前，请先阅读以下内容：


## 脚手架功能

- [x] 支持umd cjs es 模块引入
- [x] 支持ts,导出类型声明
- [x] 支持storybook文档
- [x] 支持commit规范检测
- [x] 支持预提交检查代码规范eslint stylelint
- [x] 支持autoprefixer
- [x] 支持单元测试
- [x] 支持自动化构建、自动生成ChangeLog
- [x] 支持主题色自定义
- [x] 支持按需加载


 
## 技术栈

> 技术栈严格要求以下形式，注意切不可用`React Class`来书写组件

- 🌈React-Hooks
- 🛡Typescript
- 🎨Less
- 📦Jest



## 设计稿

[art组件设计稿](https://lanhuapp.com/web/#/item/project/board?type=share_mark&pid=3050eb52-9397-408a-82ea-f94190b9c2d0&activeSectionId=&teamId=9df6d36b-f656-4cc3-acf9-a333437de2cc&param=094b1ba8-e42b-4a0c-ade5-562661aea83e)


## 工作流

多人协作采用[git -flow工作流](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)


### 提交规范

```javascript
yarn run gc
```

- feat：新功能（feature）`
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动


## dev

在本地开发时,查看文档

```
$ yarn run docs
```

显示自己的组件demo,执行以下命令，再手动引入即可

```
yarn run dev
```


## Test

编写完测试用例后，使用以下命令进行测试，确保测试质量：

```
$ npm run test
```

## Doc

文档系统采用 `storybook` 进行开发，大体分为两部分，`doc` 和 `demo`，文档编写完成后，可通过以下命令快速预览：

```
$ yarn run docs
```

## API文档

> 组件声明Props注释每个类型，`react-docgen-typescript-loader`插件会自动读取

```typescript
interface BaseButtonProps {
  className?: string
  /** 设置 Button 的禁用 */
  disabled?: boolean
  /** 设置 Button 的尺寸 */
  size?: ButtonSize
  /** 设置 Button 的类型 */
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}
```

### 初始默认值

> 通过类的defaultProps属性初始化默认值

```typescript
Button.defaultProps = {
  disabled: false,
  btnType: 'default',
}
```

### 关于自动化部署

>自动化部署使用 [travis](https://travis-ci.com/)

自动化部署监听 master 分支, 当 master 分支 commit 后执行构建脚本

关于如何配置自动化部署脚本


## 标准发布流程

- 版本更新
- 生成 CHANGELOG
- 推送至 git 仓库
- 组件库打包
- 发布至 npm
- 打 tag 并推送至 git



