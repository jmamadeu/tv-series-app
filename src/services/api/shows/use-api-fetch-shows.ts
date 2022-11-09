import { useQuery } from "@tanstack/react-query";

import { apiInstance } from "../api-instance";

const fetchShows = async () => {
  const response = await apiInstance.get<Array<API.Show.Response>>("/shows");

  const parsedDate: Array<Module.Show.Type> = response.data.map((show) => ({
    id: show.id,
    name: show.name,
    image: show.image.medium,
    description: show.summary,
    premiered: show.premiered,
    genres: show.genres,
    rating: show.rating.average
  }));

  return parsedDate;
};

export const useApiFetchShows = () => {
  return useQuery(["schedule"], fetchShows);
};
