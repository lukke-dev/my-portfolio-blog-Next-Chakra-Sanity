import { Config } from 'sanity'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { structureTool } from 'sanity/structure'

export const config: Config = {
  name: 'default',
  title: 'Lucas - Blog',
  basePath: '/__admin',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
}
