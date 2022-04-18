import {
<<<<<<< HEAD
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
import Loading from './Loading'
=======
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	Image,
	Dimensions,
	StatusBar,
	Animated
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { liveevent, yt } from '../../data/liveevent.data';
import { aboutget, getEvents, getyoutube } from '../../axios/home.axios';
import Swipercontainer from '../../components/swipercontainer';
import Gridcont from '../../components/grid/grid';

>>>>>>> d1d207cf075adafb4cc7fb1f896f7c8c205034ca
// import Swipercont from "../../components/swiper";
// import {LinearGradient} from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
<<<<<<< HEAD
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const scrollA = useRef(new Animated.Value(0)).current;
  const [about, setAbout] = useState([]);
  const [events, setEvents] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [loading, setLoading] = useState(true);
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
    });
=======
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
		});
>>>>>>> d1d207cf075adafb4cc7fb1f896f7c8c205034ca

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

<<<<<<< HEAD
  return (
    <>
    {loading ? (<Loading/>) : (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollA } } },
        ],{useNativeDriver: false})}
      >
        <Animated.View style={styles.areaone(scrollA)}>
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
          <Swipercontainer liveevent={liveevent} title={"Live events"} />
          <View style={styles.areatwo}>
            <View style={styles.aboutview}>
              <Text style={styles.abouttitle}>ABLE</Text>
            </View>
            <View>
              <Gridcont />
            </View>
          </View>
          <Swipercontainer liveevent={yt} title={"Youtube videos"} />
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#336DF5"
            translucent={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>)}</>
  );
=======
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				style={styles.scrollView}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollA } } }],
					{ useNativeDriver: false }
				)}
			>
				<Animated.View style={styles.areaone(scrollA)}>
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
					<Swipercontainer liveevent={liveevent} title={'Live events'} />
					<View style={styles.areatwo}>
						<View style={styles.aboutview}>
							<Text style={styles.abouttitle}>ABLE</Text>
						</View>
						<View>
							<Gridcont />
						</View>
					</View>
					<Swipercontainer liveevent={yt} title={'Youtube videos'} />
					<StatusBar
						barStyle='light-content'
						hidden={false}
						backgroundColor='#336DF5'
						translucent={true}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
>>>>>>> d1d207cf075adafb4cc7fb1f896f7c8c205034ca
};

const styles = StyleSheet.create({
	container: {
		paddingTop: StatusBar.currentHeight,
		backgroundColor: '#336DF5',
		paddingBottom: 50
	},
	scrollView: {
		width: width
	},
	areaone: (scrollA) => ({
		height: 250,
		width: width,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#336DF5',
		top: scrollA,
		transform: [{ translateY: scrollA }]
	}),
	areacontainer: {
		width: width,
		backgroundColor: '#fff',
		borderRadius: 40
	},
	areatwo: {
		height: height / 2.3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	abouttitle: {
		color: '#000',
		fontSize: 30,
		fontWeight: 'bold',
		alignSelf: 'flex-start'
	},
	aboutview: {
		height: 50,
		width: width - 50
	},
	aboutcontent: {
		width: width - 80
	},
	abouttext: {
		color: '#000',
		textAlign: 'justify'
	},
	rajesh: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	}
});

export default Home;
