import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { ApiOperation } from '@nestjs/swagger';
import { GetRecipeFilterDto } from './dtos';
import {
  ApiDataArrayResponse,
  ApiDataObjectResponse,
  ApiIdParam,
} from '../shared/decorators';
import { MealResponse, DetailedMealResponse } from './responses';
import { IdParamDto } from '../shared/dtos';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}
  @Get()
  @ApiOperation({
    summary: 'Get a list of recipes filtered by query parameters',
  })
  @ApiDataArrayResponse(MealResponse)
  async findMany(@Query() query: GetRecipeFilterDto) {
    return this.recipeService.getRecipes(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get recipe details by id',
  })
  @ApiIdParam()
  @ApiDataObjectResponse(DetailedMealResponse)
  async findById(@Param() params: IdParamDto) {
    return this.recipeService.getRecipeDetails(Number(params.id));
  }
}
