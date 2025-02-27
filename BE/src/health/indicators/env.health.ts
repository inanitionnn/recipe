import { Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import { validate } from '../../env-validation';

@Injectable()
export class EnvHealthIndicator extends HealthIndicator {
  check(key: string): HealthIndicatorResult {
    try {
      const config = process.env;
      validate(config);
      return this.getStatus(key, true);
    } catch {
      throw new HealthCheckError(
        'Env check failed',
        this.getStatus(key, false),
      );
    }
  }
}
