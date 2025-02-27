import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RecipeModule } from './recipes';
import { HealthModule } from './health';
import { LoggerMiddleware, LoggerModule } from './logger';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env-validation';
import appConfig from './shared/config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      load: [appConfig],
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TerminusModule,
    LoggerModule.register(),
    RecipeModule,
    HealthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
