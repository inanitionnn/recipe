"use client";
import { useSearchParams } from "next/navigation";
import { Loading } from "../../custom";
import { useGetSuspenseRecipes } from "../../../hooks";
import { HomeRecipeItem } from "./home-recipe-items";

function HomeContainer() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const country = searchParams.get("country");
  const ingredient = searchParams.get("ingredient");

  const { recipes, isLoading } = useGetSuspenseRecipes({
    category,
    country,
    ingredient,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {recipes.map((recipe, index) => (
        <HomeRecipeItem index={index} recipe={recipe} key={recipe.idMeal} />
      ))}
    </>
  );
}
export { HomeContainer };
