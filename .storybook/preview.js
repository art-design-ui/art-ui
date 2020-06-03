import '../src/styles/index.scss'
import { create } from '@storybook/theming'
import { addParameters, configure } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    PreviewSource: 'open',
  },
  options: {
    name: 'AUI',
    showPanel: true,
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
})
const loaderFn = () => {
  const allExports = [
    require('../src/stories/art.stories.mdx'),
    require('../src/stories/contribute.stories.mdx'),
    require('../src/stories/changeLog.stories.mdx'),
  ]
  const req = require.context('../src/components', true, /\.stories\.mdx$/)
  req.keys().forEach(fname => allExports.push(req(fname)))
  return allExports
}
configure(loaderFn, module)
