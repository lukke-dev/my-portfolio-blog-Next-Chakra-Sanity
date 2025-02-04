import { SchemaTypeDefinition } from 'sanity'

export const CategorySchema: SchemaTypeDefinition = {
  name: 'category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 50,
        unique: true,
      },
    },
  ],
}
