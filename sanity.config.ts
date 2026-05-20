import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  projectId: 'wmd44msw',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('blog').title('Blog Posts'),
        S.documentTypeListItem('property').title('Properties'),
        S.documentTypeListItem('testimonial').title('Testimonials'),
      ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
