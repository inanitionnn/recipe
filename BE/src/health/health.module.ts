import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { EnvHealthIndicator } from './indicators';
import { HealthController } from './health.controller';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [EnvHealthIndicator],
})
export class HealthModule {}
