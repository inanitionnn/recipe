"use client";
import { useQuery } from "@tanstack/react-query";
import { getRecipesOptions } from "../api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { type RecipeType } from "../types";

type Props = {
  ingredient?: string | null;
  country?: string | null;
  category?: string | null;
};

export const useGetRecipes = (props: Props) => {
  const { data, error, isLoading } = useQuery(
    getRecipesOptions({ params: props }),
  );
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    if (data) {
      setRecipes(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching recipes: " + error.message);
    }
  }, [error]);

  return { recipes, isLoading };
};
