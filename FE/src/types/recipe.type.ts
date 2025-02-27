type BaseRecipeType = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string | null;
  ingredients: string[];
  measures: string[];
  strSource: string | null;
};

export type RecipeType = Pick<
  BaseRecipeType,
  "strMeal" | "strMealThumb" | "idMeal"
>;

export type DetailedRecipeType = BaseRecipeType;
