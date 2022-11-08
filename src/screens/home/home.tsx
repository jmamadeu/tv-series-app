import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import { SerieCard } from "../../components/serie-card/serie-card";
import type { StackParamsList } from "../../routes/routes";
import { useApiFetchShows } from "../../services/api/shows/use-api-fetch-shows";
import { theme } from "../../theme/theme";

type Props = NativeStackScreenProps<StackParamsList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const { data: shows } = useApiFetchShows();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={[styles.whiteText, styles.helloText]}>TV Series</Text>
          <Text style={[styles.whiteText, styles.helperText]}>
            Check for the latest series
          </Text>
        </View>

        <View style={styles.searchInputContainer}>
          <View style={styles.inputContainer}>
            <Feather
              style={styles.searchIcon}
              color={theme.colors.white}
              name="search"
              size={24}
            />
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor={theme.colors.gray[100]}
            />
          </View>
        </View>

        <View style={styles.seriesView}>
          <Text style={[styles.whiteText, styles.seriesText]}>Series</Text>
          <View style={styles.seriesList}>
            <FlatList
              numColumns={2}
              data={shows}
              keyExtractor={(key) => String(key.id)}
              renderItem={({ item: show }) => (
                <SerieCard
                  onPress={() => {
                    navigation.push("Show", {
                      show
                    });
                  }}
                  data={show}
                />
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark[100]
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 5
  },
  whiteText: {
    color: theme.colors.white
  },
  helloText: {
    fontWeight: "600",
    fontSize: 24
  },
  helperText: {
    fontWeight: "500",
    fontSize: 14,
    color: theme.colors.gray[100],
    marginTop: 4
  },
  searchInputContainer: {
    marginTop: 16
  },
  inputContainer: {
    backgroundColor: theme.colors.gray[1000],
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16
  },
  searchIcon: {
    paddingLeft: 16
  },
  input: {
    flex: 1,
    color: theme.colors.white,
    paddingLeft: 16,
    height: 52,
    fontWeight: "500",
    fontSize: 14
  },
  seriesView: {
    flex: 1,
    marginTop: 16
  },
  seriesText: {
    fontSize: 24
  },
  seriesList: {
    marginTop: 8
  }
});
