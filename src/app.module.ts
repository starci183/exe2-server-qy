import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllersModule } from './controllers';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "103.162.14.225",
      port: 3307,
      username: "root",
      password: "Cuong123_A",
      database: "aurora-toystore",
      autoLoadEntities: true,
      synchronize: true,
      timezone: "Z",
    }),
    ControllersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule { }
