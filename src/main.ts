import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
import { join } from 'path';
import { readFileSync } from 'fs';

const bootstrap = async () => {
  const httpsOptions: HttpsOptions = {
    key: readFileSync(join(process.cwd(), 'ssl', 'privkey.pem')),
    cert: readFileSync(join(process.cwd(), 'ssl', 'cert.pem')),
  };

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Exe2')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  await app.listen(1969);
}
bootstrap();
