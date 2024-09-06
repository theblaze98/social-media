import { Module } from '@nestjs/common'
import { drizzle } from 'drizzle-orm/node-postgres'
import { postgresConnection } from './helpers/connection'
import { DRIZZLE_PROVIDER } from '@/helpers'

@Module({
  providers: [
    {
      provide: DRIZZLE_PROVIDER,
      useFactory: async () => {
        return drizzle(await postgresConnection())
      },
    },
  ],
})
export class DrizzleModule {}
