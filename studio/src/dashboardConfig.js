export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e833caf00cc0401bf44c24d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9kowbdus',
                  apiId: '194c3b20-9220-4855-b508-d11c894e6a27'
                },
                {
                  buildHookId: '5e833caff6001001c7138c46',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-itjxj6sp',
                  apiId: 'a255f452-54ce-478b-ac97-3046f517f78b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaumac/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-itjxj6sp.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
