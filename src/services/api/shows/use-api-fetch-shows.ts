import { useQuery } from "@tanstack/react-query";

import { apiInstance } from "../api-instance";

const fetchShows = async () => {
  const response = await apiInstance.get<Array<API.Show.Response>>(
    "/schedule/web"
  );

  const parsedDate = response.data.map((show) => ({
    id: show.id,
    name: show.name,
    _embedded: {
      show: {
        image: show._embedded.show.image,
      },
    },
  }));

  return parsedDate;
};

export const useApiFetchShows = () => {
  return useQuery(["schedule"], fetchShows);
};
