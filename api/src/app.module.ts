import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'qwerty777',
      port: 5432,
      host: '127.0.0.1',
      database: 'nest_db',
      entities: ['dist/**/*.entity{.ts,.js}'],      
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
