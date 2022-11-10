import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { theme } from "../../theme/theme";

type EpisodeCardProps = {
  data: Module.Episode.Type;
};

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  data: { image, name }
}) => {
  return (
    <ImageBackground
      source={{
        uri: image
      }}
      style={{
        width: 100,
        height: 164,
        margin: 5,
        borderRadius: 24
      }}
    >
      <LinearGradient
        colors={["transparent", "transparent", theme.colors.dark[100]]}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          <Text style={styles.episode}>{name}</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  content: {
    marginTop: "auto",
    alignSelf: "center"
  },
  episode: {
    color: theme.colors.white,
    textAlign: "center",
    marginBottom: 10
  }
});
