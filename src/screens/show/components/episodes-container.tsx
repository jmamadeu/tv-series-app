import { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Modalize } from "react-native-modalize";

import { EpisodesSectionList } from "./episodes-section-list";

type EpisodesContainerProps = {
  seasons: Array<API.Episode.ParsedResponse>;
};

export const EpisodesContainer: React.FC<EpisodesContainerProps> = ({
  seasons
}) => {
  const [clickedEpisode, setClickedEpisode] =
    useState<Module.Episode.Type | null>(null);
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      {seasons?.map((season) => (
        <EpisodesSectionList
          onEpisodeClick={(episode) => {
            setClickedEpisode(episode);
            onOpen();
          }}
          season={season}
        />
      ))}

      <Modalize ref={modalizeRef}>
        <View style={styles.modal}>
          <Text>...your content {clickedEpisode?.name}</Text>
        </View>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    borderTopEndRadius: 10,
    borderTopRadius: 10
  }
});
