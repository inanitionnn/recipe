import { Inject, Injectable } from '@nestjs/common';
import { createLogger, Logger as WinstonLogger, LoggerOptions } from 'winston';

import { ILogger } from '../logger.interface';
import { NESTJS_WINSTON_CONFIG_OPTIONS } from './winston.const';

@Injectable()
export class WinstonLoggerService implements ILogger {
  private logger: WinstonLogger;
  constructor(@Inject(NESTJS_WINSTON_CONFIG_OPTIONS) config: LoggerOptions) {
    this.logger = createLogger(config);
  }

  private getTimestamp() {
    return new Date().toISOString();
  }

  public log(message: unknown, title = '') {
    this.logger.info(`${title} [${this.getTimestamp()}] ` + message);
  }

  public warn(message: unknown, title = '') {
    this.logger.warn(
      `${title} [${this.getTimestamp()}] ` + JSON.stringify(message),
    );
  }

  public error(message: unknown, title = '', trace?: string) {
    this.logger.error(`${title} [${this.getTimestamp()}] ` + message, trace);
  }

  public debug(message: unknown, title: string = ''): void {
    if (typeof message === 'string') {
      this.logger.debug(`${title} [${this.getTimestamp()}] ` + message);
    }
    this.logger.debug(
      `${title} [${this.getTimestamp()}] ` + JSON.stringify(message),
    );
  }
}
