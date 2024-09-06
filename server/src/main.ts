import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST,', 'PUT', 'PATCH', 'DELETE'],
  })
  const config = new DocumentBuilder()
    .setTitle('SpeakFlow Api')
    .setDescription('')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('doc', app, document)

  await app.listen(Number(process.env.PORT) || 4000)
}
bootstrap()
