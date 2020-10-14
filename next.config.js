const withPlugins = require('next-compose-plugins')
const withMdxEnhanced = require('next-mdx-enhanced')
const checkEnv = require('@47ng/check-env').default
const nodePath = require('path')
const readingTime = require('reading-time')

checkEnv({
  required: ['NEXT_PUBLIC_DEPLOYMENT_URL'],
})

const useURL = (path) =>
  `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}${path || ''}`

module.exports = withPlugins([
  withMdxEnhanced({
    layoutPath: 'src/layouts',
    defaultLayout: true,
    fileExtensions: ['mdx'],
    remarkPlugins: [
      require('remark-slug'),
      require('remark-footnotes'),
      require('remark-code-titles'),
      //require('@fec/remark-a11y-emoji')
    ],
    rehypePlugins: [require('mdx-prism')],
    extendFrontMatter: {
      process: (mdxContent, frontMatter) => {
        const pagesDir = nodePath.resolve(__dirname, 'src/pages')
        // Somehow the __resourcePath does not start with a /:
        const path = ('/' + frontMatter.__resourcePath)
          .replace(pagesDir, '')
          .replace('.mdx', '')
          .replace('.tsx', '')
          .replace(/^\/index$/, '/')
          .replace(/\/index$/, '')
        return {
          path,
          url: useURL(path),
          readingTime: readingTime(mdxContent),
        }
      },
    },
  }),
])
