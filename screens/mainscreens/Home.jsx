import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { liveevent, yt } from "../../data/liveevent.data";
import { aboutget, getEvents, getyoutube } from "../../axios/home.axios";
import Swipercontainer from "../../components/swipercontainer";
import Gridcont from "../../components/grid/grid";
import Loading from "./Loading";
// import Swipercont from "../../components/swiper";
// import {LinearGradient} from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const [about, setAbout] = useState([]);
  const [events, setEvents] = useState([]);
  const [youtube, setYoutube] = useState([]);

  const fetchHomeAbout = () =>
    aboutget()
      .then((res) => {
        setAbout(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  // fetchHomeAbout();
  const fetchLiveEvents = () =>
    getEvents().then((res) => {
      setEvents(res.data);
      console.log(res.data);
    });

  const fetchYoutube = () =>
    getyoutube().then((res) => {
      setYoutube(res.data);
    });

  useEffect(() => {
    fetchHomeAbout();
  }, [about]);

  useEffect(() => {
    fetchLiveEvents();
  }, [events]);

  useEffect(() => {
    fetchYoutube();
  }, [youtube]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollA } } }],
            { useNativeDriver: false }
          )}
        >
          <Animated.View style={styles.areaone(scrollA)}>
            <Image style={styles.openimage} source={{ uri: 'https://images-ext-2.discordapp.net/external/29ZcYUj6omUZgotgMUrAz031XA4TLpwiRjUI3iAAFME/https/res.cloudinary.com/dn3s6sgki/image/upload/v1650284469/ABLE/1_2_qmifnd.jpg' }}/>
            <Text style={styles.rajesh}>DR.RAJESH FERNANDO</Text>
          </Animated.View>
          <View style={styles.areacontainer}>
            <View style={styles.areatwo}>
              <View style={styles.aboutview}>
                <Text style={styles.abouttitle}>About Able</Text>
              </View>
              <View style={styles.aboutcontent}>
                <Text style={styles.abouttext}>{about.description}</Text>
              </View>
            </View>
           {events.length > 0  && <Swipercontainer liveevent={events} title={"Live events"} />}
            <View style={styles.areatwo}>
              <View style={styles.aboutview}>
                <Text style={styles.abouttitle}>ABLE</Text>
              </View>
              <View>
                
                <Gridcont />
              </View>
            </View>
            <Swipercontainer liveevent={youtube} title={"Youtube videos"} />
            <StatusBar
              barStyle="light-content"
              hidden={false}
              backgroundColor="#336DF5"
              translucent={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#336DF5",
    paddingBottom: 50,
  },
  scrollView: {
    width: width,
  },
  areaone: (scrollA) => ({
    height: 250,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#336DF5",
    top: scrollA,
    transform: [{ translateY: scrollA }],
  }),
  areacontainer: {
    width: width,
    backgroundColor: "#000",
    borderRadius: 40,
    borderColor: "#fff",
    borderWidth: 1,
    shadowColor: "#fff",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
	elevation: 5,
  },
  areatwo: {
    height: height / 2.2,
    alignItems: "center",
    justifyContent: "center",
  },
  abouttitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  aboutview: {
    height: 50,
    width: width - 50,
  },
  aboutcontent: {
    width: width - 80,
  },
  abouttext: {
    color: "#fff",
    fontSize: 17,
    // lineHeight: 10,
    textAlign: "justify",
  },
  rajesh: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  openimage:{
    position: 'absolute',
    width: width,
    height: 350,
  }
});

export default Home;
