import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'published', 'updatedAt'],
    listSearchableFields: ['name', 'slug'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Produkta nosaukums',
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
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: 'Kategorija',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Īss sauklis',
      admin: {
        description: 'Viens teikums zem produkta nosaukuma (piem. Siltumizolācija, elegance un ilgmūžība)',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Īss apraksts (katalogam)',
      admin: {
        description: 'Redzams produktu kataloga kartiņā (1-2 teikumi)',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Pilns apraksts',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Galvenais attēls',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Galerija',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Attēls',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt teksts',
        },
      ],
    },
    {
      name: 'specifications',
      type: 'array',
      label: 'Specifikācijas',
      admin: {
        description: 'Tehniskie dati (materiāls, izmēri, sertifikāti utt.)',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Parametrs',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Vērtība',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Galvenās priekšrocības',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
          label: 'Priekšrocība',
        },
      ],
    },
    {
      name: 'relatedProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Saistītie produkti',
      admin: {
        description: 'Citi produkti, ko ieteikt šī produkta lapā',
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta virsraksts',
          admin: {
            description: 'Atstāj tukšu, lai izmantotu produkta nosaukumu',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta apraksts',
          admin: {
            description: 'Ieteicamais garums: 120-160 rakstzīmes',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Atslēgvārdi',
          admin: {
            description: 'Atslēgvārdi, atdalīti ar komatu',
          },
        },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Publicēts',
      defaultValue: true,
      admin: {
        description: 'Atslēdz, lai paslēptu produktu no vietnes',
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
