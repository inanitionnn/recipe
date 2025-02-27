import { ScrollButton } from "../../../components/custom";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { RecipeContainer } from "../../../components/modules";
import { getQueryClient } from "../../../lib";
import { getRecipeDetailsOptions } from "../../../api";

type Props = { params: Promise<{ id: string }> };

export default async function RecipePage(props: Props) {
  const { params } = props;

  const id = (await params).id;

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getRecipeDetailsOptions(id));

  return (
    <main className="h-full w-full">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <RecipeContainer id={id} />
        <ScrollButton />
      </HydrationBoundary>
    </main>
  );
}
