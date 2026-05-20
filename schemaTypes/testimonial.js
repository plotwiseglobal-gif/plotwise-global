export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Name is required'),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required().min(5).error('Message must be at least 5 characters'),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Optional: Job title or position',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'message',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle.length > 50 ? `${subtitle.substring(0, 50)}...` : subtitle,
      }
    },
  },
}
