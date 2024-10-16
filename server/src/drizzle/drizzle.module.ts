import { Module } from '@nestjs/common'
import { drizzle } from 'drizzle-orm/neon-http'
import { neonPostgressConnection } from './helpers/connection'
import { DRIZZLE_PROVIDER } from '@/helpers'
import * as schema from '@/drizzle/schemas'

@Module({
  providers: [
    {
      provide: DRIZZLE_PROVIDER,
      useFactory: async () => {
        try {
          return drizzle(neonPostgressConnection(), { schema })
        } catch (error) {
          console.log(error)
        }
      },
    },
  ],
  exports: [DRIZZLE_PROVIDER],
})
export class DrizzleModule {}
