import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Recipe')
  .setDescription('The Recipe API service')
  .setVersion('1.0')
  .build();
