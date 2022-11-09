import { useQuery } from "@tanstack/react-query";

import { apiInstance } from "../api-instance";

const fetchEpisodes = async (showId: number) => {
  const response = await apiInstance.get<Array<API.Episode.Response>>(
    `/shows/${showId}/episodes`
  );

  const seasons = [];

  response.data.forEach(({ id, name, number, image, season, summary }) => {
    const seasonIndex = seasons.findIndex(
      (seasonToFind) => seasonToFind?.title === season
    );

    const episode = {
      id,
      name,
      number,
      image: image.medium,
      season,
      summary
    };

    if (seasonIndex >= 0) {
      seasons[seasonIndex] = {
        ...seasons[seasonIndex],
        data: [...seasons[seasonIndex].data, episode]
      };
    } else {
      seasons.push({
        title: episode?.season,
        data: [episode]
      });
    }
  });

  return seasons;
};

export const useApiFetchEpisodesByShowId = (showId: number) => {
  return useQuery(["shows", showId, "episodes"], () => fetchEpisodes(showId));
};
