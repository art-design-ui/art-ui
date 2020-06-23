import { addDecorator, addParameters, configure } from '@storybook/react'

const { name, repository, version } = require('../package.json')

//加载配置
addParameters({
  options: {
    name: `${name} v${version}`,
    title: 'Art-ui',
    url: repository,
    showSearchBox: false,
    showPanel: false,
    enableShortcuts: false,
    isToolshown: false,
    selectedPanel: undefined,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    showAddonPanel: false,
  },
})

const loaderFn = () => {
  const allExports = [
    require('../stories/art.stories.mdx'),
    require('../stories/contribute.stories.mdx'),
    require('../stories/changeLog.stories.mdx'),
  ]
  const req = require.context('../src/components', true, /\.mdx$/)
  req.keys().forEach(fname => allExports.push(req(fname)))
  return allExports
}
configure(loaderFn, module)
