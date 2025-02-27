"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecipesOptions } from "../api";
import { useEffect } from "react";
import { toast } from "sonner";

type Props = {
  ingredient?: string | null;
  country?: string | null;
  category?: string | null;
};

export const useGetSuspenseRecipes = (props: Props) => {
  const { data, error, isLoading } = useSuspenseQuery(
    getRecipesOptions({ params: props }),
  );

  useEffect(() => {
    if (error) {
      toast.error("Error fetching recipes: " + error.message);
    }
  }, [error]);

  return { recipes: data, isLoading };
};
