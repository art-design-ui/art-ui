# Art

[![npm version](https://img.shields.io/david/dev/ant-design/ant-design?style=flat-square)]()

`Art` 是模仿 `antd` 的组件库，主要满足个人造轮子的心愿

## Feature

- 📕 详细的文档与介绍
- 🎨 使用富有特色的 Neumorphism 拟物化风格
- 📦 开箱即用的高质量 React 组件
- 🔥 使用 TypeScript 开发，提供完整的类型定义文件

## Install

```
$ npm install Art
```

## Usage

```tsx
import { EmojiPanel } from ’Art'

ReactDOM.render(
  <EmojiPanel>
    <span className="emoji-btn">点击添加表情</span>
  </EmojiPanel>,
  mountNode
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
