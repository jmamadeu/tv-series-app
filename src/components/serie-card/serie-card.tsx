import { Image, Pressable, StyleSheet, Text } from "react-native";

import { theme } from "../../theme/theme";

type SerieCardProps = {
  data: Module.Show.Type;
  onPress: () => void;
};

export const SerieCard: React.FC<SerieCardProps> = ({
  data: { name, image },
  onPress
}) => {
  return (
    <Pressable style={styles.movieCard} onPress={onPress}>
      <Image
        source={{
          uri: image
        }}
        style={styles.cardImage}
      />

      <Text numberOfLines={1} style={styles.cardTitle}>
        {name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    height: 230,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    borderRadius: 28,
    width: "48%",
    margin: 5
  },
  cardImage: {
    borderTopEndRadius: 28,
    borderTopLeftRadius: 28,

    height: 200
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
    color: theme.colors.white,
    paddingHorizontal: 10
  }
});
