import { StyleSheet, ScrollView, Dimensions, StatusBar } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Video } from "expo-av";
import ClipsVideos from "../../components/stories/ClipsVideos";
import YoutubeVideos from "../../components/stories/YoutubeVideos";
import { getStories } from "../../axios/stories.axios";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const Stories = ({ navigation }) => {
  const [miniClips, setMiniClips] = useState([]);
  const [youtubeClips, setYoutubeClips] = useState([]);

  useEffect(() => {
    getStories().then((res) => {
      setMiniClips(res.data.filter((clip) => clip.video_type === "Mini clip"));
      setYoutubeClips(res.data.filter((clip) => clip.video_type === "Youtube"));
      console.log(miniClips);
      console.log(youtubeClips);
    });
  }, []);

  return (
    <LinearGradient
      colors={["#1D47BA", "#5F9BA9", "#A3D4DE", "#F6F9FB"]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <ClipsVideos clips={miniClips} navigation={navigation} />
        <YoutubeVideos clips={youtubeClips} />
      </ScrollView>
    </LinearGradient>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
	  height: height,
	  width: width,
  },
  scrollView: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginTop: StatusBar.currentHeight,
  },
});
