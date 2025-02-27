import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../lib";
import { getRecipesOptions } from "../api";
import { HomeContainer } from "../components/modules";
import { Container, ScrollButton } from "../components/custom";

export default function HomePage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getRecipesOptions({}));

  return (
    <main className="h-full w-full">
      <Container>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <HomeContainer />
          <ScrollButton />
        </HydrationBoundary>
      </Container>
    </main>
  );
}
