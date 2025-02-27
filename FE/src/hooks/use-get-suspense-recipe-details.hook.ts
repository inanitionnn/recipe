"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecipeDetailsOptions } from "../api";
import { useEffect } from "react";
import { toast } from "sonner";

type Props = {
  id: string;
};

export const useGetSuspenseRecipeDetails = (props: Props) => {
  const { id } = props;

  const { data, error, isLoading } = useSuspenseQuery(
    getRecipeDetailsOptions(id),
  );

  useEffect(() => {
    if (error) {
      toast.error("Error fetching recipe details: " + error.message);
    }
  }, [error]);

  return { recipe: data, isLoading };
};
