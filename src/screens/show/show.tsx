import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet } from "react-native";

import type { StackParamsList } from "../../routes/routes";
import { useApiFetchEpisodesByShowId } from "../../services/api/shows/use-api-fetch-episodes-by-show-id";
import { theme } from "../../theme/theme";

import { BannerCard } from "./components/banner-card";
import { EpisodesContainer } from "./components/episodes-container";
import { SummaryText } from "./components/summary";

type Props = NativeStackScreenProps<StackParamsList, "Show">;

export const ShowScreen = ({ route }: Props) => {
  const { show } = route.params;

  const { data: seasons } = useApiFetchEpisodesByShowId(show.id);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <BannerCard show={show} />

      <SummaryText description={show.description} />

      <EpisodesContainer seasons={seasons} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark[100]
  }
});
