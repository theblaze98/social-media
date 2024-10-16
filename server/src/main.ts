import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST,', 'PUT', 'PATCH', 'DELETE'],
  })

  await app.listen(Number(process.env.PORT) || 4000)
}
bootstrap()
