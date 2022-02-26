// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
module.exports = function (api) {
  api.loadSource(async actions => {
    await axios.get('http://cyrusjreightler.ddev.site/jsonapi/node/page').then((response)=>{
      const collection = actions.addCollection({
        typeName: 'CyrusjPages'
      })
      
      for (const post of response.data.data) {
        console.log(response.data.data);
        collection.addNode({
          id: post.id,
          title: post.attributes.title
        })
        api.createPages(({ createPage }) => {
          createPage({
            path: "/pages/" + post.attributes.title,
            component:'src/templates/page.vue',
            queryVariables:{
              id:post.id,
              title:post.attributes.title
            }
          })
        })
      }

    })

    
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
