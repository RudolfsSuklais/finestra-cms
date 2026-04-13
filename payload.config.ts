import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Categories } from './payload/collections/Categories'
import { Products } from './payload/collections/Products'
import { Media } from './payload/collections/Media'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    meta: { titleSuffix: '— Finestra CMS' },
  },
  collections: [
    Categories,
    Products,
    Media,
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email' },
      fields: [],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET ?? 'fallback-dev-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI ?? '' },
    push: true,
  }),
  upload: { limits: { fileSize: 10_000_000 } },
  cors: [process.env.NEXT_PUBLIC_FRONTEND_URL ?? 'http://localhost:3000', 'https://finestrasolution.com', 'https://www.finestrasolution.com'],
  csrf: [process.env.NEXT_PUBLIC_FRONTEND_URL ?? 'http://localhost:3000', 'https://finestrasolution.com', 'https://www.finestrasolution.com'],
})
