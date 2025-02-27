import { Header, Loading } from "../../custom";
import Link from "next/link";
import Image from "next/image";
import { ScrollArea } from "../../ui";
import { type DetailedRecipeType, type RecipeType } from "../../../types";

type Props = {
  isLoading?: boolean;
  recipe: DetailedRecipeType;
  recipes: RecipeType[];
};

function RecipeSidebar(props: Props) {
  const { isLoading, recipes, recipe } = props;

  if (isLoading) {
    return (
      <>
        <div className="hidden md:block md:min-w-[400px]" />
        <div className="t-0 b-0 right-0 h-full md:fixed md:w-[400px]">
          <Loading className="h-full p-8" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="hidden md:block md:min-w-[400px]" />
      <div className="t-0 b-0 right-0 md:fixed md:w-[400px]">
        <ScrollArea
          type="scroll"
          className="no-scrollbar my-auto flex h-full w-full flex-col md:max-h-[100vh]"
        >
          {recipes.map((r, index) => (
            <Link href={`/?category=${recipe.strCategory}`} key={index}>
              <div className="m-4 flex items-center gap-2 rounded-md border-input bg-background p-2 shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                <Header vtag="h5" className="px-2 text-muted-foreground">
                  {index}
                </Header>
                {r.strMealThumb && (
                  <Image
                    src={r.strMealThumb}
                    alt={r.strMeal}
                    width={50}
                    height={50}
                    className="h-12 w-12 rounded-lg"
                  />
                )}
                <Header vtag="h5">{r.strMeal}</Header>
              </div>
            </Link>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}
export { RecipeSidebar };
