import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllersModule } from './controllers';

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
    ControllersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
