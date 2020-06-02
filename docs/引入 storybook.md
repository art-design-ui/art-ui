storybook 是在开发模式下与你的应用程序一起运行的。它可以帮助你构建 UI 组件，并与应用程序的业务逻辑和上下文隔离开来。

该工具使用户能够独立创建组件，并在隔离的开发环境中以交互方式展示组件。它在主应用程序之外运行，因此用户可以独立开发 UI 组件，而无需担心应用程序特定的依赖关系和要求。

那么如何在 react 项目中添加 storybook 呢？

下面我们一步一步来搭建项目环境。

第一步：创建 react 项目这里使用 create-react-app 创建项目。

npx create-react-app storybook-demo

# 或者使用全局方式

npm i create-react-app -g

create-react-app storybook-demo 很简单，可以参考官方教程。

第二步：安装 storybook 创建好了 react 项目之后，手动安装 storybook 。

npm i --save-dev @storybook/react 第三步：配置 npm 脚本为了方便在命令行启动 storybook， 我们来配置一下 npm 脚本。

打开项目根目录下的 package.json 文件，在 scripts 属性中添加命令：

{ "scripts": { "storybook": "start-storybook -p 9001 -c .storybook" } } 这里的 -p 9001 是指在 9001 端口启动服务，可自行修改，-c .storybook 是指配置文件的目录为 .storybook。接下来，我们就需要创建配置文件。

第四步：创建配置文件对于最基本的 storybook 配置，只需要告诉 storybook 在哪里可以找到 stories 即可。

为此，我们在项目根目录下创建目录 .storybook，并在该目录下创建 config.js 文件，其内容如下：

// .storybook/config.js

import { configure } from '@storybook/react';

function loadStories() { require('../stories/index.js'); // You can require as many stories as you need. }

configure(loadStories, module); 从配置文件中可以看到，storybook 会加载 ../stories/index.js 下的文件。

当然，你可以加载任何其他位置的文件。

批量引入 stories 上面只是搭建环境时的实例，引入了单个 story。在正式开发环境中，肯定会有很多 stories 需要引入，如果还这样一个一个文件引入，那真是太繁琐了。

好在 Webpack 提供了 require.context 方法，它可以帮助我们实现文件的批量导入。点击查看 require.context 详情。

我们可以修改一下 config.js 文件：

import { configure } from '@storybook/react';

const req = require.context('../stories', true, /.stories.js\$/);

function loadStories() { req.keys().forEach(filename => req(filename)); }

configure(loadStories, module); 安装上面的代码修改之后，我们就能批量导入根目录下 stories 目录中的所有 .stories.js 为后缀的文件了。

第五步：创建 stories 接下来，我们需要创建 stories 了。接第四步，我们在项目根目录下创建 stories 目录，并在该目录下创建 index.js 文件，其内容如下：

// stories/index.js

import React from 'react'; import { storiesOf } from '@storybook/react'; import { Button } from '@storybook/react/demo';

storiesOf('Button', module) .add('with text', () => ( <Button>Hello Button</Button> )) .add('with some emoji', () => ( <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button> )); 第六步：启动 storybook 到这一步，所有的准备工作已经做好了，只需要启动 storybook 即可：

npm run storybook 服务启动之后，会自动打开浏览器：

storybook 启动页面 storybook 启动页面

至此，你可以随时更改组件并编写 story 了。并且你可以立即看到 Storybook 的变化，因为它使用了 Webpack 的热模块重载。
