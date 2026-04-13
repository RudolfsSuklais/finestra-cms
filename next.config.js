import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'

export default withPayload({}, {
  configPath: path.resolve(process.cwd(), 'payload.config.ts'),
})
