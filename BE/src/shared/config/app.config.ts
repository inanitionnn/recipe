import * as process from 'process';

import { EnvironmentEnum } from '../enums';
import { AppConfigType } from '../types';

export default (): AppConfigType => ({
  environment: process.env.ENVIRONMENT || EnvironmentEnum.Development,
  port: Number(process.env.PORT) || 3000,
  recipeApiUrl:
    process.env.RECIPE_API_URL || 'https://www.themealdb.com/api/json/v1/1/',
});
