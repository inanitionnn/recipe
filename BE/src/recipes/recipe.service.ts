import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { GetRecipeFilterDto } from './dtos';
import { MealResponse, DetailedMealResponse } from './responses';
import {
  transformToArrayHelper,
  transformToObjectHelper,
} from '../shared/helpers';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AppConfigType } from '../shared/types';

@Injectable()
export class RecipeService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService<AppConfigType>,
  ) {}

  private processMealDetails(meal: object): object {
    const ingredients: string[] = [];
    const measures: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(ingredient);
        measures.push(measure || '');
      }
    }

    return {
      ...meal,
      ingredients,
      measures,
    };
  }

  public async getRecipes(props: GetRecipeFilterDto): Promise<MealResponse[]> {
    const { category, country, ingredient } = props;
    try {
      const baseUrl = this.configService.get<string>('recipeApiUrl');
      let link = '';

      if (!category && !country && !ingredient) {
        link = `${baseUrl}search.php?s=`;
      } else {
        link = `${baseUrl}filter.php?`;
        const queryParams = new URLSearchParams();

        if (category) queryParams.append('c', category);
        if (country) queryParams.append('a', country);
        if (ingredient) queryParams.append('i', ingredient);

        link += queryParams.toString();
      }

      const response = await firstValueFrom(
        this.httpService.get<{ meals: DetailedMealResponse[] }>(link),
      );

      return transformToArrayHelper(response.data.meals || [], MealResponse);
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to fetch recipes: ${error.message}`,
      );
    }
  }

  public async getRecipeDetails(id: number): Promise<DetailedMealResponse> {
    let recipe: object | null = null;
    try {
      const baseUrl = this.configService.get<string>('recipeApiUrl');
      const link = `${baseUrl}lookup.php?i=${id}`;
      const response = await firstValueFrom(
        this.httpService.get<{ meals: [object] }>(link),
      );
      recipe = response.data.meals[0];
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to fetch recipe details: ${error.message}`,
      );
    }

    if (!recipe) {
      throw new NotFoundException('Recipe details not found');
    }

    return transformToObjectHelper(
      this.processMealDetails(recipe),
      DetailedMealResponse,
    );
  }
}
