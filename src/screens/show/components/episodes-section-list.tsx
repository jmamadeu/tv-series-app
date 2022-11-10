import { FlatList, StyleSheet, Text, View } from "react-native";

import { EpisodeCard } from "../../../components/episode-card/episode-card";
import { theme } from "../../../theme/theme";

type EpisodesSectionListProps = {
  season: API.Episode.ParsedResponse;
  onEpisodeClick: (episode: Module.Episode.Type) => void;
};

export const EpisodesSectionList: React.FC<EpisodesSectionListProps> = ({
  season,
  onEpisodeClick
}) => {
  return (
    <View>
      <View style={styles.seasonContainer}>
        <Text key={season.title} style={styles.season}>
          Season - {season.title}
        </Text>

        <FlatList
          data={season?.data}
          contentContainerStyle={{ paddingLeft: 24 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, index) => String(item.id + index)}
          renderItem={({ item }) => (
            <EpisodeCard
              onPress={() => onEpisodeClick(item)}
              key={item.id}
              data={item}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  season: {
    fontWeight: "500",
    fontSize: 18,
    color: theme.colors.white,
    marginBottom: 8,
    paddingHorizontal: 24
  },
  seasonContainer: {
    marginVertical: 10
  }
});
