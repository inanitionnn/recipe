import { ApiProperty, PickType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

class BaseMealResponse {
  @Expose()
  @ApiProperty({
    description: 'Id of the meal',
    example: '53086',
  })
  idMeal: string;

  @Expose()
  @ApiProperty({
    description: 'Name of the meal',
    example: 'Migas',
  })
  strMeal: string;

  @Expose()
  @ApiProperty({
    description: 'Category of the meal',
    example: 'Miscellaneous',
  })
  strCategory: string;

  @Expose()
  @ApiProperty({
    description: 'Country/region of origin',
    example: 'Norwegian',
  })
  strArea: string;

  @Expose()
  @ApiProperty({
    description: 'Cooking instructions',
    example: 'STEP 1\r\nPrepare ingredients...',
  })
  strInstructions: string;

  @Expose()
  @ApiProperty({
    description: 'URL to meal image',
    example:
      'https://www.themealdb.com/images/media/meals/xd9aj21740432378.jpg',
  })
  strMealThumb: string;

  @Expose()
  @ApiProperty({
    description: 'YouTube video URL',
    example: 'https://www.youtube.com/watch?v=ub68OxEypaY',
    nullable: true,
  })
  strYoutube: string;

  @Expose()
  @ApiProperty({
    description: 'List of ingredients',
    example: ['Bread', 'Olive Oil', 'Garlic', 'Pork'],
    type: [String],
  })
  ingredients: string[];

  @Expose()
  @ApiProperty({
    description: 'List of measurements corresponding to ingredients',
    example: ['1 large', '1 1/2 L', 'Half', '1 Handfull'],
    type: [String],
  })
  measures: string[];

  @Expose()
  @ApiProperty({
    description: 'Source of the recipe',
    example: 'https://www.bbcgoodfood.com/recipes/simple-sushi',
    nullable: true,
  })
  strSource: string;
}

export class MealResponse extends PickType(BaseMealResponse, [
  'strMeal',
  'strMealThumb',
  'idMeal',
]) {}

export class DetailedMealResponse extends BaseMealResponse {}
