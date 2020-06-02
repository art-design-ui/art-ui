# Contribute

`aui` 严格遵循 [Ant Design](https://ant.design/docs/spec/proximity-cn) 开发原则。

为了保证代码及组件质量，减少沟通成本，在任何形式的参与前，请先阅读以下内容：

## Standard

- 开发规范遵守 [文档](https://prod.pandateacher.com/newbility/fe-doc/standrad/)，
- 文件目录保持 `现有结构` 即可
- 代码必须得有严格的 `类型申明`
- 使用 Jest + Enzyme，编写 `测试用例`
- 在 `/stories` 下添加 `组件文档`

## Flow

开发过程务必遵守如下工作流

`new issue` -> `create branch` -> `create mr` -> `develop` -> `test` -> `doc` -> `review` -> `merge` -> `publish`

## Dev

在本地开发时，可以在 `Demo` 目录下引入并调试组件，`demo` 文件使用 `parcel` 构建，快速开始

```
$ npm run demo
```

## Test

编写完测试用例后，使用以下命令进行测试，确保测试质量：

```
$ npm run test
```

## Doc

文档系统采用 `storybook` 进行开发，大体分为两部分，`doc` 和 `demo`，文档编写完成后，可通过以下命令快速预览：

```
$ npm run site
```

## Other

其他问题，[在此处讨论](https://git.forchange.cn/newbility/aui/issues)
