import { defineConfig } from 'vitepress';

const repo = 'https://github.com/FwbStudio/gitbookdocs';
const repositoryName = (process.env.GITHUB_REPOSITORY ?? 'FwbStudio/gitbookdocs').split('/')[1];
const isUserSite = repositoryName.toLowerCase().endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS ? (isUserSite ? '/' : `/${repositoryName}/`) : '/';

export default defineConfig({
  base,
  cleanUrls: true,
  lang: 'en-US',
  title: 'FWB Bridge Docs',
  description: 'Developer documentation for the fs_bridge FiveM framework bridge.',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/introduction/' },
      { text: 'API', link: '/bridge-functions/' },
      { text: 'Integrations', link: '/integrations/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'GitHub', link: repo }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction/' },
          { text: 'Installation', link: '/installation/' },
          {
            text: 'Configuration',
            link: '/installation/configuration/',
            items: [
              { text: 'Shared Config', link: '/installation/configuration/shared-config' },
              { text: 'Client Config', link: '/installation/configuration/client-config' },
              { text: 'Server Config', link: '/installation/configuration/server-config' }
            ]
          },
          { text: 'Common Errors', link: '/installation/common-errors' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'Changelog', link: '/changelog/' }
        ]
      },
      {
        text: 'Core API',
        items: [
          {
            text: 'Bridge Functions',
            link: '/bridge-functions/',
            items: [
              { text: 'Access Patterns', link: '/bridge-functions/access-patterns' },
              { text: 'Cache', link: '/bridge-functions/cache' },
              { text: 'Blip', link: '/bridge-functions/blip' },
              { text: 'Entity', link: '/bridge-functions/entity' },
              { text: 'Ped', link: '/bridge-functions/ped' },
              { text: 'Clothing', link: '/bridge-functions/clothing/' }
            ]
          },
          {
            text: 'Callbacks',
            link: '/callbacks/',
            items: [
              { text: 'Client', link: '/callbacks/client' },
              { text: 'Server', link: '/callbacks/server' }
            ]
          },
          {
            text: 'Vehicles',
            link: '/vehicles/',
            items: [
              { text: 'Client', link: '/vehicles/client' },
              { text: 'Server', link: '/vehicles/server' }
            ]
          },
          {
            text: 'Player',
            link: '/player/',
            items: [
              { text: 'Client', link: '/player/client' },
              { text: 'Server', link: '/player/server' }
            ]
          },
          {
            text: 'Notifications',
            link: '/notifications/',
            items: [
              { text: 'Client Notify', link: '/notifications/client' },
              { text: 'Server Notify', link: '/notifications/server' },
              { text: 'Text UI', link: '/notifications/text-ui' }
            ]
          },
          {
            text: 'Zones',
            link: '/zones/',
            items: [
              { text: 'Client API', link: '/zones/client' },
              { text: 'Points', link: '/zones/points' }
            ]
          }
        ]
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Client', link: '/client/' },
          { text: 'Server', link: '/server/' },
          {
            text: 'Utilities',
            link: '/utilities/',
            items: [
              { text: 'Math', link: '/utilities/math' },
              { text: 'String', link: '/utilities/string' },
              { text: 'Table', link: '/utilities/table' },
              { text: 'Set Clipboard', link: '/utilities/set-clipboard' },
              { text: 'Version', link: '/utilities/version' }
            ]
          },
          { text: 'Exports', link: '/exports/' },
          { text: 'Events', link: '/events/' }
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Overview', link: '/integrations/' },
          { text: 'Frameworks', link: '/integrations/frameworks' },
          { text: 'Database', link: '/integrations/database' },
          { text: 'Jobs', link: '/integrations/jobs' },
          { text: 'Inventory', link: '/integrations/inventory' },
          { text: 'Notifications', link: '/integrations/notifications' },
          { text: 'Target', link: '/integrations/target' },
          { text: 'Vehicle Keys', link: '/integrations/vehicle-keys' },
          { text: 'Vehicle Fuel', link: '/integrations/vehicle-fuel' },
          { text: 'Phone', link: '/integrations/phone' },
          { text: 'Sounds', link: '/integrations/sounds' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Examples', link: '/examples/' },
          { text: 'Task Guides', link: '/guides/' },
          {
            text: 'Manual Compatibility',
            link: '/guides/manual-compatibility/',
            items: [
              { text: 'Client Overrides', link: '/guides/manual-compatibility/client-overrides' },
              { text: 'Server Overrides', link: '/guides/manual-compatibility/server-overrides' }
            ]
          }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    socialLinks: [{ icon: 'github', link: repo }],
    editLink: {
      pattern: 'https://github.com/FwbStudio/gitbookdocs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Built with VitePress for long-term FiveM bridge documentation.',
      copyright: 'Copyright (c) FWB Studio'
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    }
  }
});


