import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Kategorijas nosaukums',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL slug',
      admin: {
        description: 'Unikāls URL identifikators (piem. logu-sistemas)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Apraksts',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Ikona (emoji vai SVG nosaukums)',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Kategorijas attēls',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Kārtošanas secība',
      defaultValue: 0,
      admin: {
        description: 'Mazāks skaitlis = augstāk sarakstā',
      },
    },
  ],
  timestamps: true,
}
