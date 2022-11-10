import { StyleSheet, Text, View } from "react-native";

import { theme } from "../../../theme/theme";

type SummaryTextProps = {
  description: string;
};

export const SummaryText: React.FC<SummaryTextProps> = ({ description }) => {
  return (
    <View style={styles.plotContainer}>
      <Text style={styles.plot}>Plot</Text>
      <Text style={styles.summary}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
