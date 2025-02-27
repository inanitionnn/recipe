import { queryOptions } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
import { type RecipeType } from "../types";

type Props = {
  params?: {
    ingredient?: string | null;
    country?: string | null;
    category?: string | null;
  };
};

export const getRecipes = async (props: Props) => {
  const { params } = props;
  const response = await axiosInstance.get<RecipeType[]>("/recipes", {
    params,
  });
  return response.data;
};

export const getRecipesOptions = (props: Props) =>
  queryOptions({
    queryKey: ["recipe"],
    queryFn: async () => getRecipes(props),
  });
