import { Image, StyleSheet, Text, View } from "react-native";

import { theme } from "../../theme/theme";

type SerieCardProps = {
  imgUrl: string;
  title: string;
};

export const SerieCard: React.FC<SerieCardProps> = ({ imgUrl, title }) => {
  return (
    <View style={styles.movieCard}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.cardImage}
      />

      <Text numberOfLines={1} style={styles.cardTitle}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    height: 230,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    borderRadius: 28,
    width: "48%",
    margin: 5,
  },
  cardImage: {
    borderTopEndRadius: 28,
    borderTopLeftRadius: 28,

    height: 200,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
    color: theme.colors.white,
    paddingHorizontal: 10,
  },
});
