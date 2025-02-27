import { queryOptions } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
import { type DetailedRecipeType } from "../types";

type Props = {
  id: string;
};

export const getRecipeDetails = async (props: Props) => {
  const { id } = props;
  const response = await axiosInstance.get<DetailedRecipeType>(
    `/recipes/${id}`,
  );
  return response.data;
};

export const getRecipeDetailsOptions = (id: string) =>
  queryOptions({
    queryKey: ["recipe", id],
    queryFn: async () => getRecipeDetails({ id }),
  });
