import { useQuery } from "@tanstack/react-query";

import { apiInstance } from "../api-instance";

const fetchShows = async () => {
  const response = await apiInstance.get<Array<API.Show.Response>>(
    "/schedule/web"
  );

  const parsedDate: Array<Module.Show.Type> = response.data.map((show) => ({
    id: show.id,
    name: show.name,
    image: show._embedded.show.image.medium,
    description: show._embedded.show.summary
  }));

  return parsedDate;
};

export const useApiFetchShows = () => {
  return useQuery(["schedule"], fetchShows);
};
