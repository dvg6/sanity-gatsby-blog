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
                  buildHookId: '5e9743cfe61c8002452803e9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fzh1hmec',
                  apiId: 'cdcbf148-484b-4e2c-b357-37d2d0dc95ba'
                },
                {
                  buildHookId: '5e9743d052bf0f01df7a092a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pm82xak6',
                  apiId: 'bc219e9c-26f7-4324-a616-6be26f2db852'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dvg6/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pm82xak6.netlify.app', category: 'apps' }
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
