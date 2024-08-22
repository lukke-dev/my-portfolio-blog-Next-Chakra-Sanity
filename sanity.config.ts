import { Config } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { AdminNavbar } from '@src/components'
import { schemaTypes } from './sanity/schemas'

export const config: Config = {
  name: 'default',
  title: 'LS shop',
  basePath: '/__admin',

  projectId: 'psk4jylf',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: AdminNavbar,
    },
  },
}
