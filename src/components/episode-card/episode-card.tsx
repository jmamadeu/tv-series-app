import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

import { theme } from "../../theme/theme";

type EpisodeCardProps = {
  data: Module.Episode.Type;
  onPress: () => void;
};

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  data: { image, name },
  onPress
}) => {
  return (
    <Pressable onPress={onPress}>
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
    </Pressable>
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
