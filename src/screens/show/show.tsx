import { AntDesign } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import type { StackParamsList } from "../../routes/routes";
import { useApiFetchEpisodesByShowId } from "../../services/api/shows/use-api-fetch-episodes-by-show-id";
import { theme } from "../../theme/theme";

type Props = NativeStackScreenProps<StackParamsList, "Show">;

export const ShowScreen = ({ route }: Props) => {
  const { show } = route.params;
  const { data: seasons } = useApiFetchEpisodesByShowId(show.id);

  console.log(seasons);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: show.image
        }}
        style={styles.image}
      >
        <LinearGradient
          colors={["transparent", "transparent", theme.colors.dark[100]]}
          style={styles.linear}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{show.name}</Text>
            <Text style={styles.helper}>
              {new Date(show.premiered).getFullYear()} |{" "}
              {show.genres.join(", ")} | {show.rating}{" "}
              <AntDesign
                name="star"
                size={14}
                color={theme.colors.orange[100]}
              />
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.plotContainer}>
        <Text style={styles.plot}>Plot</Text>
        <Text style={styles.summary}>{show.description}</Text>
      </View>

      {/* <SectionList sections={seasonsParsed} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark[100]
  },
  image: {
    width: "100%",
    height: 400
  },
  linear: {
    flex: 1
  },
  content: {
    alignSelf: "center",
    marginTop: "auto"
  },
  title: {
    fontSize: 24,
    color: theme.colors.white,
    fontWeight: "600",
    textAlign: "center"
  },
  helper: {
    marginTop: 4,
    fontSize: 14,
    color: theme.colors.gray[100],
    textAlign: "center"
  },
  plotContainer: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  plot: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: "600"
  },
  summary: {
    marginTop: 8,
    color: theme.colors.gray[100],
    fontSize: 12,
    fontWeight: "500"
  }
});
