import { withPayload } from '@payloadcms/next/withPayload'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default withPayload({}, {
  configPath: path.resolve(__dirname, 'payload.config.ts'),
})
