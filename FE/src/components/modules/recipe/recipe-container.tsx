"use client";
import { Header, Loading, Paragraph } from "../../custom";
import { useGetRecipes, useGetSuspenseRecipeDetails } from "../../../hooks";

import Link from "next/link";
import Image from "next/image";
import { RecipeSidebar } from "./recipe-sidebar";

type Props = {
  id: string;
};

function RecipeContainer(props: Props) {
  const { id } = props;

  const { recipe, isLoading: isLoadingDetails } = useGetSuspenseRecipeDetails({
    id,
  });

  const { recipes, isLoading: isLoadingRecipes } = useGetRecipes({
    category: recipe.strCategory,
  });

  if (isLoadingDetails) {
    return <Loading />;
  }

  return (
    <>
      <div className="h-min-screen relative flex w-full flex-col-reverse md:flex-row">
        <div className="mx-auto flex w-full max-w-screen-md flex-col gap-4 p-8">
          {recipe.strMealThumb && (
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              width={150}
              height={150}
              className="h-36 w-36 rounded-lg"
            />
          )}
          <Header vtag="h1" className="text-center">
            {recipe.strMeal}
          </Header>

          <Link href={`/?country=${recipe.strArea}`}>
            <Header vtag="h3" className="text-center">
              Country: {recipe.strArea}
            </Header>
          </Link>
          <Header vtag="h3">Instruction</Header>
          <div className="max-w-prose space-y-2">
            {recipe.strInstructions.split("\n").map((i) => (
              <Paragraph key={i}>{i}</Paragraph>
            ))}
          </div>

          <Header vtag="h3">Ingredients</Header>
          {recipe.ingredients.map((ing, index) => (
            <Link href={`/?ingredient=${ing}`} key={index}>
              <Paragraph>- {ing}</Paragraph>
            </Link>
          ))}
        </div>
        <RecipeSidebar
          isLoading={isLoadingRecipes}
          recipe={recipe}
          recipes={recipes}
        />
      </div>
    </>
  );
}
export { RecipeContainer };
