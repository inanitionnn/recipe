import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { EnvHealthIndicator } from './indicators';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private env: EnvHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    return this.health.check([() => this.env.check('env')]);
  }
}
