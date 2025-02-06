import { Config } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export const config: Config = {
  name: 'default',
  title: 'Lucas - Blog',
  basePath: '/__admin',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
}
