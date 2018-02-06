const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.templateKey) {
        console.log(`create page ${node.frontmatter.templateKey}`)
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
          context: {}, // additional data can be passed via context
        })
      }
    })
  })
}
exports.onCreateNode = ({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators,
}) => {
  const { frontmatter } = node
  if (frontmatter) {
    const { image, components, carimage, pictures } = frontmatter
    if (components) {
      components.sektioner.forEach(e => {
        console.log(e.component)
        if (e.image) {
          if (e.image.indexOf('/img') === 0) {
            e.image = path.relative(
              path.dirname(node.fileAbsolutePath),
              path.join(__dirname, '/static/', e.image)
            )
          }
        }
      })
    }
    if (pictures) {
      pictures.picturelist.forEach(e => {
        if (e.image) {
          if (e.image.indexOf('/img') === 0) {
            e.image = path.relative(
              path.dirname(node.fileAbsolutePath),
              path.join(__dirname, '/static/', e.image)
            )
          }
        }
      })
    }
    if (image) {
      if (image.indexOf('/img') === 0) {
        frontmatter.image = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, '/static/', image)
        )
      }
    }
    if (carimage) {
      if (carimage.indexOf('/img') === 0) {
        frontmatter.carimage = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, '/static/', carimage)
        )
      }
    }
  }
}
