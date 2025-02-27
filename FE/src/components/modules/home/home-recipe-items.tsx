import Link from "next/link";
import Image from "next/image";
import { type RecipeType } from "../../../types";
import { Header } from "../../custom";

type Props = {
  index: number;
  recipe: RecipeType;
};
function HomeRecipeItem(props: Props) {
  const { index, recipe } = props;

  return (
    <Link href={`/recipe/${recipe.idMeal}`}>
      <div className="flex items-center gap-4 rounded-lg border border-input bg-background px-6 py-4 shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
        <Header vtag="h3" className="px-2 text-muted-foreground">
          {index}
        </Header>
        {recipe.strMealThumb && (
          <Image
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            width={100}
            height={100}
            className="h-24 w-24 rounded-lg"
          />
        )}
        <Header vtag="h3">{recipe.strMeal}</Header>
      </div>
    </Link>
  );
}
export { HomeRecipeItem };
