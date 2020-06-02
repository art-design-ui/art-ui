# Aui

[![npm version](https://img.shields.io/npm/v/@forchange/aui.svg)](https://www.npmjs.com/package/@forchange/aui)

`aui` 是基于 `antd` 封装的业务组件库，主要用于 `forchange` 内部中后台产品。

## Feature

- 提炼内部中后台产品的通用业务组件。
- 使用 TypeScript 保证代码质量。
- 使用 Jest + Enzyme 保证组件质量。

## Install

```
$ npm install @forchange/aui
```

## Usage

```tsx
import { EmojiPanel } from '@forchange/aui'

ReactDOM.render(
  <EmojiPanel>
    <span className="emoji-btn">点击添加表情</span>
  </EmojiPanel>,
  mountNode,
)
```

## Test

#### 所有用例

```
yarn test
```

#### 指定目录

```
yarn test components/emoji-panel
```

#### 更新快照

```
yarn test components/emoji-panel --updateSnapshot
```

## Issue

https://git.forchange.cn/newbility/aui/issues