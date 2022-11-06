import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";

type SerieCardProps = {
  imgUrl: string;
};

export const SerieCard: React.FC<SerieCardProps> = ({ imgUrl }) => {
  return (
    <View style={styles.movieCard}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.cardImage}
      />

      <Text style={styles.cardTitle}>
        La Casa de Papel
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
  },
  serieCard: {
    borderRadius: 28,
  },
  cardImage: {
    borderTopEndRadius: 28,
    borderTopLeftRadius: 28,
    width: 170,
    height: 200,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
    color: theme.colors.white
  },
});
