import { SchemaTypeDefinition, defineType, defineArrayMember } from 'sanity'

export const PostContentDefinition = defineType({
  name: 'postContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
  ],
})

export const PostSchema: SchemaTypeDefinition = {
  name: 'post',
  type: 'document',
  fields: [
    {
      name: 'name_en',
      type: 'string',
    },
    {
      name: 'name_pt',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name_en',
        maxLength: 100,
        unique: true,
      },
    },
    {
      name: 'content_en',
      type: 'postContent',
    },
    {
      name: 'content_pt',
      type: 'postContent',
    },
    {
      name: 'category',
      title: 'Post Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'minutes_to_read',
      type: 'number',
    },
  ],
}
