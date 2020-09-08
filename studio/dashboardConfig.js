export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f56e25a080cf0984062f1b8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-29egfgn8',
                  apiId: 'a36ed920-73bd-4387-910b-ae66bead84d5'
                },
                {
                  buildHookId: '5f56e25acbf55b0a133a2405',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5pdaibtt',
                  apiId: '7ab377f0-caab-42ad-9e36-fa77eb52b2ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/technosheen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5pdaibtt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
