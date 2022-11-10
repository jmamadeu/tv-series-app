import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { theme } from "../../../theme/theme";

type BannerCardProps = {
  show: Module.Show.Type;
};

export const BannerCard: React.FC<BannerCardProps> = ({ show }) => {
  return (
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
            {new Date(show.premiered).getFullYear()} | {show.genres.join(", ")}{" "}
            | {show.rating}{" "}
            <AntDesign name="star" size={14} color={theme.colors.orange[100]} />
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  }
});
